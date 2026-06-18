export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-slate-500 text-sm font-mono">
          <span className="text-violet-400">&lt;</span>
          <span className="text-slate-300">ATC</span>
          <span className="text-cyan-400">/&gt;</span>
          <span className="ml-2">© {new Date().getFullYear()} Tchapda Pieme Alan Chanel</span>
        </div>
        <div className="text-slate-600 text-xs font-mono">
          Built with{" "}
          <span className="text-violet-400">Next.js</span>
          {" + "}
          <span className="text-cyan-400">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
