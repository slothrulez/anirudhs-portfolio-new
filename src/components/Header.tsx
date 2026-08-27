import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo, contactInfo } from '../data/portfolioData';

export function Header() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#experience', label: 'Experience', index: '01' },
    { href: '#projects', label: 'Projects', index: '02' },
    { href: '#exploring', label: 'Exploring', index: '03' },
    { href: '#community', label: 'Community', index: '04' },
    { href: '#education', label: 'Education', index: '05' },
    { href: '#contact', label: 'Contact', index: '06' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#09090b]/90 border-b border-zinc-800/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Desktop Navigation (sm and up) */}
        <nav 
          aria-label="Main Navigation" 
          className="hidden sm:flex items-center justify-between w-full text-xs text-zinc-400 font-mono"
        >
          <div className="flex items-center gap-5 md:gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm py-1"
              >
                {link.label.toLowerCase()}
              </a>
            ))}
          </div>

          <div className="nav-social-icons flex items-center gap-3 shrink-0 pl-4">
            <a 
              href={contactInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-100 transition-colors inline-flex items-center gap-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm py-1 px-1"
              aria-label="GitHub Profile"
            >
              <span>gh</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
            <span className="text-zinc-750 text-zinc-700 select-none" aria-hidden="true">/</span>
            <a 
              href={contactInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-100 transition-colors inline-flex items-center gap-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm py-1 px-1"
              aria-label="LinkedIn Profile"
            >
              <span>in</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
          </div>
        </nav>

        {/* Mobile Header Bar */}
        <div className="flex items-center justify-between w-full sm:hidden">
          <div className="nav-social-icons flex items-center gap-2.5 text-xs font-mono text-zinc-400">
            <a 
              href={contactInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-100 transition-colors inline-flex items-center gap-0.5"
              aria-label="GitHub Profile"
            >
              <span>gh</span>
              <ArrowUpRight className="w-2.5 h-2.5 text-zinc-500" />
            </a>
            <span className="text-zinc-700 select-none" aria-hidden="true">/</span>
            <a 
              href={contactInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-100 transition-colors inline-flex items-center gap-0.5"
              aria-label="LinkedIn Profile"
            >
              <span>in</span>
              <ArrowUpRight className="w-2.5 h-2.5 text-zinc-500" />
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Width Spacious Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="sm:hidden border-b border-zinc-800 bg-[#09090b]/98 backdrop-blur-2xl px-5 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 select-none">
              Navigation
            </span>
            <span className="text-[11px] font-mono text-zinc-600">
              6 sections
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-mono text-zinc-200 hover:text-white hover:bg-zinc-900/90 active:bg-zinc-800 transition-all"
              >
                <span className="capitalize font-medium">{link.label}</span>
                <span className="text-xs font-mono text-zinc-500">[{link.index}]</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
            <a 
              href={contactInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1 hover:text-white py-2"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
            <a 
              href={contactInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1 hover:text-white py-2"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
            <a 
              href={`mailto:${contactInfo.email}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 py-2"
            >
              <span>Email</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
