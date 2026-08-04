"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { HTML_LANG, Lang, translations, Translation } from "@/i18n/translations";

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

  /* L'attribut `lang` du document suit la langue affichée. Il était figé sur
     "fr" : un lecteur d'écran prononçait donc le contenu anglais avec les règles
     du français, et les moteurs indexaient la page sous la mauvaise langue. */
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
  }, [lang]);

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
