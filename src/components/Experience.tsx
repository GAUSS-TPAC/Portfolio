const experiences = [
  {
    role: "Développeur Fullstack Junior",
    company: "Gohze",
    period: "Juin 2025 – Présent",
    location: "Yaoundé, Cameroun",
    accentColor: "#8b5cf6",
    bullets: [
      "Livraison de fonctionnalités end-to-end sur Flutter (mobile) et Django REST Framework (backend) au sein d'une équipe Agile de 4 ingénieurs.",
      "Conception et documentation des API REST — pratiques contract-first alignées avec les standards Open Banking.",
      "Réduction de ~30% de la latence des réponses API par optimisation des requêtes et stratégies de cache.",
      "Maintien de logs d'audit structurés et de traçabilité des erreurs.",
    ],
    tags: ["Flutter", "Django REST", "PostgreSQL", "Docker", "Agile"],
  },
  {
    role: "Développeur Fullstack Académique",
    company: "Yowyob",
    period: "2024 – Présent",
    location: "Yaoundé, Cameroun",
    accentColor: "#06b6d4",
    bullets: [
      "Contribution à deux projets de production simultanés : gestion de fonctionnalités, revues de code et documentation technique.",
      "Rédaction de tests unitaires et d'intégration (JUnit, Jest) garantissant la fiabilité logicielle.",
      "Automatisation CI/CD (GitHub Actions + Docker) réduisant le temps de déploiement manuel de 40%.",
      "Conception d'architectures scalables RESTful avec Spring Boot et Next.js.",
    ],
    tags: ["React", "Next.js", "Spring Boot", "JUnit", "Jest", "CI/CD"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 font-mono text-sm">{"// expérience"}</span>
          <h2 className="text-4xl font-bold text-white mt-2">Parcours Professionnel</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/30 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 rounded-full border-2 hidden md:block -translate-x-1/2"
                  style={{ backgroundColor: exp.accentColor, borderColor: exp.accentColor }} />

                <div className="md:w-1/2" />

                <div
                  className={`scroll-animate scroll-animate-delay-${i + 1} md:w-1/2 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-violet-500/30 transition-all duration-300 ${i % 2 === 0 ? "md:ml-8" : "md:mr-8"}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span style={{ color: exp.accentColor }} className="font-medium text-sm">
                          {exp.company}
                        </span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-500 text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 font-mono shrink-0 ml-4 mt-1">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-400">
                        <span style={{ color: exp.accentColor }} className="mt-1 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-slate-800/70 text-slate-400 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
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
