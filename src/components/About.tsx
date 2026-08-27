import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export function About() {
  return (
    <section id="about" className="py-16 scroll-mt-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.4 }}
      >
        <SectionHeader 
          number="01" 
          title="About" 
        />
        <p className="text-base text-zinc-300 leading-relaxed max-w-2xl font-normal">
          {personalInfo.about}
        </p>
      </motion.div>
    </section>
  );
}
