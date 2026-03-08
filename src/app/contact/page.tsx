"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-accent">Контакты</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Свяжитесь с нами — мы будем рады ответить на ваши вопросы
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 sm:py-24 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Наша информация
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Адрес</h3>
                      <p className="text-gray-600">
                        514 Highland Avenue
                        <br />
                        Feasterville, PA 19053
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Телефон</h3>
                      <a
                        href="tel:+12159644468"
                        className="text-gray-600 hover:text-accent transition-colors"
                      >
                        (215) 964-4468
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Email</h3>
                      <a
                        href="mailto:radvest@gmail.com"
                        className="text-gray-600 hover:text-accent transition-colors"
                      >
                        radvest@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service Times */}
                <div className="bg-primary rounded-xl p-6 text-white">
                  <h3 className="font-bold text-accent mb-4">
                    Расписание служений
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">
                        Воскресенье (утро)
                      </span>
                      <span className="font-medium">10:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">
                        Воскресенье (вечер)
                      </span>
                      <span className="font-medium">6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">
                        Среда (молитва)
                      </span>
                      <span className="font-medium">7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">
                        Пятница (молодёжь)
                      </span>
                      <span className="font-medium">7:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Напишите нам
              </h2>

              {submitted ? (
                <div className="bg-white rounded-xl shadow-md p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Спасибо!
                  </h3>
                  <p className="text-gray-600">
                    Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее
                    время.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="mt-4 text-accent font-medium hover:underline"
                  >
                    Отправить ещё одно сообщение
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-xl shadow-md p-6 sm:p-8 space-y-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Имя <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="(XXX) XXX-XXXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Сообщение <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors resize-none"
                      placeholder="Ваше сообщение..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors"
                  >
                    Отправить сообщение
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.3!2d-75.0!3d40.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6aee4e1c1c1c1%3A0x0!2s514+Highland+Ave%2C+Feasterville-Trevose%2C+PA+19053!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Church location"
        />
      </section>
    </>
  );
}
