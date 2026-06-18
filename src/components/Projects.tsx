const projects = [
  {
    title: "Système de Recommandation IA",
    description:
      "Moteur de recommandation basé sur le collaborative filtering et le content-based filtering, avec une API RESTful pour servir les prédictions en temps réel.",
    tags: ["Python", "TensorFlow", "Flask", "PostgreSQL"],
    type: "Machine Learning",
    accentColor: "#8b5cf6",
    github: "https://github.com/alantchapda",
    demo: "#",
  },
  {
    title: "Dashboard Analytics Temps Réel",
    description:
      "Tableau de bord interactif pour la visualisation de KPIs avec filtres dynamiques, export CSV et intégration de sources de données multiples.",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    type: "Fullstack",
    accentColor: "#06b6d4",
    github: "https://github.com/alantchapda",
    demo: "#",
  },
  {
    title: "Pipeline de Données ETL",
    description:
      "Pipeline de traitement de données à grande échelle avec orchestration Airflow, transformations dbt et stockage sur BigQuery en production.",
    tags: ["Apache Spark", "Airflow", "GCP", "dbt"],
    type: "Data Engineering",
    accentColor: "#8b5cf6",
    github: "https://github.com/alantchapda",
    demo: "#",
  },
  {
    title: "Chatbot NLP avec RAG",
    description:
      "Assistant conversationnel utilisant le Retrieval-Augmented Generation pour répondre à des questions sur des documents PDF avec mémoire conversationnelle.",
    tags: ["LangChain", "OpenAI", "FastAPI", "Pinecone"],
    type: "IA / NLP",
    accentColor: "#06b6d4",
    github: "https://github.com/alantchapda",
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
          <h2 className="text-4xl font-bold text-white mt-2">Mes Réalisations</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Projets couvrant l&apos;IA, le développement web et l&apos;ingénierie des données.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
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
                  <h3 className="text-white font-semibold text-lg mt-2">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                    title="GitHub"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                    title="Démo"
                  >
                    <ExternalIcon />
                  </a>
                </div>
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
            href="https://github.com/alantchapda"
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
