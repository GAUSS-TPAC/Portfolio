"use client";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { LANG_LABELS, Lang } from "@/i18n/translations";

const SunIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="5" strokeWidth={1.8} />
    <path strokeLinecap="round" strokeWidth={1.8} d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const SECTION_IDS = ["hero", "skills", "projects", "experience", "about", "contact"] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: t.nav.home,       id: "hero" },
    { label: t.nav.skills,     id: "skills" },
    { label: t.nav.projects,   id: "projects" },
    { label: t.nav.experience, id: "experience" },
    { label: t.nav.about,      id: "about" },
    { label: t.nav.contact,    id: "contact" },
  ];

  /* Un seul écouteur de défilement pour l'ombre de la barre et la section
     active — sans repère de position, une navigation à six entrées ne dit
     jamais où l'on se trouve. */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const probe = window.scrollY + 96; // hauteur de la barre + une marge
      let current: string = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      }
      // La dernière section est souvent trop courte pour atteindre la sonde :
      // arrivé en bas de page, c'est forcément elle qui est à l'écran.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = SECTION_IDS[SECTION_IDS.length - 1];
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setLangOpen(false);
      setMobileOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b backdrop-blur-md" : "border-b border-transparent"
      }`}
      style={scrolled ? { backgroundColor: "var(--nav)", borderColor: "var(--brdr)" } : undefined}
    >
      <div className="shell">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="shrink-0 font-mono text-lg font-bold" aria-label="Alan Chanel Tchapda Pieme">
            <span style={{ color: "var(--accent-hi)" }}>&lt;</span>
            <span className="text-[var(--t1)]">ATC</span>
            <span style={{ color: "var(--accent-hi)" }}>/&gt;</span>
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-6 md:flex">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="nav-link"
                  aria-current={active === link.id ? "true" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <span aria-hidden="true" className="h-4 w-px" style={{ backgroundColor: "var(--brdr2)" }} />

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="rounded-lg border p-2 text-[var(--t2)] transition-colors hover:text-[var(--t1)]"
                style={{ borderColor: "var(--brdr)" }}
                aria-label={theme === "dark" ? "Passer en thème clair" : "Passer en thème sombre"}
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>

              <div ref={langRef} className="relative">
                <button
                  onClick={() => setLangOpen((o) => !o)}
                  aria-expanded={langOpen}
                  aria-haspopup="menu"
                  aria-label="Langue"
                  className="flex items-center gap-1 rounded-lg border px-2.5 py-2 font-mono text-xs text-[var(--t2)] transition-colors hover:text-[var(--t1)]"
                  style={{ borderColor: "var(--brdr)" }}
                >
                  {LANG_LABELS[lang]}
                  <svg
                    className={`h-3 w-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {langOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 top-full z-50 mt-2 min-w-[5rem] overflow-hidden rounded-xl border shadow-xl"
                    style={{ backgroundColor: "var(--card)", borderColor: "var(--brdr2)", backdropFilter: "blur(12px)" }}
                  >
                    {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
                      <button
                        key={l}
                        role="menuitemradio"
                        aria-checked={lang === l}
                        onClick={() => { setLang(l); setLangOpen(false); }}
                        className={`block w-full px-3 py-2 text-left font-mono text-xs transition-colors hover:bg-[var(--surf)] ${
                          lang === l ? "text-[var(--accent-hi)]" : "text-[var(--t2)] hover:text-[var(--t1)]"
                        }`}
                      >
                        {LANG_LABELS[l]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Pointe vers le formulaire plutôt qu'un mailto : évite d'exposer
                  l'adresse en clair dans le HTML et bénéficie de l'anti-spam. */}
              <a
                href="#contact"
                className="btn-accent ml-1 rounded-lg px-4 py-2 text-sm font-medium"
              >
                {t.nav.hireMe}
              </a>
            </div>
          </div>

          {/* Mobile */}
          <button
            className="p-1 text-[var(--t2)] transition-colors hover:text-[var(--t1)] md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div
            id="mobile-menu"
            className="border-t pb-4 pt-3 md:hidden"
            style={{ borderColor: "var(--brdr)", backgroundColor: scrolled ? undefined : "var(--nav)" }}
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`block rounded-lg px-2 py-2 text-sm transition-colors ${
                    active === link.id
                      ? "text-[var(--accent-hi)]"
                      : "text-[var(--t2)] hover:text-[var(--t1)]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2 border-t pt-3" style={{ borderColor: "var(--brdr)" }}>
              <button
                onClick={toggleTheme}
                className="btn-ghost flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                {theme === "dark" ? "Light" : "Dark"}
              </button>
              {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className="rounded-lg border px-2.5 py-1.5 font-mono text-xs transition-colors"
                  style={
                    lang === l
                      ? { backgroundColor: "var(--accent-soft)", borderColor: "var(--accent-brdr)", color: "var(--accent-hi)" }
                      : { borderColor: "var(--brdr)", color: "var(--t2)" }
                  }
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
