import { motion } from 'motion/react';
import { educationList, certifications } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export function Education() {
  return (
    <section id="education" className="py-16 scroll-mt-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.4 }}
        className="space-y-12"
      >
        <SectionHeader
          number="06"
          title="Education & Credentials"
          count={certifications.length}
          label="certifications"
          subtitle="Academic foundations and industry-accredited program credentials."
        />

        {/* Education Subsection */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Degree & Study
          </h3>

          <div className="space-y-4">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-6"
              >
                <div className="space-y-0.5">
                  <h4 className="text-sm font-medium text-zinc-100">
                    {edu.institution}
                  </h4>
                  <p className="text-xs font-mono text-zinc-400">
                    {edu.degree}
                  </p>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 shrink-0">
                  {edu.location && <span>{edu.location}</span>}
                  {edu.location && <span className="text-zinc-700 select-none">/</span>}
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Subsection */}
        <div className="space-y-4 pt-2">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Verified Certifications
            </h3>
            <span className="text-xs font-mono text-zinc-500 shrink-0">
              {certifications.length} completed
            </span>
          </div>

          <div className="space-y-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="space-y-1.5"
              >
                <div className="space-y-0.5">
                  <h4 className="text-sm font-medium text-zinc-100">
                    {cert.name}
                  </h4>
                  <p className="text-xs font-mono text-zinc-400">
                    {cert.issuer} <span className="text-zinc-700 select-none">/</span> {cert.field}
                  </p>
                </div>

                {cert.skills && cert.skills.length > 0 && (
                  <p className="text-xs font-mono text-zinc-500">
                    {cert.skills.join(' · ')}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
