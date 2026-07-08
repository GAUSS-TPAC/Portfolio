"use client";
import { useLanguage } from "@/context/LanguageContext";

const TECH_ICONS: Record<string, string> = {
  "Flutter":       "flutter",
  "Django REST":   "django",
  "PostgreSQL":    "postgresql",
  "Docker":        "docker",
  "React":         "react",
  "Next.js":       "nextdotjs",
  "Spring Boot":   "springboot",
  "JUnit":         "junit5",
  "Jest":          "jest",
  "CI/CD":         "githubactions",
  "Git":           "git",
};

const COMPANY_LOGOS: Record<string, string> = {
  Gohze:   "/gohze logo.jpeg",
  Yowyob:  "/yowyob-logo.jpeg",
};

function CompanyLogo({ name, color }: { name: string; color: string }) {
  const src = COMPANY_LOGOS[name];
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={name}
        className="w-11 h-11 rounded-xl object-contain shrink-0"
        style={{ border: `1px solid ${color}30`, backgroundColor: "var(--card)" }}
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
      />
    );
  }
  return (
    <div
      className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center font-bold text-lg text-white select-none"
      style={{
        background: `linear-gradient(135deg, ${color}dd, ${color}88)`,
        border: `1px solid ${color}40`,
      }}
    >
      {name.charAt(0)}
    </div>
  );
}

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
                  {/* Header: logo + role + period */}
                  <div className="flex items-start gap-3 mb-4">
                    <CompanyLogo name={exp.company} color={exp.accentColor} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-[var(--t1)] font-semibold text-base leading-tight">
                          {exp.role}
                        </h3>
                        <span className="text-xs text-[var(--t3)] font-mono shrink-0 mt-0.5">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span style={{ color: exp.accentColor }} className="font-semibold text-sm">
                          {exp.company}
                        </span>
                        <span className="text-[var(--t3)] text-xs">·</span>
                        <span className="text-[var(--t3)] text-xs">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-[var(--t2)]">
                        <span style={{ color: exp.accentColor }} className="mt-0.5 shrink-0 text-xs">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => {
                      const slug = TECH_ICONS[tag];
                      return (
                        <span
                          key={tag}
                          className="flex items-center gap-1.5 px-2 py-0.5 text-xs font-mono rounded text-[var(--t2)]"
                          style={{ backgroundColor: "var(--surf)", border: "1px solid var(--brdr2)" }}
                        >
                          {slug && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={`https://cdn.simpleicons.org/${slug}`}
                              alt=""
                              aria-hidden="true"
                              className="w-3 h-3 tech-icon"
                            />
                          )}
                          {tag}
                        </span>
                      );
                    })}
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
