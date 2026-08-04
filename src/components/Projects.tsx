"use client";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "./SectionHeader";
import TechTag from "./TechTag";
import ProjectShot from "./ProjectShot";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="11" width="16" height="9" rx="2" strokeWidth={1.8} />
    <path strokeLinecap="round" strokeWidth={1.8} d="M8 11V7a4 4 0 118 0v4" />
  </svg>
);

type Project = ReturnType<typeof useLanguage>["t"]["projects"]["data"][number];

/* Ligne de contexte : rattachement et période, séparés par un point médian.
   Les deux sont facultatifs — deux dépôts n'ont pas encore de dates renseignées,
   et un séparateur orphelin se remarque plus qu'une date manquante. */
function ContextLine({ project }: { project: Project }) {
  const parts = [project.context, project.period].filter(Boolean);
  if (parts.length === 0) return null;
  return <p className="meta mt-1.5">{parts.join(" · ")}</p>;
}

function CodeLink({ project, label }: { project: Project; label: string }) {
  if (!project.github) return null;
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--t3)] transition-colors hover:text-[var(--t1)]"
    >
      <GithubIcon className="w-3.5 h-3.5" />
      {label}
    </a>
  );
}

function TagList({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li key={tag}>
          <TechTag name={tag} />
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  const featured = p.data.find((project) => project.featured);
  const rest = p.data.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-24 md:py-28" style={{ backgroundColor: "var(--sect)" }}>
      <div className="shell">
        <SectionHeader label={p.label} title={p.title} lead={p.description} />

        {/* Projet phare sur toute la largeur. Six cartes identiques laissaient au
            lecteur le soin de deviner laquelle regarder d'abord — c'est
            précisément la décision qu'un portfolio doit prendre à sa place. */}
        {featured && (
          <article className="card card-hover scroll-animate mb-4 overflow-hidden md:grid md:grid-cols-2">
            <ProjectShot slug={featured.slug} title={featured.title} className="md:h-full" />

            <div className="flex flex-col p-5 md:p-7">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="pill"
                  style={{
                    backgroundColor: "var(--accent-soft)",
                    borderColor: "var(--accent-brdr)",
                    color: "var(--accent-hi)",
                  }}
                >
                  {p.featuredLabel}
                </span>
                <span className="pill">{featured.type}</span>
              </div>

              <h3 className="card-title mt-3 text-lg">{featured.title}</h3>
              <ContextLine project={featured} />

              <p className="body-sm mt-3.5 flex-1">{featured.description}</p>

              <div className="mt-5">
                <TagList tags={featured.tags} />
              </div>

              <div className="mt-5">
                <CodeLink project={featured} label={p.codeLabel} />
              </div>
            </div>
          </article>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <article
              key={project.slug}
              className="card card-hover scroll-animate flex flex-col overflow-hidden"
              style={{ transitionDelay: `${Math.min(i, 5) * 70}ms` }}
            >
              <ProjectShot slug={project.slug} title={project.title} />

              <div className="flex flex-1 flex-col p-5">
                <span className="pill self-start">{project.type}</span>

                <h3 className="card-title mt-3">{project.title}</h3>
                <ContextLine project={project} />

                <p className="body-sm mt-3 flex-1">{project.description}</p>

                <div className="mt-4">
                  <TagList tags={project.tags} />
                </div>

                <div className="mt-4">
                  {project.github ? (
                    <CodeLink project={project} label={p.codeLabel} />
                  ) : (
                    /* Dit explicitement pourquoi il n'y a pas de lien. Trois
                       icônes GitHub menant toutes au profil valaient moins que
                       cette mention. */
                    <span className="inline-flex items-center gap-1.5 text-xs text-[var(--t3)]">
                      <LockIcon />
                      {p.privateLabel}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="scroll-animate mt-8">
          <a
            href="https://github.com/GAUSS-TPAC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--t2)] transition-colors hover:text-[var(--t1)]"
          >
            <GithubIcon />
            {p.viewMore}
          </a>
        </div>
      </div>
    </section>
  );
}
