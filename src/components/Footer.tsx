"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t py-8" style={{ borderColor: "var(--brdr)" }}>
      <div className="shell flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="font-mono text-sm text-[var(--t3)]">
          <span style={{ color: "var(--accent-hi)" }}>&lt;</span>
          <span className="text-[var(--t4)]">ATC</span>
          <span style={{ color: "var(--accent-hi)" }}>/&gt;</span>
          <span className="ml-2">© {new Date().getFullYear()} Tchapda Pieme Alan Chanel</span>
        </p>
        <p className="font-mono text-xs text-[var(--t3)]">
          {t.footer.builtWith} Next.js + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
