"use client";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "./SectionHeader";

// Anti-scraping : ni l'adresse e-mail ni le numéro n'apparaissent en clair dans le
// HTML servi. Ils sont reconstitués après hydratation, ce qui neutralise les robots
// de collecte qui se contentent d'analyser la source de la page.
const EMAIL_USER = "alantchapda";
const EMAIL_HOST = "gmail.com";
const PHONE_PARTS = ["237", "672", "171", "934"];

const MASKED_EMAIL = "••••••••••@•••••.•••";
const MASKED_PHONE = "+••• ••• ••• •••";

/** Passe à true après le montage, donc uniquement dans un vrai navigateur. */
function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}

// Garde-fous anti-abus du formulaire.
const MIN_FILL_MS = 3000;    // un humain met plus de 3 s à remplir le formulaire
const COOLDOWN_MS = 45000;   // délai minimum entre deux envois

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

type Status = "idle" | "loading" | "success" | "error" | "ratelimit";

const FEEDBACK: Record<Exclude<Status, "idle" | "loading">, { mark: string; className: string }> = {
  success:   { mark: "✓", className: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" },
  error:     { mark: "✗", className: "border-red-500/30 bg-red-500/10 text-red-400" },
  ratelimit: { mark: "⏳", className: "border-amber-500/30 bg-amber-500/10 text-amber-400" },
};

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const { t } = useLanguage();
  const c = t.contact;

  const hydrated = useHydrated();
  const mountedAt = useRef(0);
  const lastSentAt = useRef(0);

  useEffect(() => { mountedAt.current = Date.now(); }, []);

  const email = hydrated ? `${EMAIL_USER}@${EMAIL_HOST}` : MASKED_EMAIL;
  const phone = hydrated ? `+${PHONE_PARTS[0]} ${PHONE_PARTS.slice(1).join(" ")}` : MASKED_PHONE;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const now = Date.now();

    // Honeypot : champ invisible que seuls les robots remplissent. On simule un
    // succès pour ne pas leur signaler la détection.
    if ((data.get("_gotcha") as string | null)?.trim()) {
      setStatus("success");
      form.reset();
      return;
    }

    // Piège temporel : soumission quasi instantanée = automate.
    if (now - mountedAt.current < MIN_FILL_MS) {
      setStatus("ratelimit");
      return;
    }

    // Limitation de débit : empêche l'inondation depuis cet onglet.
    if (lastSentAt.current && now - lastSentAt.current < COOLDOWN_MS) {
      setStatus("ratelimit");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/xnjkablp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        lastSentAt.current = Date.now();
        setStatus("success");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const feedback = status === "idle" || status === "loading" ? null : FEEDBACK[status];
  const feedbackText =
    status === "success" ? c.successMsg :
    status === "error" ? c.errorMsg :
    status === "ratelimit" ? c.rateLimitMsg : "";

  return (
    <section id="contact" className="py-24 md:py-28">
      <div className="shell">
        <SectionHeader label={c.label} title={c.title} lead={c.description} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
          {/* Coordonnées */}
          <div className="scroll-animate space-y-4">
            <ul className="card divide-y overflow-hidden" style={{ borderColor: "var(--brdr)" }}>
              <li style={{ borderColor: "var(--brdr)" }}>
                <a
                  href={hydrated ? `mailto:${email}` : undefined}
                  className="flex items-center gap-3 px-4 py-3.5 text-sm text-[var(--t2)] transition-colors hover:text-[var(--t1)]"
                >
                  <span className="shrink-0 text-[var(--t3)]"><MailIcon /></span>
                  <span className="truncate">{email}</span>
                </a>
              </li>
              <li style={{ borderColor: "var(--brdr)" }}>
                <a
                  href={hydrated ? `tel:+${PHONE_PARTS.join("")}` : undefined}
                  className="flex items-center gap-3 px-4 py-3.5 text-sm text-[var(--t2)] transition-colors hover:text-[var(--t1)]"
                >
                  <span className="shrink-0 text-[var(--t3)]"><PhoneIcon /></span>
                  <span>{phone}</span>
                </a>
              </li>
              <li
                className="flex items-center gap-3 px-4 py-3.5 text-sm text-[var(--t3)]"
                style={{ borderColor: "var(--brdr)" }}
              >
                <span className="shrink-0"><MapPinIcon /></span>
                <span>{c.location}</span>
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "GitHub",   value: "GAUSS-TPAC",   href: "https://github.com/GAUSS-TPAC",                  icon: <GithubIcon /> },
                { label: "LinkedIn", value: "alan-tchapda", href: "https://linkedin.com/in/alan-tchapda-267981350", icon: <LinkedinIcon /> },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover flex items-center gap-3 p-4 text-[var(--t3)]"
                >
                  <span className="shrink-0">{link.icon}</span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-[var(--t1)]">{link.label}</span>
                    <span className="block truncate text-xs text-[var(--t3)]">{link.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <p className="flex items-center gap-2.5 rounded-lg border border-emerald-500/25 bg-emerald-500/5 px-4 py-3 text-sm font-medium text-emerald-400">
              <span aria-hidden="true" className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400" />
              {c.availableBadge}
            </p>
          </div>

          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className="card scroll-animate space-y-4 p-5 md:p-6"
            style={{ transitionDelay: "80ms" }}
          >
            <h3 className="group-title">{c.formTitle}</h3>

            {/* Honeypot : invisible et hors du parcours clavier, seuls les robots le remplissent. */}
            <input
              type="text" name="_gotcha" tabIndex={-1} autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                {/* Les labels n'étaient reliés à aucun champ : cliquer dessus ne
                    faisait rien et un lecteur d'écran annonçait « zone de texte,
                    sans étiquette ». */}
                <label htmlFor="contact-name" className="meta mb-1.5 block">{c.name}</label>
                <input
                  id="contact-name" name="name" type="text" required maxLength={100}
                  autoComplete="name"
                  placeholder={c.namePlaceholder}
                  className="field"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="meta mb-1.5 block">{c.email}</label>
                <input
                  id="contact-email" name="email" type="email" required maxLength={254}
                  autoComplete="email"
                  placeholder={c.emailPlaceholder}
                  className="field"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="meta mb-1.5 block">{c.subject}</label>
              <input
                id="contact-subject" name="subject" type="text" maxLength={150}
                placeholder={c.subjectPlaceholder}
                className="field"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="meta mb-1.5 block">{c.message}</label>
              <textarea
                id="contact-message" name="message" required rows={6} maxLength={5000}
                placeholder={c.messagePlaceholder}
                className="field resize-none"
              />
            </div>

            {/* aria-live : le retour d'envoi apparaît sous le bouton, donc hors
                du champ de vision d'un lecteur d'écran s'il n'est pas annoncé. */}
            <div role="status" aria-live="polite" className="empty:hidden">
              {feedback && (
                <p className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm ${feedback.className}`}>
                  <span aria-hidden="true">{feedback.mark}</span>
                  {feedbackText}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="btn-accent w-full rounded-lg py-2.5 text-sm font-semibold"
            >
              {status === "loading" ? c.sending : status === "success" ? c.sent : c.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
