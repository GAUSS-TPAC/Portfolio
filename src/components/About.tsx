"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Lang } from "@/i18n/translations";

const certifications = [
  { title: "OCI — AI Foundation Associate",    issuer: "Oracle Cloud Infrastructure", year: "2025", icon: "☁️" },
  { title: "OCI — Data Science Professional",  issuer: "Oracle Cloud Infrastructure", year: "2025", icon: "📊" },
  { title: "IoT & Cloud Computing",            issuer: "Yonsei University / Coursera", year: "2024", icon: "🌐" },
  { title: "Prompt Engineering — Generative AI", issuer: "LinkedIn Learning",          year: "2024", icon: "🤖" },
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
              <span className="text-violet-400">🎓</span> {a.educationTitle}
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
              <span className="text-cyan-400">🏅</span> {a.certTitle}
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-center gap-4 p-4 rounded-xl border hover:border-cyan-500/30 hover:-translate-x-1 transition-all duration-300"
                  style={{ backgroundColor: "var(--card)", borderColor: "var(--brdr)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
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
                <span>🌍</span> {a.langsTitle}
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
