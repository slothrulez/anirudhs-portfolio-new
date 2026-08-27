import { motion } from 'motion/react';
import { explorationTopics } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export function CurrentlyExploring() {
  return (
    <section id="exploring" className="py-16 scroll-mt-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.4 }}
      >
        <SectionHeader
          number="04"
          title="Currently Exploring"
          count={explorationTopics.length}
          label="areas"
          subtitle="Areas I am actively experimenting with and breaking down to understand better."
        />

        {/* 2-column layout directly on canvas without card boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          {explorationTopics.map((topic, idx) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="space-y-2"
            >
              <h3 className="text-sm font-medium text-zinc-100">
                {topic.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {topic.description}
              </p>

              {topic.tools && topic.tools.length > 0 && (
                <p className="pt-1 text-xs font-mono text-zinc-500">
                  {topic.tools.join(' · ')}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
