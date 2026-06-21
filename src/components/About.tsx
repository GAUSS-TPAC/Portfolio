const education = [
  {
    degree: "Diplôme d'Ingénieur — Informatique",
    school: "École Nationale Supérieure Polytechnique de Yaoundé (ENSP)",
    period: "Sept. 2024 – Présent",
    status: "En cours",
    details:
      "Algorithmes & Complexité, Systèmes Distribués, Intelligence Artificielle, Sécurité Réseau, Architecture Logicielle.",
    accentColor: "#8b5cf6",
  },
  {
    degree: "DEUG — Mathématiques",
    school: "Université de Yaoundé 1",
    period: "Sept. 2022 – 2024",
    status: "Obtenu",
    details:
      "Probabilités & Statistiques, Algèbre Linéaire, Équations Différentielles, Analyse Numérique — socle pour la modélisation stochastique et la finance quantitative.",
    accentColor: "#06b6d4",
  },
];

const certifications = [
  {
    title: "OCI — AI Foundation Associate",
    issuer: "Oracle Cloud Infrastructure",
    year: "2025",
    icon: "☁️",
  },
  {
    title: "OCI — Data Science Professional",
    issuer: "Oracle Cloud Infrastructure",
    year: "2025",
    icon: "📊",
  },
  {
    title: "IoT & Cloud Computing",
    issuer: "Université Yonsei via Coursera",
    year: "2024",
    icon: "🌐",
  },
  {
    title: "Prompt Engineering — IA Générative",
    issuer: "LinkedIn Learning",
    year: "2024",
    icon: "🤖",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <span className="text-violet-400 font-mono text-sm">{"// à propos"}</span>
          <h2 className="text-4xl font-bold text-white mt-2">Formation & Certifications</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education */}
          <div className="scroll-animate scroll-animate-delay-1">
            <h3 className="text-lg font-semibold text-slate-300 mb-6 flex items-center gap-2">
              <span className="text-violet-400">🎓</span> Formation académique
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-violet-500/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-semibold text-sm leading-tight flex-1">
                      {edu.degree}
                    </h4>
                    <span
                      className="ml-3 shrink-0 text-xs px-2 py-0.5 rounded-full font-mono"
                      style={{
                        background: `${edu.accentColor}20`,
                        color: edu.accentColor,
                        border: `1px solid ${edu.accentColor}40`,
                      }}
                    >
                      {edu.status}
                    </span>
                  </div>
                  <p style={{ color: edu.accentColor }} className="text-sm font-medium mb-1">
                    {edu.school}
                  </p>
                  <p className="text-slate-500 text-xs mb-2">{edu.period}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="scroll-animate scroll-animate-delay-2">
            <h3 className="text-lg font-semibold text-slate-300 mb-6 flex items-center gap-2">
              <span className="text-cyan-400">🏅</span> Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/60 hover:border-cyan-500/30 hover:-translate-x-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800/70 border border-slate-700/50 flex items-center justify-center text-xl shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">{cert.title}</p>
                    <p className="text-slate-500 text-xs">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-slate-600 font-mono shrink-0">{cert.year}</span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-6 p-5 rounded-2xl bg-slate-900/50 border border-slate-800/60">
              <h4 className="text-slate-300 font-semibold text-sm mb-3 flex items-center gap-2">
                <span>🌍</span> Langues
              </h4>
              <div className="flex gap-4">
                {[
                  { lang: "Français", level: "Langue maternelle", pct: 100 },
                  { lang: "Anglais", level: "Courant (professionnel)", pct: 85 },
                ].map((l) => (
                  <div key={l.lang} className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 text-xs font-medium">{l.lang}</span>
                      <span className="text-slate-500 text-xs">{l.level}</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${l.pct}%`,
                          background: "linear-gradient(90deg, #8b5cf6, #06b6d4)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
