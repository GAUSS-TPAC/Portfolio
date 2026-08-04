"use client";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "./SectionHeader";
import TechTag from "./TechTag";

const COMPANY_LOGOS: Record<string, string> = {
  "Gohze":                "/gohze logo.jpeg",
  "Yowyob":               "/yowyob-logo.jpeg",
  "Afriland First Bank":  "/Afriland-First-Bank-logo.jpg",
};

function CompanyLogo({ name, color }: { name: string; color: string }) {
  const src = COMPANY_LOGOS[name];
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={name}
        loading="lazy"
        className="h-10 w-10 shrink-0 rounded-lg object-contain"
        style={{ border: "1px solid var(--brdr2)", backgroundColor: "var(--surf)" }}
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
      />
    );
  }
  return (
    <div
      className="flex h-10 w-10 shrink-0 select-none items-center justify-center rounded-lg text-base font-semibold text-white"
      style={{ background: `linear-gradient(135deg, ${color}dd, ${color}88)` }}
      aria-hidden="true"
    >
      {name.charAt(0)}
    </div>
  );
}

export default function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experience" className="py-24 md:py-28">
      <div className="shell">
        <SectionHeader label={e.label} title={e.title} lead={e.description} />

        {/* Rail unique à gauche. L'alternance gauche / droite obligeait l'œil à
            zigzaguer entre deux colonnes pour suivre une chronologie qui, elle,
            est parfaitement linéaire — et s'effondrait de toute façon en une
            seule colonne sous 768px. */}
        <div className="relative max-w-3xl">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[7px] top-8 w-px"
            style={{ background: "linear-gradient(to bottom, var(--brdr2), transparent)" }}
          />

          <ol className="space-y-4">
            {e.data.map((exp, i) => (
              <li
                key={exp.company + i}
                className="scroll-animate relative pl-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Seul le poste le plus récent porte l'accent. */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-7 h-[15px] w-[15px] rounded-full border-2"
                  style={{
                    backgroundColor: "var(--bg)",
                    borderColor: i === 0 ? "var(--accent)" : "var(--brdr2)",
                  }}
                />

                <article className="card card-hover p-5">
                  <div className="flex items-start gap-3.5">
                    <CompanyLogo name={exp.company} color={exp.accentColor} />
                    <div className="min-w-0 flex-1">
                      {/* Le format est affiché à côté du poste. Trois périodes se
                          chevauchant sans mention de stage, d'alternance ou de
                          projet encadré se lisaient comme trois emplois
                          simultanés — la première hypothèse du lecteur était
                          alors l'exagération. */}
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                        <h3 className="card-title">{exp.role}</h3>
                        <span className="pill">{exp.format}</span>
                      </div>
                      <p className="mt-1.5 text-sm leading-snug text-[var(--t2)]">
                        <span className="font-medium text-[var(--t4)]">{exp.company}</span>
                        <span className="text-[var(--t3)]"> · {exp.location}</span>
                      </p>
                      <p className="meta mt-1">{exp.period}</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="body-sm flex gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-[0.6em] h-[3px] w-[3px] shrink-0 rounded-full"
                          style={{ backgroundColor: "var(--t3)" }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <li key={tag}>
                        <TechTag name={tag} />
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
