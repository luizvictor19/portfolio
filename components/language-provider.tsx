"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { translations, type Language, type Translations } from "@/data/translations";

interface LanguageContextValue {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language | null;
    if (stored === "pt" || stored === "en") setLanguage(stored);
  }, []);

  function toggleLanguage() {
    const next: Language = language === "pt" ? "en" : "pt";
    setLanguage(next);
    localStorage.setItem("language", next);
    document.cookie = `language=${next};path=/;max-age=31536000`;
    router.refresh();
  }

  return (
    <LanguageContext.Provider
      value={{ language, t: translations[language], toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
