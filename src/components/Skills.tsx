"use client";
import { useLanguage } from "@/context/LanguageContext";

const CodeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const MonitorIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8M12 17v4" />
  </svg>
);

const ServerIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="8" rx="2" strokeWidth={2} />
    <rect x="2" y="14" width="20" height="8" rx="2" strokeWidth={2} />
    <circle cx="6" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="6" cy="18" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const CpuIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="7" y="7" width="10" height="10" rx="1" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10H3M7 14H3M17 10h4M17 14h4M10 7V3M14 7V3M10 21v-4M14 21v-4" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const SKILL_ICONS: Record<string, JSX.Element> = {
  langs:  <CodeIcon />,
  front:  <MonitorIcon />,
  back:   <ServerIcon />,
  data:   <CpuIcon />,
  db:     <DatabaseIcon />,
  devops: <ShieldIcon />,
};

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
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${cat.accentColor}20`, border: `1px solid ${cat.accentColor}40`, color: cat.accentColor }}
                >
                  {SKILL_ICONS[cat.id]}
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
