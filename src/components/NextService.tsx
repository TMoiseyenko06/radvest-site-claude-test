"use client";

import { useEffect, useState, useCallback } from "react";
import { useLanguage } from "@/lib/i18n";

interface ServiceSchedule {
  dayOfWeek: number;
  hour: number;
  minute: number;
  name: string;
  nameEn: string;
  durationMs: number;
}

interface TempServiceData {
  id: string;
  date: string;
  hour: number;
  minute: number;
  name: string;
  nameEn: string;
  durationHours: number;
}

interface ServiceInfo {
  name: string;
  nameEn: string;
  day: string;
  dayEn: string;
  time: string;
  timeEn: string;
  date: Date;
  durationMs: number;
}

interface ServiceState {
  type: "countdown" | "in_progress";
  service: ServiceInfo;
  countdown: { days: number; hours: number; minutes: number; seconds: number };
}

const DEFAULT_DURATION_MS = 2 * 60 * 60 * 1000; // 2 hours

const SERVICES: ServiceSchedule[] = [
  { dayOfWeek: 0, hour: 10, minute: 0, name: "Утреннее служение", nameEn: "Sunday Morning Service", durationMs: DEFAULT_DURATION_MS },
  { dayOfWeek: 0, hour: 18, minute: 0, name: "Вечернее служение", nameEn: "Sunday Evening Service", durationMs: DEFAULT_DURATION_MS },
  { dayOfWeek: 4, hour: 19, minute: 0, name: "Служение по четвергам", nameEn: "Thursday Service", durationMs: DEFAULT_DURATION_MS },
];

const DAY_NAMES_RU = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const DAY_NAMES_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS_RU = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
const MONTHS_EN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function buildServiceInfo(name: string, nameEn: string, date: Date, hour: number, minute: number, durationMs: number): ServiceInfo {
  const timeStr = `${hour}:${String(minute).padStart(2, "0")}`;
  return {
    name,
    nameEn,
    day: DAY_NAMES_RU[date.getDay()],
    dayEn: DAY_NAMES_EN[date.getDay()],
    time: `${date.getDate()} ${MONTHS_RU[date.getMonth()]}, ${timeStr}`,
    timeEn: `${MONTHS_EN[date.getMonth()]} ${date.getDate()}, ${timeStr}`,
    date,
    durationMs,
  };
}

function getServiceState(tempServices: TempServiceData[]): ServiceState {
  const now = new Date();
  const nowMs = now.getTime();

  // Build a unified list of candidate service dates (start time + duration)
  const candidates: { startMs: number; durationMs: number; info: ServiceInfo }[] = [];

  // Add recurring services (check this week and next week)
  for (const service of SERVICES) {
    for (let weekOffset = -1; weekOffset <= 1; weekOffset++) {
      const candidate = new Date(now);
      const currentDay = now.getDay();
      let daysUntil = service.dayOfWeek - currentDay;
      if (daysUntil < 0) daysUntil += 7;
      daysUntil += weekOffset * 7;

      candidate.setDate(now.getDate() + daysUntil);
      candidate.setHours(service.hour, service.minute, 0, 0);

      candidates.push({
        startMs: candidate.getTime(),
        durationMs: service.durationMs,
        info: buildServiceInfo(service.name, service.nameEn, candidate, service.hour, service.minute, service.durationMs),
      });
    }
  }

  // Add temporary services
  for (const ts of tempServices) {
    const [year, month, day] = ts.date.split("-").map(Number);
    const candidate = new Date(year, month - 1, day, ts.hour, ts.minute, 0, 0);
    const durationMs = (ts.durationHours || 2) * 60 * 60 * 1000;

    candidates.push({
      startMs: candidate.getTime(),
      durationMs,
      info: buildServiceInfo(ts.name, ts.nameEn, candidate, ts.hour, ts.minute, durationMs),
    });
  }

  // Check if any service is currently in progress
  for (const c of candidates) {
    if (nowMs >= c.startMs && nowMs < c.startMs + c.durationMs) {
      return {
        type: "in_progress",
        service: c.info,
        countdown: { days: 0, hours: 0, minutes: 0, seconds: 0 },
      };
    }
  }

  // Find next upcoming service
  let closest: ServiceInfo | null = null;
  let closestDiff = Infinity;

  for (const c of candidates) {
    const diff = c.startMs - nowMs;
    if (diff > 0 && diff < closestDiff) {
      closestDiff = diff;
      closest = c.info;
    }
  }

  const totalSeconds = Math.floor(closestDiff / 1000);
  return {
    type: "countdown",
    service: closest!,
    countdown: {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
    },
  };
}

export default function NextService() {
  const [state, setState] = useState<ServiceState | null>(null);
  const [tempServices, setTempServices] = useState<TempServiceData[]>([]);
  const { t } = useLanguage();

  // Fetch temporary services once on mount
  useEffect(() => {
    fetch("/api/services")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setTempServices(data))
      .catch(() => setTempServices([]));
  }, []);

  const update = useCallback(() => {
    setState(getServiceState(tempServices));
  }, [tempServices]);

  useEffect(() => {
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [update]);

  if (!state) return null;

  if (state.type === "in_progress") {
    return (
      <section className="bg-charcoal text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 rounded-full text-sm font-bold">
              <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
              {t("СЕЙЧАС ИДЁТ", "NOW LIVE")}
            </span>
            <div className="text-center sm:text-left">
              <div className="font-bold text-lg">{t(state.service.name, state.service.nameEn)}</div>
              <div className="text-sm text-white/70">
                {t(state.service.day, state.service.dayEn)}, {t(state.service.time, state.service.timeEn)}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-charcoal text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="text-center sm:text-left">
            <div className="text-xs uppercase tracking-wider text-white/60 mb-1">
              {t("Следующее служение", "Next Service")}
            </div>
            <div className="font-bold text-lg">
              {t(state.service.name, state.service.nameEn)}
            </div>
            <div className="text-sm text-white/70">
              {t(state.service.day, state.service.dayEn)}, {t(state.service.time, state.service.timeEn)}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {[
              { value: state.countdown.days, label: t("дн", "d") },
              { value: state.countdown.hours, label: t("ч", "h") },
              { value: state.countdown.minutes, label: t("мин", "m") },
              { value: state.countdown.seconds, label: t("сек", "s") },
            ].map((unit) => (
              <div key={unit.label} className="text-center">
                <div className="bg-white/10 rounded-lg w-14 h-14 flex items-center justify-center text-2xl font-bold">
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="text-xs text-white/50 mt-1">{unit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
