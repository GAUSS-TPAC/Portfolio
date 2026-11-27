"use client";
import type { JSX } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Lang } from "@/i18n/translations";
import SectionHeader from "./SectionHeader";

const CloudIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const WifiIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);

const LightbulbIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const SparkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
  </svg>
);

const certifications: { title: string; issuer: string; year: string; icon: JSX.Element }[] = [
  { title: "AI Cohort 10",                       issuer: "TRI",                          year: "2026", icon: <SparkIcon /> },
  { title: "OCI — AI Foundations Associate",     issuer: "Oracle Cloud Infrastructure", year: "2025", icon: <CloudIcon /> },
  { title: "OCI — Data Science Professional",    issuer: "Oracle Cloud Infrastructure", year: "2025", icon: <ChartIcon /> },
  { title: "IoT & Cloud Computing",              issuer: "Yonsei University / Coursera", year: "2024", icon: <WifiIcon /> },
  { title: "Prompt Engineering — Generative AI", issuer: "LinkedIn Learning",            year: "2024", icon: <LightbulbIcon /> },
];

const FRENCH_NAMES: Record<Lang, string> = { fr: "Français", en: "French" };
const ENGLISH_NAMES: Record<Lang, string> = { fr: "Anglais", en: "English" };

export default function About() {
  const { t, lang } = useLanguage();
  const a = t.about;

  const languages = [
    { name: FRENCH_NAMES[lang],  level: a.nativeLang },
    { name: ENGLISH_NAMES[lang], level: a.fluentLang },
  ];

  return (
    <section id="about" className="py-24 md:py-28" style={{ backgroundColor: "var(--sect)" }}>
      <div className="shell">
        <SectionHeader label={a.label} title={a.title} />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
          {/* Formation */}
          <div className="scroll-animate">
            <h3 className="group-title mb-5">{a.educationTitle}</h3>
            <div className="space-y-3">
              {a.education.map((edu) => (
                <article key={edu.degree} className="card card-hover p-5">
                  <div className="flex items-start gap-3.5">
                    {/* Fond blanc fixe : les deux sceaux sont dessinés pour un
                        fond clair, et celui de l'Université de Yaoundé I, tracé
                        en noir, disparaîtrait sur le thème sombre. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      loading="lazy"
                      className="h-12 w-12 shrink-0 rounded-lg bg-white object-contain p-1"
                      style={{ border: "1px solid var(--brdr2)" }}
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <h4 className="card-title flex-1">{edu.degree}</h4>
                        <span className="pill shrink-0">{edu.status}</span>
                      </div>
                      <p className="text-sm font-medium text-[var(--t4)]">{edu.school}</p>
                      <p className="meta mt-1 mb-3">{edu.period}</p>
                      <p className="body-sm">{edu.details}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Certifications + langues */}
          <div className="scroll-animate" style={{ transitionDelay: "80ms" }}>
            <h3 className="group-title mb-5">{a.certTitle}</h3>

            {/* Liste dense plutôt que quatre cartes : ce sont des lignes de CV,
                pas des éléments à peser un par un. */}
            <ul className="card divide-y overflow-hidden" style={{ borderColor: "var(--brdr)" }}>
              {certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="flex items-center gap-3.5 px-4 py-3.5"
                  style={{ borderColor: "var(--brdr)" }}
                >
                  <span className="shrink-0 text-[var(--t3)]">{cert.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-[var(--t1)]">{cert.title}</p>
                    <p className="truncate text-xs text-[var(--t3)]">{cert.issuer}</p>
                  </div>
                  <span className="meta shrink-0">{cert.year}</span>
                </li>
              ))}
            </ul>

            {/* Les niveaux de langue étaient des barres à 100 % et 85 %. Un
                pourcentage sur une compétence humaine n'est vérifiable par
                personne et se lit comme un remplissage — le libellé suffit. */}
            <h3 className="group-title mb-5 mt-8">{a.langsTitle}</h3>
            <dl className="card divide-y overflow-hidden" style={{ borderColor: "var(--brdr)" }}>
              {languages.map((l) => (
                <div
                  key={l.name}
                  className="flex items-center justify-between px-4 py-3"
                  style={{ borderColor: "var(--brdr)" }}
                >
                  <dt className="text-sm font-medium text-[var(--t4)]">{l.name}</dt>
                  <dd className="text-sm text-[var(--t2)]">{l.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
