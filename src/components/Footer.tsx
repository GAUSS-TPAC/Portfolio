"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t py-8 px-4" style={{ borderColor: "var(--brdr)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[var(--t3)] text-sm font-mono">
          <span className="text-violet-400">&lt;</span>
          <span className="text-[var(--t4)]">ATC</span>
          <span className="text-cyan-400">/&gt;</span>
          <span className="ml-2">© {new Date().getFullYear()} Tchapda Pieme Alan Chanel</span>
        </div>
        <div className="text-[var(--t3)] text-xs font-mono">
          {t.footer.builtWith}{" "}
          <span className="text-violet-400">Next.js</span>
          {" + "}
          <span className="text-cyan-400">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
