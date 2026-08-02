"use client";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "./SectionHeader";
import TechTag from "./TechTag";

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="projects" className="py-24 md:py-28" style={{ backgroundColor: "var(--sect)" }}>
      <div className="shell">
        <SectionHeader label={p.label} title={p.title} lead={p.description} />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {p.data.map((project, i) => (
            <article
              key={project.title}
              className="card card-hover scroll-animate flex flex-col p-5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Le type du projet n'est plus une pastille colorée : trois
                  projets, trois couleurs d'accent différentes, cela se lisait
                  comme trois familles de contenu sans qu'il y en ait. */}
              <div className="mb-3 flex items-start justify-between gap-3">
                <span className="pill">{project.type}</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-m-1.5 shrink-0 rounded-lg p-1.5 text-[var(--t3)] transition-colors hover:text-[var(--t1)]"
                  aria-label={`${project.title} — GitHub`}
                >
                  <GithubIcon />
                </a>
              </div>

              <h3 className="card-title">{project.title}</h3>

              <p className="meta mt-1.5">
                {project.company} · {project.period}
              </p>

              <p className="body-sm mt-3.5 flex-1">{project.description}</p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <TechTag name={tag} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Lien texte plutôt qu'un second bouton contourné : le seul bouton de la
            page reste celui du hero. */}
        <div className="scroll-animate mt-8">
          <a
            href="https://github.com/GAUSS-TPAC"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--t2)] transition-colors hover:text-[var(--t1)]"
          >
            <GithubIcon />
            {p.viewMore}
          </a>
        </div>
      </div>
    </section>
  );
}
