"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Locale = "ru" | "en";

interface LanguageContextValue {
  locale: Locale;
  toggleLocale: () => void;
  t: (ru: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "ru",
  toggleLocale: () => {},
  t: (ru) => ru,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ru");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "ru" ? "en" : "ru"));
  }, []);

  const t = useCallback(
    (ru: string, en: string) => (locale === "ru" ? ru : en),
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
