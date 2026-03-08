"use client";

import Link from "next/link";
import NextService from "@/components/NextService";
import { useLanguage } from "@/lib/i18n";

function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(224,48,48,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(224,48,48,0.2) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-tan/30 rounded-full text-tan text-sm font-medium mb-6">
            {t("Добро пожаловать", "Welcome")}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t("Церковь", "Church")}
            <span className="text-tan"> {t("«Радостная Весть»", "\"Joyful News\"")}</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-4">
            {t(
              "Евангельская Баптистская Церковь Филадельфии",
              "Evangelical Baptist Church of Philadelphia"
            )}
          </p>
          <p className="text-base text-white/60 mb-8 max-w-2xl mx-auto">
            {t(
              "Зрелые и радостные дети Божьи, созидающие церковь и влияющие на мир",
              "Mature and joyful children of God, building the church and impacting the world"
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/livestream"
              className="px-8 py-3 bg-tan text-charcoal font-bold rounded-lg hover:bg-tan-light transition-colors w-full sm:w-auto text-center"
            >
              {t("Смотреть трансляцию", "Watch Live")}
            </Link>
            <Link
              href="/church"
              className="px-8 py-3 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
            >
              {t("О нашей церкви", "About Our Church")}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0,48L80,42.7C160,37,320,27,480,32C640,37,800,59,960,58.7C1120,59,1280,37,1360,26.7L1440,16L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
            fill="#FFF8F0"
          />
        </svg>
      </div>
    </section>
  );
}

function ServiceTimesSection() {
  const { t } = useLanguage();

  const services = [
    {
      day: t("Воскресенье", "Sunday"),
      times: [
        { time: "10:00 AM", label: t("Утреннее служение", "Morning Service") },
        { time: "6:00 PM", label: t("Вечернее служение", "Evening Service") },
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      day: t("Четверг", "Thursday"),
      times: [
        { time: "7:00 PM", label: t("Служение по четвергам", "Thursday Service") },
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-warm py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t("Расписание служений", "Service Schedule")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              "Мы приглашаем вас присоединиться к нашим богослужениям",
              "We invite you to join our worship services"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {services.map((service) => (
            <div
              key={service.day}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {service.day}
              </h3>
              <div className="space-y-3">
                {service.times.map((st) => (
                  <div key={st.time} className="bg-warm rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary">
                      {st.time}
                    </div>
                    <div className="text-sm text-gray-700 font-medium">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreviewSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-tan/20 text-tan rounded-full text-sm font-medium mb-4">
              {t("С 1913 года", "Since 1913")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              {t("О нашей церкви", "About Our Church")}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t(
                "Евангельская Баптистская Церковь Филадельфии «Радостная Весть» была основана в 1913 году иммигрантами из России, Украины и Белоруссии. На протяжении многих лет она оставалась единственной славянской евангельской церковью в Филадельфии.",
                "The Evangelical Baptist Church of Philadelphia \"Joyful News\" was founded in 1913 by immigrants from Russia, Ukraine, and Belarus. For many years, it remained the only Slavic evangelical church in Philadelphia."
              )}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t(
                "Сегодня наша церковная семья является многонациональной — в неё входят русские, украинцы, белорусы, молдаване, гагаузы, грузины, армяне, евреи, американцы и представители других национальностей.",
                "Today our church family is multinational — it includes Russians, Ukrainians, Belarusians, Moldovans, Gagauz, Georgians, Armenians, Jews, Americans, and people of other nationalities."
              )}
            </p>
            <Link
              href="/church"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors"
            >
              {t("Узнать больше", "Learn More")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <div className="bg-primary/5 rounded-2xl p-8 sm:p-12">
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <blockquote className="text-center">
                  <svg className="w-10 h-10 mx-auto mb-4 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                  </svg>
                  <p className="text-lg text-gray-700 italic mb-4">
                    {t(
                      "«Зрелые и радостные дети Божьи, созидающие церковь и влияющие на мир»",
                      "\"Mature and joyful children of God, building the church and impacting the world\""
                    )}
                  </p>
                  <footer className="text-sm text-primary font-medium">
                    — {t("Наше видение", "Our Vision")}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveStreamBanner() {
  const { t } = useLanguage();

  return (
    <section className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-red-300">
            {t("Прямая трансляция", "Live Stream")}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          {t("Смотрите наши служения онлайн", "Watch Our Services Online")}
        </h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          {t(
            "Присоединяйтесь к нашим богослужениям в прямом эфире, где бы вы ни находились",
            "Join our worship services live, wherever you are"
          )}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/livestream"
            className="px-8 py-3 bg-tan text-charcoal font-bold rounded-lg hover:bg-tan-light transition-colors"
          >
            {t("Смотреть трансляцию", "Watch Live")}
          </Link>
          <Link
            href="/media"
            className="px-8 py-3 border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors font-medium"
          >
            {t("Архив служений", "Service Archive")}
          </Link>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t("Как нас найти", "How to Find Us")}
          </h2>
          <p className="text-gray-600">{t("Мы будем рады видеть вас!", "We look forward to seeing you!")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.3!2d-75.0!3d40.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6aee4e1c1c1c1%3A0x0!2s514+Highland+Ave%2C+Feasterville-Trevose%2C+PA+19053!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Church location map"
            />
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{t("Адрес", "Address")}</h3>
                  <p className="text-gray-600">514 Highland Avenue<br />Feasterville, PA 19053</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{t("Телефон", "Phone")}</h3>
                  <a href="tel:+12159644468" className="text-gray-600 hover:text-primary-light transition-colors">(215) 964-4468</a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Email</h3>
                  <a href="mailto:radvest@gmail.com" className="text-gray-600 hover:text-primary-light transition-colors">radvest@gmail.com</a>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="block bg-primary text-white text-center rounded-xl p-6 hover:bg-primary-light transition-colors font-bold text-lg"
            >
              {t("Связаться с нами →", "Contact Us →")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <NextService />
      <ServiceTimesSection />
      <AboutPreviewSection />
      <LiveStreamBanner />
      <LocationSection />
    </>
  );
}
