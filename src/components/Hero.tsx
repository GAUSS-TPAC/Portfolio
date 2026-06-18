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
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-mono mb-8 animate-fade-up"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Disponible pour des projets
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-bold mb-5 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-white">Tchapda Pieme </span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Alan Chanel
          </span>
        </h1>

        {/* Role tags */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {["Développeur Fullstack", "Data Scientist", "ML & Data Engineer"].map(
            (title) => (
              <span
                key={title}
                className="px-3 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-300 text-sm font-mono"
              >
                {title}
              </span>
            )
          )}
        </div>

        {/* Bio */}
        <p
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Passionné d&apos;IA, d&apos;innovation et de tech. Je réalise des projets sur
          différents axes :{" "}
          <span className="text-violet-400 font-medium">Intelligence Artificielle</span>,{" "}
          <span className="text-cyan-400 font-medium">applications web</span> et{" "}
          <span className="text-violet-400 font-medium">Data Engineering</span>.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="group px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5"
          >
            Voir mes projets
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-violet-500/50 hover:border-violet-400 text-violet-400 hover:text-white font-semibold rounded-full transition-all duration-300 hover:bg-violet-500/10"
          >
            Me contacter
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
