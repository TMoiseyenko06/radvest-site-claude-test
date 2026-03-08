"use client";

import { useEffect, useState } from "react";

interface StreamInfo {
  id: string;
  title: string;
  thumbnail: string;
  scheduledStart: string | null;
  status: "live" | "upcoming" | "none";
}

interface YouTubeData {
  live: StreamInfo[];
  upcoming: StreamInfo[];
  error?: string;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const months = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря",
  ];
  const dayNames = [
    "Воскресенье", "Понедельник", "Вторник", "Среда",
    "Четверг", "Пятница", "Суббота",
  ];
  const day = dayNames[date.getDay()];
  const d = date.getDate();
  const month = months[date.getMonth()];
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const h12 = hours % 12 || 12;
  return `${day}, ${d} ${month} — ${h12}:${minutes} ${ampm}`;
}

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-full">
      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
      В ЭФИРЕ
    </span>
  );
}

function NoStreamFallback() {
  return (
    <div className="aspect-video bg-charcoal rounded-xl flex flex-col items-center justify-center text-white p-8">
      <svg className="w-16 h-16 text-white/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
      <p className="text-xl font-bold mb-2">Трансляция не активна</p>
      <p className="text-white/50 text-center max-w-md">
        В данный момент нет активной трансляции. Смотрите расписание ниже для
        предстоящих служений.
      </p>
    </div>
  );
}

export default function YouTubeLivestream() {
  const [data, setData] = useState<YouTubeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/youtube")
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch(() => setData({ live: [], upcoming: [], error: "fetch failed" }))
      .finally(() => setLoading(false));
  }, []);

  const liveStream = data?.live?.[0];
  const upcoming = data?.upcoming ?? [];

  return (
    <div className="space-y-8">
      {/* Live stream or fallback */}
      <div>
        {loading ? (
          <div className="aspect-video bg-charcoal rounded-xl flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        ) : liveStream ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LiveBadge />
              <h2 className="text-xl font-bold text-white truncate">
                {liveStream.title}
              </h2>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${liveStream.id}?autoplay=1`}
                className="w-full h-full"
                allowFullScreen
                allow="autoplay; encrypted-media"
                title="Прямая трансляция"
              />
            </div>
          </div>
        ) : (
          <NoStreamFallback />
        )}
      </div>

      {/* Upcoming streams */}
      {upcoming.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-white mb-4">
            Предстоящие трансляции
          </h3>
          <div className="space-y-3">
            {upcoming.map((stream) => (
              <a
                key={stream.id}
                href={`https://www.youtube.com/watch?v=${stream.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-4"
              >
                <div className="w-32 sm:w-40 shrink-0 rounded-lg overflow-hidden aspect-video relative">
                  {stream.thumbnail ? (
                    <img
                      src={stream.thumbnail}
                      alt={stream.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-white/10" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-white truncate">
                    {stream.title}
                  </p>
                  {stream.scheduledStart && (
                    <p className="text-sm text-white/50 mt-1">
                      {formatDate(stream.scheduledStart)}
                    </p>
                  )}
                  <span className="inline-block mt-2 text-xs px-2 py-0.5 bg-tan/20 text-tan rounded-full">
                    Запланировано
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
