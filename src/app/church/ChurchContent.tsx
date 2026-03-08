"use client";

import { useLanguage } from "@/lib/i18n";

export default function ChurchContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {t("Наша", "Our")} <span className="text-tan">{t("Церковь", "Church")}</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            {t(
              "Евангельская Баптистская Церковь Филадельфии",
              "Evangelical Baptist Church of Philadelphia"
            )}
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-16 sm:py-24 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <div className="inline-block px-3 py-1 bg-tan/20 text-tan rounded-full text-sm font-medium mb-6">
              {t("Наша история", "Our History")}
            </div>
            <h2 className="text-3xl font-bold text-primary mb-8">
              {t("Более 110 лет служения", "Over 110 Years of Ministry")}
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                {t(
                  "Евангельская Баптистская Церковь Филадельфии «Радостная Весть» была основана в 1913 году иммигрантами из России, Украины и Белоруссии. Первоначально она называлась Первая Русская Баптистская Церковь Филадельфии.",
                  "The Evangelical Baptist Church of Philadelphia \"Wonderful News\" was founded in 1913 by immigrants from Russia, Ukraine, and Belarus. It was originally called the First Russian Baptist Church of Philadelphia."
                )}
              </p>
              <p>
                {t(
                  "На протяжении многих лет она оставалась единственной славянской евангельской церковью в Филадельфии, служа духовным домом для многих верующих, прибывших в Америку в поисках свободы вероисповедания.",
                  "For many years, it remained the only Slavic evangelical church in Philadelphia, serving as a spiritual home for many believers who came to America seeking freedom of worship."
                )}
              </p>
              <p>
                {t(
                  "За последнее десятилетие численность церкви значительно выросла. Сегодня наша церковная семья является многонациональной — в неё входят русские, украинцы, белорусы, молдаване, гагаузы, грузины, армяне, евреи, американцы и представители других национальностей.",
                  "Over the past decade, the church has grown significantly. Today our church family is multinational — it includes Russians, Ukrainians, Belarusians, Moldovans, Gagauz, Georgians, Armenians, Jews, Americans, and people of other nationalities."
                )}
              </p>
              <p>
                {t(
                  "Мы объединены верой в Иисуса Христа и стремлением служить Богу и людям, сохраняя при этом богатство наших культурных традиций.",
                  "We are united by faith in Jesus Christ and the desire to serve God and people, while preserving the richness of our cultural traditions."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              {t("Наше видение и миссия", "Our Vision & Mission")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-warm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t("Видение", "Vision")}</h3>
              <p className="text-gray-600 italic">
                {t(
                  "«Зрелые и радостные дети Божьи, созидающие церковь и влияющие на мир»",
                  "\"Mature and joyful children of God, building the church and impacting the world\""
                )}
              </p>
            </div>

            <div className="bg-warm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t("Миссия", "Mission")}</h3>
              <p className="text-gray-600">
                {t(
                  "Проповедовать Евангелие, созидать учеников Христа и служить людям с любовью и состраданием, отражая свет Божий в нашем сообществе и мире.",
                  "To preach the Gospel, make disciples of Christ, and serve people with love and compassion, reflecting God's light in our community and the world."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="py-16 sm:py-24 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              {t("Наши служения", "Our Ministries")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t(
                "Мы предлагаем различные служения для людей всех возрастов",
                "We offer various ministries for people of all ages"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: t("Воскресное богослужение", "Sunday Worship"),
                description: t(
                  "Утренние и вечерние служения с проповедью Слова Божьего, прославлением и общением.",
                  "Morning and evening services with preaching of God's Word, worship, and fellowship."
                ),
                icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
              },
              {
                title: t("Молитвенные собрания", "Prayer Meetings"),
                description: t(
                  "Еженедельные собрания для совместной молитвы, поддержки и духовного укрепления.",
                  "Weekly gatherings for corporate prayer, support, and spiritual strengthening."
                ),
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
              {
                title: t("Молодёжное служение", "Youth Ministry"),
                description: t(
                  "Программы и мероприятия для молодёжи, включая изучение Библии, конференции и общение.",
                  "Programs and activities for youth, including Bible study, conferences, and fellowship."
                ),
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
              },
              {
                title: t("Детское служение", "Children's Ministry"),
                description: t(
                  "Воскресная школа и занятия для детей всех возрастов в тёплой и заботливой обстановке.",
                  "Sunday school and classes for children of all ages in a warm and caring environment."
                ),
                icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: t("Хоровое служение", "Choir Ministry"),
                description: t(
                  "Церковный хор, прославляющий Бога через духовные гимны и песни.",
                  "Church choir glorifying God through spiritual hymns and songs."
                ),
                icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z",
              },
              {
                title: t("Хлебопреломление", "Communion"),
                description: t(
                  "Регулярные служения причастия, вспоминая жертву Христа и единство Тела Его.",
                  "Regular communion services, remembering the sacrifice of Christ and the unity of His Body."
                ),
                icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.704 2.704 0 003 15.546M12 2v4m0 0a2 2 0 100 4 2 2 0 000-4z",
              },
            ].map((ministry) => (
              <div key={ministry.title} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ministry.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{ministry.title}</h3>
                <p className="text-gray-600 text-sm">{ministry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            {t("Наши", "Our")} <span className="text-tan">{t("ценности", "Values")}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: t("Верность Библии", "Biblical Faithfulness"),
                description: t("Слово Божье — основа нашей веры и практики", "God's Word is the foundation of our faith and practice"),
              },
              {
                title: t("Любовь и единство", "Love & Unity"),
                description: t("Мы созидаем сообщество, основанное на любви Христовой", "We build a community founded on the love of Christ"),
              },
              {
                title: t("Молитва", "Prayer"),
                description: t("Молитва — дыхание церкви и источник нашей силы", "Prayer is the breath of the church and the source of our strength"),
              },
              {
                title: t("Служение", "Service"),
                description: t("Мы призваны служить друг другу и окружающему миру", "We are called to serve one another and the world around us"),
              },
            ].map((value) => (
              <div key={value.title} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-tan mb-2">{value.title}</h3>
                <p className="text-white/70 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
