"use client";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { LANG_LABELS, Lang } from "@/i18n/translations";

const SunIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" strokeWidth={2} />
    <path strokeLinecap="round" strokeWidth={2} d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: t.nav.home,       href: "#hero" },
    { label: t.nav.skills,     href: "#skills" },
    { label: t.nav.projects,   href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact,    href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md border-b border-violet-500/20 shadow-lg"
          : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "var(--nav)" } : undefined}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="text-xl font-mono font-bold shrink-0">
            <span className="text-violet-400">&lt;</span>
            <span className="text-[var(--t1)]">ATC</span>
            <span className="text-cyan-400">/&gt;</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--t2)] hover:text-violet-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-[var(--t2)] hover:text-violet-400 hover:bg-violet-500/10 border border-[var(--brdr)] transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Language selector */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-mono rounded-lg text-[var(--t2)] hover:text-violet-400 border border-[var(--brdr)] hover:border-violet-500/40 transition-all"
              >
                {LANG_LABELS[lang]}
                <svg
                  className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langOpen && (
                <div
                  className="absolute right-0 top-full mt-1 min-w-[72px] rounded-xl border border-[var(--brdr)] shadow-xl overflow-hidden z-50"
                  style={{ backgroundColor: "var(--card)" }}
                >
                  {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`block w-full text-left px-3 py-2 text-xs font-mono transition-colors hover:bg-violet-500/10 ${
                        lang === l ? "text-violet-400" : "text-[var(--t2)] hover:text-violet-400"
                      }`}
                    >
                      {LANG_LABELS[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="mailto:alantchapda@gmail.com"
              className="px-4 py-1.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-full transition-all hover:shadow-lg hover:shadow-violet-500/30"
            >
              {t.nav.hireMe}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[var(--t2)] hover:text-[var(--t1)] p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-violet-500/20 pt-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-[var(--t2)] hover:text-violet-400 transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[var(--brdr)]">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg text-[var(--t2)] border border-[var(--brdr)] hover:border-violet-500/40 hover:text-violet-400 transition-all"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                {theme === "dark" ? "Light" : "Dark"}
              </button>
              {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                    lang === l
                      ? "bg-violet-500/20 text-violet-400 border-violet-500/40"
                      : "text-[var(--t2)] border-[var(--brdr)] hover:border-violet-500/40 hover:text-violet-400"
                  }`}
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
