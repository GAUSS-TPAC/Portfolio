"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <span className="text-violet-400 font-mono text-sm">{s.label}</span>
          <h2 className="text-4xl font-bold text-[var(--t1)] mt-2">{s.title}</h2>
          <p className="text-[var(--t2)] mt-3 max-w-xl mx-auto">{s.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.categories.map((cat, i) => (
            <div
              key={cat.id}
              className={`scroll-animate scroll-animate-delay-${Math.min(i + 1, 4)} p-6 rounded-2xl border hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300`}
              style={{ backgroundColor: "var(--card)", borderColor: "var(--brdr)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                  style={{ background: `${cat.accentColor}20`, border: `1px solid ${cat.accentColor}40` }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-base" style={{ color: cat.accentColor }}>
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono rounded-md text-[var(--t4)] hover:border-violet-500/50 transition-colors"
                    style={{ backgroundColor: "var(--surf)", border: "1px solid var(--brdr2)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
