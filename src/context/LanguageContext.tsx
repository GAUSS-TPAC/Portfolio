"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { Lang, translations, Translation } from "@/i18n/translations";

interface LangCtx {
  lang: Lang;
  t: Translation;
  setLang: (l: Lang) => void;
}

const Ctx = createContext<LangCtx>({ lang: "fr", t: translations.fr, setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && saved in translations) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return (
    <Ctx.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLanguage = () => useContext(Ctx);
