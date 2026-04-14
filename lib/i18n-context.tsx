"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/messages/en.json";
import fr from "@/messages/fr.json";
import pt from "@/messages/pt.json";

type Locale = "en" | "fr" | "pt";
type Translations = typeof en;

interface I18nContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => any;
}

const translations: Record<Locale, any> = { en, fr, pt };

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ 
  children, 
  defaultValue = "en" 
}: { 
  children: React.ReactNode;
  defaultValue?: string;
}) {
  const [locale, setLocaleState] = useState<Locale>(defaultValue as Locale);

  useEffect(() => {
    // Only run on client
    const saved = localStorage.getItem("locale") as Locale;
    if (saved && ["en", "fr", "pt"].includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
    // Use NEXT_LOCALE to match standard Next.js patterns and what we use in layout
    document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=31536000`;
  };

  const t = (path: string) => {
    const keys = path.split(".");
    let current = translations[locale];
    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }
    return current;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useTranslation must be used within I18nProvider");
  return context;
}
