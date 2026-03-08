"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

const recentServices = [
  { date: "2 марта 2025", dateEn: "March 2, 2025", title: "Утреннее служение", titleEn: "Morning Service", type: "morning", description: "Воскресное утреннее богослужение с проповедью и прославлением", descriptionEn: "Sunday morning worship with preaching and praise" },
  { date: "2 марта 2025", dateEn: "March 2, 2025", title: "Вечернее служение", titleEn: "Evening Service", type: "evening", description: "Воскресное вечернее богослужение", descriptionEn: "Sunday evening worship service" },
  { date: "23 февраля 2025", dateEn: "February 23, 2025", title: "Утреннее служение", titleEn: "Morning Service", type: "morning", description: "Воскресное утреннее богослужение с проповедью и прославлением", descriptionEn: "Sunday morning worship with preaching and praise" },
  { date: "23 февраля 2025", dateEn: "February 23, 2025", title: "Вечернее служение", titleEn: "Evening Service", type: "evening", description: "Воскресное вечернее богослужение", descriptionEn: "Sunday evening worship service" },
  { date: "16 февраля 2025", dateEn: "February 16, 2025", title: "Утреннее служение", titleEn: "Morning Service", type: "morning", description: "Воскресное утреннее богослужение с проповедью и прославлением", descriptionEn: "Sunday morning worship with preaching and praise" },
  { date: "16 февраля 2025", dateEn: "February 16, 2025", title: "Вечернее служение — Хлебопреломление", titleEn: "Evening Service — Communion", type: "communion", description: "Служение причастия и вечернее богослужение", descriptionEn: "Communion service and evening worship" },
];

function ServiceTypeLabel({ type, t }: { type: string; t: (ru: string, en: string) => string }) {
  const styles: Record<string, string> = {
    morning: "bg-amber-100 text-amber-800",
    evening: "bg-indigo-100 text-indigo-800",
    communion: "bg-purple-100 text-purple-800",
  };
  const labels: Record<string, [string, string]> = {
    morning: ["Утро", "Morning"],
    evening: ["Вечер", "Evening"],
    communion: ["Причастие", "Communion"],
  };

  const [ru, en] = labels[type] || [type, type];

  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${styles[type] || styles.morning}`}>
      {t(ru, en)}
    </span>
  );
}

export default function MediaContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-tan">{t("Медиа", "Media")}</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            {t("Архив наших богослужений, проповеди и музыка", "Archive of our worship services, sermons, and music")}
          </p>
        </div>
      </section>

      {/* Media Categories */}
      <section className="py-12 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: t("Архив служений", "Service Archive"),
                description: t("Записи воскресных и специальных богослужений", "Recordings of Sunday and special worship services"),
                icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                count: "1700+",
              },
              {
                title: t("Прямая трансляция", "Live Stream"),
                description: t("Смотрите наши служения в реальном времени", "Watch our services in real time"),
                icon: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z",
                href: "/livestream",
              },
              {
                title: t("Церковные новости", "Church News"),
                description: t("Объявления и события церковной жизни", "Announcements and church life events"),
                icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
              },
            ].map((category) => (
              <div key={category.title} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={category.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                {"count" in category && category.count && (
                  <span className="text-primary font-bold text-sm">{category.count} {t("записей", "recordings")}</span>
                )}
                {"href" in category && category.href && (
                  <Link href={category.href} className="text-primary font-medium text-sm hover:underline">
                    {t("Перейти →", "Go →")}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Services Archive */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8">
            {t("Последние служения", "Recent Services")}
          </h2>

          <div className="space-y-4">
            {recentServices.map((service, i) => (
              <div key={i} className="bg-warm rounded-xl p-5 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="sm:w-36 shrink-0">
                  <div className="text-sm text-gray-500">{t(service.date, service.dateEn)}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-primary">{t(service.title, service.titleEn)}</h3>
                    <ServiceTypeLabel type={service.type} t={t} />
                  </div>
                  <p className="text-sm text-gray-600">{t(service.description, service.descriptionEn)}</p>
                </div>
                <div className="shrink-0">
                  <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    {t("Смотреть", "Watch")}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              {t("Полный архив служений доступен на нашем канале", "Full service archive is available on our channel")}
            </p>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-8">
            {t("Наши платформы", "Our Platforms")}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { name: "Christian World Media", url: "https://www.christianworldmedia.com/livechannel/radvest" },
              { name: "Facebook", url: "https://www.facebook.com/radvest/" },
              { name: "Roku (RadVest)", url: "#" },
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-primary font-medium"
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
