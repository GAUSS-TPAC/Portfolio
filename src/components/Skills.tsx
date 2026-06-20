const skillCategories = [
  {
    title: "Langages",
    icon: "💻",
    accentColor: "#8b5cf6",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "Dart"],
  },
  {
    title: "Frontend & Mobile",
    icon: "🎨",
    accentColor: "#06b6d4",
    skills: ["React.js", "Next.js", "Flutter", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend & API",
    icon: "⚙️",
    accentColor: "#8b5cf6",
    skills: [
      "Spring Boot",
      "Django REST Framework",
      "Node.js",
      "REST API",
      "GraphQL",
      "Microservices",
      "WebSocket",
    ],
  },
  {
    title: "Data & IA",
    icon: "🤖",
    accentColor: "#06b6d4",
    skills: [
      "Machine Learning",
      "Data Analysis",
      "Data Visualization",
      "Prompt Engineering",
      "Séries temporelles",
      "Modélisation statistique",
    ],
  },
  {
    title: "Bases de données",
    icon: "🗄️",
    accentColor: "#8b5cf6",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "DevOps & Sécurité",
    icon: "🔐",
    accentColor: "#06b6d4",
    skills: [
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Linux",
      "JWT / OAuth2",
      "RBAC",
      "IAM",
      "Git",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 font-mono text-sm">// compétences</span>
          <h2 className="text-4xl font-bold text-white mt-2">Stack Technique</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            De la conception d&apos;APIs sécurisées aux pipelines de données temps réel, en
            passant par le mobile et le machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                  style={{
                    background: `${cat.accentColor}20`,
                    border: `1px solid ${cat.accentColor}40`,
                  }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-base" style={{ color: cat.accentColor }}>
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/50 hover:border-violet-500/50 transition-colors"
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
