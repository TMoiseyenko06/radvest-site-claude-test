import type { Metadata } from "next";
import NextService from "@/components/NextService";
import YouTubeLivestream from "@/components/YouTubeLivestream";

export const metadata: Metadata = {
  title: "Прямая Трансляция — Радостная Весть",
  description:
    "Смотрите прямую трансляцию богослужений церкви «Радостная Весть» онлайн.",
};

export default function LiveStreamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-red-300">
              Прямая трансляция
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Прямая <span className="text-tan">Трансляция</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Присоединяйтесь к нашим богослужениям онлайн, где бы вы ни
            находились
          </p>
        </div>
      </section>

      {/* Countdown / In Progress */}
      <NextService />

      {/* YouTube Live Stream / Upcoming */}
      <section className="py-8 sm:py-12 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <YouTubeLivestream />
        </div>
      </section>

      {/* Schedule Info */}
      <section className="py-16 sm:py-24 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Расписание трансляций
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary">
                  Воскресенье утро
                </h3>
              </div>
              <p className="text-3xl font-bold text-primary">10:00 AM</p>
              <p className="text-sm text-gray-500 mt-1">
                Восточное время (ET)
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary">
                  Воскресенье вечер
                </h3>
              </div>
              <p className="text-3xl font-bold text-primary">6:00 PM</p>
              <p className="text-sm text-gray-500 mt-1">
                Восточное время (ET)
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary">
                  Четверг
                </h3>
              </div>
              <p className="text-3xl font-bold text-primary">7:00 PM</p>
              <p className="text-sm text-gray-500 mt-1">
                Восточное время (ET)
              </p>
            </div>
          </div>

          {/* Other ways to watch */}
          <div className="mt-12 bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">
              Другие способы просмотра
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="https://www.youtube.com/@Radostnayavest"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-100 hover:border-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-primary text-sm">
                    YouTube
                  </div>
                  <div className="text-xs text-gray-500">@Radostnayavest</div>
                </div>
              </a>

              <a
                href="https://www.facebook.com/radvest/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-100 hover:border-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-primary text-sm">
                    Facebook
                  </div>
                  <div className="text-xs text-gray-500">Прямой эфир</div>
                </div>
              </a>

              <a
                href="https://www.christianworldmedia.com/livechannel/radvest"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-100 hover:border-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-primary text-sm">
                    Christian World Media
                  </div>
                  <div className="text-xs text-gray-500">Веб-трансляция</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
