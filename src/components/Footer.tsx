import { personalInfo } from '../data/portfolioData';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-zinc-800/60 text-xs font-mono text-zinc-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-zinc-400">{personalInfo.name}</span>
          <span className="text-zinc-700 select-none">·</span>
          <span>{year}</span>
        </div>
        <div className="text-zinc-500">
          <span>Kochi, India</span>
        </div>
      </div>
    </footer>
  );
}
