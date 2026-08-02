"use client";
import type { JSX } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "./SectionHeader";
import TechTag from "./TechTag";

const CodeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const MonitorIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={1.8} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 21h8M12 17v4" />
  </svg>
);

const ServerIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="2" width="20" height="8" rx="2" strokeWidth={1.8} />
    <rect x="2" y="14" width="20" height="8" rx="2" strokeWidth={1.8} />
    <circle cx="6" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="6" cy="18" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const CpuIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="7" y="7" width="10" height="10" rx="1" strokeWidth={1.8} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 10H3M7 14H3M17 10h4M17 14h4M10 7V3M14 7V3M10 21v-4M14 21v-4" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth={1.8} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
    <section id="skills" className="py-24 md:py-28">
      <div className="shell">
        <SectionHeader label={s.label} title={s.title} lead={s.description} />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {s.categories.map((cat, i) => (
            <div
              key={cat.id}
              /* Le délai passe par une propriété inline. En classe
                 `scroll-animate-delay-${i}`, Tailwind ne voyait jamais la chaîne
                 au moment du scan et n'aurait généré aucune règle. */
              className="card card-hover scroll-animate p-5"
              style={{ transitionDelay: `${Math.min(i, 5) * 70}ms` }}
            >
              <div className="mb-4 flex items-center gap-2.5">
                {/* Icône en gris neutre : les six cartes ne se disputent plus
                    l'attention avec une alternance violet / cyan, et les logos
                    de technologies restent la seule couleur de la carte. */}
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[var(--t3)]"
                  style={{ backgroundColor: "var(--surf)", border: "1px solid var(--brdr2)" }}
                >
                  {SKILL_ICONS[cat.id]}
                </span>
                <h3 className="card-title">{cat.title}</h3>
              </div>

              <ul className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <li key={skill}>
                    <TechTag name={skill} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
