"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

const navLinks = [
  { href: "/", label: "Главная", labelEn: "Home" },
  { href: "/church", label: "Церковь", labelEn: "Church" },
  { href: "/media", label: "Медиа", labelEn: "Media" },
  { href: "/livestream", label: "Трансляция", labelEn: "Live Stream" },
  { href: "/contact", label: "Контакты", labelEn: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Church Name */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-tan flex items-center justify-center text-primary font-bold text-lg sm:text-xl">
              {t("РВ", "WN")}
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg leading-tight">
                {t("Радостная Весть", "Wonderful News")}
              </div>
              <div className="text-xs text-white/70">
                Evangelical Baptist Church of Philadelphia
              </div>
            </div>
            <div className="sm:hidden font-bold text-base">
              {t("Радостная Весть", "Wonderful News")}
            </div>
          </Link>

          {/* Desktop Navigation + Language Toggle */}
          <div className="hidden md:flex items-center gap-1">
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  {t(link.label, link.labelEn)}
                </Link>
              ))}
            </nav>
            <button
              onClick={toggleLocale}
              className="ml-2 px-3 py-1.5 rounded-md text-xs font-bold border border-white/30 hover:bg-white/10 transition-colors uppercase tracking-wider"
              aria-label="Switch language"
            >
              {locale === "ru" ? "EN" : "РУС"}
            </button>
          </div>

          {/* Mobile: Language Toggle + Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLocale}
              className="px-2.5 py-1.5 rounded-md text-xs font-bold border border-white/30 hover:bg-white/10 transition-colors uppercase tracking-wider"
              aria-label="Switch language"
            >
              {locale === "ru" ? "EN" : "РУС"}
            </button>
            <button
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-primary-dark border-t border-white/10">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t(link.label, link.labelEn)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
