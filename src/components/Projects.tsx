const projects = [
  {
    title: "TumCare — Monitoring Cardiaque",
    description:
      "Application mobile/web de suivi de santé cardiaque en temps réel. Pipeline d'ingestion IoT à base d'événements, moteur d'alertes à faible latence sur franchissement de seuil, base de données de séries temporelles et sécurité bancaire JWT/RBAC.",
    tags: ["Flutter", "Django REST", "PostgreSQL", "WebSocket", "Docker"],
    type: "Fullstack / IoT",
    accentColor: "#8b5cf6",
    company: "Gohze — Production",
    period: "2024 – Présent",
    github: "https://github.com/GAUSS-TPAC",
    demo: "#",
  },
  {
    title: "Système d'Adressage Informel",
    description:
      "Plateforme transactionnelle gérant 500+ entités en temps réel avec synchronisation d'état Redux. SSR Next.js < 200ms, pipeline CI/CD GitHub Actions + Docker réduisant le cycle de déploiement de 40%.",
    tags: ["React", "Next.js", "Spring Boot", "Redux", "Docker", "CI/CD"],
    type: "Fullstack",
    accentColor: "#06b6d4",
    company: "Yowyob — Production",
    period: "Déc. 2024 – Mars 2025",
    github: "https://github.com/GAUSS-TPAC",
    demo: "#",
  },
  {
    title: "Protocole d'Annuaire LDAP / IAM",
    description:
      "Système de gestion des identités & accès (IAM) hiérarchique inspiré des standards LDAP. Couche d'autorisation OAuth2 avec RBAC multi-tenant, gestion sécurisée des credentials et cycle de vie des tokens — aligné conformité KYC/AML.",
    tags: ["Spring Boot", "Next.js", "JWT", "RBAC", "OAuth2"],
    type: "Sécurité / IAM",
    accentColor: "#8b5cf6",
    company: "Yowyob — Production",
    period: "2025",
    github: "https://github.com/GAUSS-TPAC",
    demo: "#",
  },
];

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 font-mono text-sm">// projets</span>
          <h2 className="text-4xl font-bold text-white mt-2">Projets en Production</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Des solutions réelles déployées en production, couvrant l&apos;IoT, le Fullstack et la
            sécurité des systèmes d&apos;information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-full"
                    style={{
                      background: `${project.accentColor}20`,
                      color: project.accentColor,
                      border: `1px solid ${project.accentColor}40`,
                    }}
                  >
                    {project.type}
                  </span>
                  <h3 className="text-white font-semibold text-base mt-2 leading-tight">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2 shrink-0 ml-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  >
                    <GithubIcon />
                  </a>
                </div>
              </div>

              {/* Company & period */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-slate-500 font-mono">{project.company}</span>
                <span className="text-slate-700">·</span>
                <span className="text-xs text-slate-600">{project.period}</span>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-slate-800/70 text-slate-400 border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/GAUSS-TPAC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-violet-500/40 hover:border-violet-400 text-violet-400 hover:text-white font-medium rounded-full transition-all duration-300 hover:bg-violet-500/10"
          >
            Voir plus sur GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
