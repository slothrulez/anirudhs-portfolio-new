import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { personalInfo, contactInfo } from '../data/portfolioData';
import { MultilingualHeadline } from './MultilingualHeadline';

export function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="space-y-6"
      >
        {/* Clean Meta Row (No Pill Wrappers) */}
        <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" aria-hidden="true"></span>
            <span>{personalInfo.status}</span>
          </div>
          <span className="text-zinc-600 select-none">·</span>
          <span className="text-zinc-400">{personalInfo.location}</span>
        </div>

        {/* Heading with Multilingual Transition Engine & Bio */}
        <div className="space-y-4">
          <MultilingualHeadline />

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
            {personalInfo.identity}
          </p>
        </div>

        {/* Action Controls */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-medium rounded bg-zinc-100 text-zinc-950 hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
          >
            <span>View Projects</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-medium rounded border border-zinc-800 bg-transparent text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>

          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-medium rounded border border-zinc-800 bg-transparent text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
