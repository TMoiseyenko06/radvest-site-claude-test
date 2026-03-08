"use client";

import { useEffect, useState } from "react";

interface ServiceInfo {
  name: string;
  nameEn: string;
  day: string;
  time: string;
  date: Date;
}

const SERVICES = [
  { dayOfWeek: 0, hour: 10, minute: 0, name: "Утреннее служение", nameEn: "Sunday Morning Service" },
  { dayOfWeek: 0, hour: 18, minute: 0, name: "Вечернее служение", nameEn: "Sunday Evening Service" },
  { dayOfWeek: 4, hour: 19, minute: 0, name: "Служение по четвергам", nameEn: "Thursday Service" },
] as const;

function getNextService(): ServiceInfo {
  const now = new Date();
  let closest: ServiceInfo | null = null;
  let closestDiff = Infinity;

  for (const service of SERVICES) {
    for (let weekOffset = 0; weekOffset <= 1; weekOffset++) {
      const candidate = new Date(now);
      const currentDay = now.getDay();
      let daysUntil = service.dayOfWeek - currentDay;
      if (daysUntil < 0) daysUntil += 7;
      daysUntil += weekOffset * 7;

      candidate.setDate(now.getDate() + daysUntil);
      candidate.setHours(service.hour, service.minute, 0, 0);

      const diff = candidate.getTime() - now.getTime();
      if (diff > 0 && diff < closestDiff) {
        closestDiff = diff;
        const dayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        const timeStr = `${service.hour}:${String(service.minute).padStart(2, "0")}`;
        closest = {
          name: service.name,
          nameEn: service.nameEn,
          day: dayNames[service.dayOfWeek],
          time: `${candidate.getDate()} ${months[candidate.getMonth()]}, ${timeStr}`,
          date: candidate,
        };
      }
    }
  }

  return closest!;
}

function formatCountdown(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function NextService() {
  const [service, setService] = useState<ServiceInfo | null>(null);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function update() {
      const next = getNextService();
      setService(next);
      const diff = next.date.getTime() - Date.now();
      setCountdown(formatCountdown(diff > 0 ? diff : 0));
    }
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!service) return null;

  return (
    <section className="bg-charcoal text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="text-center sm:text-left">
            <div className="text-xs uppercase tracking-wider text-white/60 mb-1">
              Следующее служение
            </div>
            <div className="font-bold text-lg">
              {service.name}
            </div>
            <div className="text-sm text-white/70">
              {service.day}, {service.time}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {[
              { value: countdown.days, label: "дн" },
              { value: countdown.hours, label: "ч" },
              { value: countdown.minutes, label: "мин" },
              { value: countdown.seconds, label: "сек" },
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
