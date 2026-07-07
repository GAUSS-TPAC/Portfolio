"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Lang } from "@/i18n/translations";

const GradCapIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const AwardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="6" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <path strokeLinecap="round" strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const WifiIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);

const LightbulbIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const certifications = [
  { title: "OCI — AI Foundation Associate",     issuer: "Oracle Cloud Infrastructure", year: "2025", icon: <CloudIcon /> },
  { title: "OCI — Data Science Professional",   issuer: "Oracle Cloud Infrastructure", year: "2025", icon: <ChartIcon /> },
  { title: "IoT & Cloud Computing",             issuer: "Yonsei University / Coursera", year: "2024", icon: <WifiIcon /> },
  { title: "Prompt Engineering — Generative AI", issuer: "LinkedIn Learning",           year: "2024", icon: <LightbulbIcon /> },
];

const FRENCH_NAMES: Record<Lang, string> = {
  fr: "Français", en: "French", zh: "法语", es: "Francés", de: "Französisch",
};
const ENGLISH_NAMES: Record<Lang, string> = {
  fr: "Anglais", en: "English", zh: "英语", es: "Inglés", de: "Englisch",
};

export default function About() {
  const { t, lang } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="py-24 px-4" style={{ backgroundColor: "var(--sect)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <span className="text-violet-400 font-mono text-sm">{a.label}</span>
          <h2 className="text-4xl font-bold text-[var(--t1)] mt-2">{a.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education */}
          <div className="scroll-animate scroll-animate-delay-1">
            <h3 className="text-lg font-semibold text-[var(--t4)] mb-6 flex items-center gap-2">
              <span className="text-violet-400"><GradCapIcon /></span>
              {a.educationTitle}
            </h3>
            <div className="space-y-4">
              {a.education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-5 rounded-2xl border hover:border-violet-500/30 transition-all duration-300"
                  style={{ backgroundColor: "var(--card)", borderColor: "var(--brdr)" }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-[var(--t1)] font-semibold text-sm leading-tight flex-1">
                      {edu.degree}
                    </h4>
                    <span
                      className="ml-3 shrink-0 text-xs px-2 py-0.5 rounded-full font-mono"
                      style={{ background: `${edu.accentColor}20`, color: edu.accentColor, border: `1px solid ${edu.accentColor}40` }}
                    >
                      {edu.status}
                    </span>
                  </div>
                  <p style={{ color: edu.accentColor }} className="text-sm font-medium mb-1">
                    {edu.school}
                  </p>
                  <p className="text-[var(--t3)] text-xs mb-2">{edu.period}</p>
                  <p className="text-[var(--t2)] text-sm leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications + Languages */}
          <div className="scroll-animate scroll-animate-delay-2">
            <h3 className="text-lg font-semibold text-[var(--t4)] mb-6 flex items-center gap-2">
              <span className="text-cyan-400"><AwardIcon /></span>
              {a.certTitle}
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-center gap-4 p-4 rounded-xl border hover:border-cyan-500/30 hover:-translate-x-1 transition-all duration-300"
                  style={{ backgroundColor: "var(--card)", borderColor: "var(--brdr)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-violet-400"
                    style={{ backgroundColor: "var(--surf)", border: "1px solid var(--brdr2)" }}
                  >
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[var(--t1)] text-sm font-medium truncate">{cert.title}</p>
                    <p className="text-[var(--t3)] text-xs">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-[var(--t3)] font-mono shrink-0">{cert.year}</span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div
              className="mt-6 p-5 rounded-2xl border"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--brdr)" }}
            >
              <h4 className="text-[var(--t4)] font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="text-violet-400"><GlobeIcon /></span>
                {a.langsTitle}
              </h4>
              <div className="flex gap-4">
                {[
                  { lang: FRENCH_NAMES[lang], level: a.nativeLang, pct: 100 },
                  { lang: ENGLISH_NAMES[lang], level: a.fluentLang, pct: 85 },
                ].map((l) => (
                  <div key={l.lang} className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-[var(--t4)] text-xs font-medium">{l.lang}</span>
                      <span className="text-[var(--t3)] text-xs">{l.level}</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--surf)" }}>
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${l.pct}%`, background: "linear-gradient(90deg, #8b5cf6, #06b6d4)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
