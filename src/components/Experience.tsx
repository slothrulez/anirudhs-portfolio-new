import { motion } from 'motion/react';
import { experiences } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export function Experience() {
  return (
    <section id="experience" className="py-16 scroll-mt-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.4 }}
      >
        <SectionHeader
          number="02"
          title="Experience & Roles"
          count={experiences.length}
          label="roles"
          subtitle="Engineering internships, program initiatives, and community leadership."
        />

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium text-zinc-100">
                    {exp.role}
                  </h3>
                  {exp.isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" aria-hidden="true"></span>
                  )}
                </div>
                <span className="text-xs font-mono text-zinc-500 shrink-0">
                  {exp.period}
                </span>
              </div>

              <div className="text-xs font-mono text-zinc-400 flex flex-wrap items-center gap-2">
                <span>{exp.organization}</span>
                {exp.location && (
                  <>
                    <span className="text-zinc-700 select-none">/</span>
                    <span className="text-zinc-500">{exp.location}</span>
                  </>
                )}
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed pt-0.5">
                {exp.description}
              </p>

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="space-y-1.5 pt-1.5 text-xs text-zinc-400 leading-relaxed">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-zinc-600 select-none">·</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
