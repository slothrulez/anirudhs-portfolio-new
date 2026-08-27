import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 scroll-mt-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <SectionHeader
          number="07"
          title="Contact"
          label="available"
          subtitle="I’m always open to conversations, open-source ideas, or tooling experiments. Feel free to reach out directly."
        />

        {/* Direct Contact Channels */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 px-3 sm:px-3.5 py-2 rounded bg-zinc-100 text-zinc-950 hover:bg-white text-xs font-mono font-medium transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 cursor-pointer shadow-sm max-w-full"
            aria-label="Copy email address to clipboard"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="text-emerald-700 font-semibold truncate">Email copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-700 shrink-0" />
                <span className="truncate">{contactInfo.email}</span>
                <span className="text-zinc-500 text-[10px] pl-1 font-normal shrink-0 hidden sm:inline">[copy]</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-3.5 py-2 rounded border border-zinc-800 bg-transparent text-xs font-mono text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
            title="Open default email application"
          >
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span>Open in Mail app</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500 shrink-0" />
          </a>
        </div>

        {/* Links row */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-400 pt-2">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
