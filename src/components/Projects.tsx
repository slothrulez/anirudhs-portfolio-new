import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ArrowUpRight, Terminal } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { SectionHeader } from './SectionHeader';

export function Projects() {
  const [activeTab, setActiveTab] = useState<Record<string, 'overview' | 'architecture'>>({});

  const toggleTab = (projectId: string, tab: 'overview' | 'architecture') => {
    setActiveTab(prev => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className="py-16 scroll-mt-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.4 }}
      >
        <SectionHeader
          number="03"
          title="Featured Projects"
          count={projects.length}
          label="repos"
          subtitle="Active repositories & tools built on GitHub (slothrulez)."
        />

        {/* Project List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              activeTab={activeTab[project.id] || 'overview'}
              onTabChange={(tab) => toggleTab(project.id, tab)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

interface ProjectItemProps {
  key?: string;
  project: Project;
  index: number;
  activeTab: 'overview' | 'architecture';
  onTabChange: (tab: 'overview' | 'architecture') => void;
}

function ProjectItem({ project, index, activeTab, onTabChange }: ProjectItemProps) {
  const hasPipeline = Boolean(project.pipelineSteps && project.pipelineSteps.length > 0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="py-8 first:pt-0 last:pb-0 space-y-4"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            <h3 className="text-lg font-medium tracking-tight text-zinc-100">
              {project.title}
            </h3>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-200 transition-colors p-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm"
                aria-label={`View ${project.title} repository on GitHub`}
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <p className="text-xs font-mono text-zinc-400">
            {project.tagline}
          </p>
        </div>

        {/* View toggle (Subtle text buttons, no chunky pills) */}
        {hasPipeline && (
          <div className="flex items-center gap-3 font-mono text-xs self-start sm:self-auto">
            <button
              onClick={() => onTabChange('overview')}
              className={`transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm ${
                activeTab === 'overview'
                  ? 'text-zinc-100 underline underline-offset-4 decoration-zinc-500'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              overview
            </button>
            <span className="text-zinc-700 select-none">/</span>
            <button
              onClick={() => onTabChange('architecture')}
              className={`transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm ${
                activeTab === 'architecture'
                  ? 'text-zinc-100 underline underline-offset-4 decoration-zinc-500'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              pipeline
            </button>
          </div>
        )}
      </div>

      {/* Dynamic View Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' || !hasPipeline ? (
          <motion.div
            key="overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.description}
            </p>

            {project.details && project.details.length > 0 && (
              <ul className="space-y-1.5 pt-1 text-xs text-zinc-400 leading-relaxed">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-zinc-600 select-none">·</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="architecture"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pt-1"
          >
            <div className="border border-zinc-800/80 bg-zinc-950/60 p-4 font-mono text-xs rounded-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800/60 text-zinc-500 text-[11px]">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{project.pipelineFile || 'pipeline.ts'}</span>
                </span>
                <span>{project.pipelineTitle || 'Architecture Flow'}</span>
              </div>

              <div className="space-y-2 text-xs">
                {project.pipelineSteps?.map((stepItem, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                    <span className="text-zinc-300 font-medium shrink-0">{stepItem.step}</span>
                    <span className="text-zinc-500">→ {stepItem.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tech Stack (Plain inline text separated by ·, no pill chips) */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <p className="text-zinc-400">
          {project.tech.join(' · ')}
        </p>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm"
          >
            <span>source</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
