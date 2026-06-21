"use client";
import { useLanguage } from "@/context/LanguageContext";

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="projects" className="py-24 px-4" style={{ backgroundColor: "var(--sect)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <span className="text-violet-400 font-mono text-sm">{p.label}</span>
          <h2 className="text-4xl font-bold text-[var(--t1)] mt-2">{p.title}</h2>
          <p className="text-[var(--t2)] mt-3 max-w-xl mx-auto">{p.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {p.data.map((project, i) => (
            <div
              key={project.title}
              className={`scroll-animate scroll-animate-delay-${i + 1} group flex flex-col p-6 rounded-2xl border hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300`}
              style={{ backgroundColor: "var(--card)", borderColor: "var(--brdr)" }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-full"
                    style={{ background: `${project.accentColor}20`, color: project.accentColor, border: `1px solid ${project.accentColor}40` }}
                  >
                    {project.type}
                  </span>
                  <h3 className="text-[var(--t1)] font-semibold text-base mt-2 leading-tight">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 shrink-0 p-2 rounded-lg text-[var(--t2)] hover:text-[var(--t1)] transition-colors"
                  style={{ backgroundColor: "var(--surf)" }}
                  title="GitHub"
                >
                  <GithubIcon />
                </a>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-[var(--t3)] font-mono">{project.company}</span>
                <span className="text-[var(--t3)]">·</span>
                <span className="text-xs text-[var(--t3)]">{project.period}</span>
              </div>

              <p className="text-[var(--t2)] text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
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
          ))}
        </div>

        <div className="text-center mt-10 scroll-animate">
          <a
            href="https://github.com/GAUSS-TPAC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-violet-500/40 hover:border-violet-400 text-violet-400 hover:text-white font-medium rounded-full transition-all duration-300 hover:bg-violet-500/10"
          >
            {p.viewMore}
          </a>
        </div>
      </div>
    </section>
  );
}
