interface SectionHeaderProps {
  number: string;
  title: string;
  count?: string | number;
  label?: string;
  subtitle?: string;
}

export function SectionHeader({ number, title, count, label, subtitle }: SectionHeaderProps) {
  return (
    <div className="space-y-2 mb-8">
      <div className="flex items-center gap-2.5 sm:gap-4">
        <div className="flex items-baseline gap-1.5 sm:gap-2 shrink-0">
          <span className="text-[11px] font-mono text-zinc-500 select-none">[{number}]</span>
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-200 font-medium">
            {title}
          </h2>
        </div>
        <div className="h-px bg-zinc-800 flex-1 min-w-[8px]" aria-hidden="true" />
        {(count !== undefined || label) && (
          <span className="text-[11px] font-mono text-zinc-500 shrink-0">
            {count !== undefined ? `${count} ${label || ''}`.trim() : label}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
