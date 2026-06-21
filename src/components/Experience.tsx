"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 font-mono text-sm">{e.label}</span>
          <h2 className="text-4xl font-bold text-[var(--t1)] mt-2">{e.title}</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/30 to-transparent hidden md:block" />

          <div className="space-y-10">
            {e.data.map((exp, i) => (
              <div
                key={exp.company + i}
                className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div
                  className="absolute left-0 md:left-1/2 top-6 w-3 h-3 rounded-full border-2 hidden md:block -translate-x-1/2"
                  style={{ backgroundColor: exp.accentColor, borderColor: exp.accentColor }}
                />

                <div className="md:w-1/2" />

                <div
                  className={`scroll-animate scroll-animate-delay-${i + 1} md:w-1/2 p-6 rounded-2xl border hover:border-violet-500/30 transition-all duration-300 ${i % 2 === 0 ? "md:ml-8" : "md:mr-8"}`}
                  style={{ backgroundColor: "var(--card)", borderColor: "var(--brdr)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-[var(--t1)] font-semibold text-lg">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span style={{ color: exp.accentColor }} className="font-medium text-sm">
                          {exp.company}
                        </span>
                        <span className="text-[var(--t3)]">·</span>
                        <span className="text-[var(--t3)] text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <span className="text-xs text-[var(--t3)] font-mono shrink-0 ml-4 mt-1">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-[var(--t2)]">
                        <span style={{ color: exp.accentColor }} className="mt-1 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono rounded text-[var(--t2)]"
                        style={{ backgroundColor: "var(--surf)", border: "1px solid var(--brdr2)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
