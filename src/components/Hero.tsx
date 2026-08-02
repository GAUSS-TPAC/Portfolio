"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const DownloadIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const PinIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CV_FILES = {
  fintech:   "/alan-tchapda-cv-fintech-fr.pdf",
  fullstack: "/alan-tchapda-cv-fullstack-en.pdf",
} as const;

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  /* Les deux CV tenaient dans deux boutons de plus, ce qui donnait trois appels
     à l'action de rang égal : aucun ne ressortait. Ils passent sous un seul
     déclencheur secondaire. */
  const [cvOpen, setCvOpen] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cvOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (cvRef.current && !cvRef.current.contains(e.target as Node)) setCvOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCvOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [cvOpen]);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-24">
      {/* Halo unique, ancré en haut à gauche derrière le titre — il remplace les
          trois blobs flottants, qui attiraient l'œil loin du texte. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(58rem 34rem at 12% 6%, var(--halo), transparent 68%)" }}
      />

      {/* Grille neutre et atténuée sur les bords : une texture, plus un motif. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 75% 62% at 45% 42%, #000 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 62% at 45% 42%, #000 30%, transparent 100%)",
        }}
      />

      {/* Même gouttière que la navbar : le prénom s'aligne verticalement sur le
          logo, ce qui est le repère que l'œil utilise en premier. */}
      <div className="shell relative z-10">
        {/* Statut */}
        <div
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs"
          style={{ backgroundColor: "var(--accent-soft)", borderColor: "var(--accent-brdr)", color: "var(--accent-hi)" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          {h.available}
        </div>

        {/* Nom : sans dégradé. Le contraste plein est plus lisible et plus sûr
            de lui qu'un texte qui s'efface vers le cyan. */}
        <h1 className="display-title mt-7">
          Alan Chanel
          <br />
          Tchapda Pieme
        </h1>

        {/* Rôles sur une ligne séparée par des points médians plutôt qu'en
            quatre pastilles — quatre pastilles se lisent comme des tags, une
            ligne se lit comme un titre de poste. */}
        <p className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.9375rem] font-medium text-[var(--t4)]">
          {h.roles.map((role, i) => (
            <span key={role} className="inline-flex items-center gap-2.5">
              {i > 0 && <span aria-hidden="true" className="text-[var(--t3)]">·</span>}
              {role}
            </span>
          ))}
        </p>

        <p className="meta mt-3 flex items-center gap-1.5">
          <PinIcon />
          {h.location}
        </p>

        <p className="mt-6 max-w-[58ch] text-[1.0625rem] leading-[1.75] text-[var(--t2)] text-pretty">
          {h.bio}
        </p>

        {/* Un seul bouton plein : l'action que l'on veut réellement obtenir. */}
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="btn-accent group inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold"
          >
            {h.viewProjects}
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>

          <div ref={cvRef} className="relative">
            <button
              type="button"
              onClick={() => setCvOpen((o) => !o)}
              aria-expanded={cvOpen}
              aria-haspopup="menu"
              className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium text-[var(--t4)] transition-colors duration-200 hover:text-[var(--t1)]"
              style={{ borderColor: "var(--brdr2)", backgroundColor: "var(--surf)" }}
            >
              <DownloadIcon />
              {h.cvDownload}
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${cvOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {cvOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full z-20 mt-2 min-w-[13rem] overflow-hidden rounded-xl border shadow-xl"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--brdr2)", backdropFilter: "blur(12px)" }}
              >
                {([
                  [CV_FILES.fintech,   h.cvFintech],
                  [CV_FILES.fullstack, h.cvFullstack],
                ] as const).map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    download
                    role="menuitem"
                    onClick={() => setCvOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[var(--t2)] transition-colors hover:bg-[var(--surf)] hover:text-[var(--t1)]"
                  >
                    <DownloadIcon className="w-3.5 h-3.5" />
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Preuves chiffrées : la partie que l'on scanne avant de lire la bio. */}
        <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t pt-7" style={{ borderColor: "var(--brdr)" }}>
          {h.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="stat-value block">{stat.value}</span>
                <span className="stat-label block">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Indicateur de défilement en gris neutre : c'est un repère, pas un
          élément de marque — il n'a pas à porter la couleur d'accent. */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--t3)] md:flex"
      >
        <span className="font-mono text-[0.6875rem] tracking-[0.2em] uppercase">scroll</span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border pt-1.5" style={{ borderColor: "var(--brdr2)" }}>
          <div className="h-2 w-1 animate-bounce rounded-full bg-[var(--t3)]" />
        </div>
      </div>
    </section>
  );
}
