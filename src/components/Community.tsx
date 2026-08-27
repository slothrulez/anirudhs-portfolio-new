import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { communityInvolvements } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export function Community() {
  return (
    <section id="community" className="py-16 scroll-mt-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.4 }}
      >
        <SectionHeader
          number="05"
          title="Community & Involvement"
          count={communityInvolvements.length}
          label="initiatives"
          subtitle="Hackathons, open-source initiatives, and local developer spaces."
        />

        <div className="space-y-8">
          {communityInvolvements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="space-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium text-zinc-100">
                    {item.organization}
                  </span>
                  <span className="text-xs font-mono text-zinc-600 select-none">—</span>
                  <span className="text-xs font-mono text-zinc-300">
                    {item.role}
                  </span>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm inline-flex items-center"
                      aria-label={`Visit ${item.organization} website`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                {item.period && (
                  <span className="text-xs font-mono text-zinc-500 shrink-0">
                    {item.period}
                  </span>
                )}
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed pt-0.5">
                {item.roleDescription}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
