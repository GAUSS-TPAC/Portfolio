export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-3/4 left-1/2 w-60 h-60 bg-violet-800/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Disponible pour des projets &amp; opportunités
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-5">
          <span className="text-white">Alan Chanel </span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Tchapda Pieme
          </span>
        </h1>

        {/* Role tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {[
            "Ingénieur Fintech",
            "Développeur Fullstack",
            "Data Scientist",
            "ML & Data Engineer",
          ].map((title) => (
            <span
              key={title}
              className="px-3 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-300 text-sm font-mono"
            >
              {title}
            </span>
          ))}
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-5">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Yaoundé, Cameroun — Mobilité &amp; Remote
        </div>

        {/* Bio */}
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Ingénieur logiciel avec <span className="text-violet-400 font-medium">+2 ans d&apos;expérience en production</span> sur
          des services RESTful haute disponibilité et architectures orientées événements. Double formation{" "}
          <span className="text-cyan-400 font-medium">Informatique (ENSP)</span> et{" "}
          <span className="text-violet-400 font-medium">Mathématiques</span> — passionné d&apos;IA, d&apos;innovation et de tech.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="group px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5"
          >
            Voir mes projets
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="/Alan_Tchapda_Fintech_Authentic_FR.docx.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 border border-violet-500/50 hover:border-violet-400 text-violet-400 hover:text-white font-semibold rounded-full transition-all duration-300 hover:bg-violet-500/10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            CV Français
          </a>
          <a
            href="/Fullstack_Developer_Alan_Chanel_Tchapda_Pieme_CV(en).docx.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 border border-slate-700/60 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 font-medium rounded-full transition-all duration-300 hover:bg-cyan-500/5 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            CV English
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs font-mono">scroll</span>
        <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-violet-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
