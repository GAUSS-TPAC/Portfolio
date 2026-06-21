"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const { t } = useLanguage();
  const c = t.contact;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xnjkablp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("success"); form.reset(); }
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 scroll-animate">
          <span className="text-violet-400 font-mono text-sm">{c.label}</span>
          <h2 className="text-4xl font-bold text-[var(--t1)] mt-2 mb-3">{c.title}</h2>
          <p className="text-[var(--t2)] text-lg max-w-xl mx-auto">{c.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info + social */}
          <div className="scroll-animate scroll-animate-delay-1 space-y-6">
            {/* Contact info */}
            <div
              className="p-6 rounded-2xl border"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--brdr)" }}
            >
              <h3 className="text-[var(--t4)] font-semibold mb-4">{c.coordsTitle}</h3>
              <div className="space-y-3">
                <a
                  href="mailto:alantchapda@gmail.com"
                  className="flex items-center gap-3 text-[var(--t2)] hover:text-violet-400 transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/20 transition-colors">
                    ✉
                  </span>
                  <span className="text-sm">alantchapda@gmail.com</span>
                </a>
                <a
                  href="tel:+237672171934"
                  className="flex items-center gap-3 text-[var(--t2)] hover:text-cyan-400 transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                    📞
                  </span>
                  <span className="text-sm">+237 672 171 934</span>
                </a>
                <div className="flex items-center gap-3 text-[var(--t3)]">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--surf)" }}>📍</span>
                  <span className="text-sm">{c.location}</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: "GitHub",   value: "GAUSS-TPAC",    href: "https://github.com/GAUSS-TPAC",                icon: <GithubIcon /> },
                { label: "LinkedIn", value: "alan-tchapda",   href: "https://linkedin.com/in/alan-tchapda-267981350", icon: <LinkedinIcon /> },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-3 p-4 rounded-xl border hover:border-violet-500/40 hover:-translate-y-0.5 transition-all duration-300 text-[var(--t2)] hover:text-[var(--t1)]"
                  style={{ backgroundColor: "var(--card)", borderColor: "var(--brdr)" }}
                >
                  <div className="text-violet-400">{link.icon}</div>
                  <div>
                    <div className="text-[var(--t1)] text-sm font-medium">{link.label}</div>
                    <div className="text-[var(--t3)] text-xs">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
              <p className="text-green-400 text-sm font-medium">{c.availableBadge}</p>
            </div>
          </div>

          {/* Form */}
          <div className="scroll-animate scroll-animate-delay-2">
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-2xl border space-y-4"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--brdr)" }}
            >
              <h3 className="text-[var(--t4)] font-semibold mb-2">{c.formTitle}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[var(--t3)] mb-1.5 font-mono">{c.name}</label>
                  <input
                    name="name" type="text" required
                    placeholder={c.namePlaceholder}
                    className="w-full px-3 py-2.5 rounded-lg text-[var(--t4)] text-sm focus:outline-none focus:border-violet-500/60 transition-colors"
                    style={{ backgroundColor: "var(--surf)", border: "1px solid var(--brdr2)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs text-[var(--t3)] mb-1.5 font-mono">{c.email}</label>
                  <input
                    name="email" type="email" required
                    placeholder={c.emailPlaceholder}
                    className="w-full px-3 py-2.5 rounded-lg text-[var(--t4)] text-sm focus:outline-none focus:border-violet-500/60 transition-colors"
                    style={{ backgroundColor: "var(--surf)", border: "1px solid var(--brdr2)" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-[var(--t3)] mb-1.5 font-mono">{c.subject}</label>
                <input
                  name="subject" type="text"
                  placeholder={c.subjectPlaceholder}
                  className="w-full px-3 py-2.5 rounded-lg text-[var(--t4)] text-sm focus:outline-none focus:border-violet-500/60 transition-colors"
                  style={{ backgroundColor: "var(--surf)", border: "1px solid var(--brdr2)" }}
                />
              </div>

              <div>
                <label className="block text-xs text-[var(--t3)] mb-1.5 font-mono">{c.message}</label>
                <textarea
                  name="message" required rows={4}
                  placeholder={c.messagePlaceholder}
                  className="w-full px-3 py-2.5 rounded-lg text-[var(--t4)] text-sm focus:outline-none focus:border-violet-500/60 transition-colors resize-none"
                  style={{ backgroundColor: "var(--surf)", border: "1px solid var(--brdr2)" }}
                />
              </div>

              {status === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                  ✓ {c.successMsg}
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  ✗ {c.errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)" }}
              >
                {status === "loading" ? c.sending : status === "success" ? c.sent : c.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
