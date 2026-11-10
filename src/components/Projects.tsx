import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  Eye, 
  CheckCircle2, 
  Clock, 
  Layers,
  ChevronDown,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Project } from '../types';
import { ChurnDashboard } from './churn/ChurnDashboard';
import { InterviewPreview } from './InterviewPreview';
import { SalesPreview } from './SalesPreview';
import { LivabilityPreview } from './LivabilityPreview';
import { CaseStudyModal } from './CaseStudyModal';

export const Projects: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [isChurnExpanded, setIsChurnExpanded] = useState<boolean>(true);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-canvas-dark/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-ink pb-5 mb-12 sm:mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-muted mb-1">
              <span className="w-2.5 h-2.5 bg-electric-orange border border-ink inline-block"></span>
              02 / IDEAS, TESTED IN THE REAL WORLD
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-ink tracking-tight">
              Selected Work.
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-ink-muted max-w-md">
            Four end-to-end analytical initiatives spanning predictive modeling, computer vision telemetry, forensic SQL audits, and multi-source exploratory data wrangling.
          </p>
        </div>

        {/* Project 01: Featured Star Project — Customer Churn Analytics */}
        {portfolioData.projects[0] && (
          <div className="mb-16 sm:mb-24">
            <div className="bg-canvas-card border-3 border-ink shadow-retro-lg p-5 sm:p-8">
              {/* Project Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b-2 border-ink gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs">
                    <span className="px-2.5 py-0.5 bg-ink text-canvas-card font-bold">
                      PROJECT 01
                    </span>
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 font-bold flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-700" />
                      CURRENTLY IN DEVELOPMENT
                    </span>
                    <span className="text-ink-muted uppercase">
                      {portfolioData.projects[0].category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-display font-black text-ink tracking-tight">
                    {portfolioData.projects[0].title}
                  </h3>
                  <p className="text-sm sm:text-base text-ink-muted mt-2 max-w-3xl leading-relaxed">
                    {portfolioData.projects[0].shortDescription}
                  </p>
                </div>

                {/* Right Action Buttons */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
                  <button
                    onClick={() => setSelectedCaseStudy(portfolioData.projects[0])}
                    className="flex items-center gap-2 px-4 py-2 bg-canvas border-2 border-ink font-mono text-xs font-bold text-ink hover:bg-canvas-dark transition-all shadow-retro-sm"
                  >
                    <Eye className="w-4 h-4 text-electric-blue" />
                    <span>CASE STUDY</span>
                  </button>

                  <a
                    href={portfolioData.projects[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-ink text-canvas font-mono text-xs font-bold hover:bg-electric-blue transition-colors shadow-retro-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>GITHUB REPO</span>
                  </a>
                </div>
              </div>

              {/* Technologies strip */}
              <div className="flex flex-wrap items-center gap-1.5 mb-6">
                <span className="text-xs font-mono text-ink-muted mr-2">TECH STACK:</span>
                {portfolioData.projects[0].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-canvas border border-ink text-xs font-mono font-semibold text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Embedded Live Interactive Churn Dashboard */}
              <div className="mt-4">
                <div className="flex items-center justify-between pb-3 mb-3 text-xs font-mono text-ink-muted">
                  <span className="flex items-center gap-1.5 font-bold text-ink">
                    <Sparkles className="w-4 h-4 text-electric-lime" />
                    INTERACTIVE ANALYTICS PROTOTYPE
                  </span>
                  <span>Click tabs to explore synthetic distributions & ML metrics</span>
                </div>
                <ChurnDashboard />
              </div>
            </div>
          </div>
        )}

        {/* Projects 02, 03, 04 Showcase Cards */}
        <div className="space-y-16">
          {portfolioData.projects.slice(1).map((project) => (
            <div
              key={project.id}
              className="bg-canvas-card border-3 border-ink shadow-retro-lg p-5 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Description Column (5 Cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="px-2.5 py-0.5 bg-ink text-canvas-card font-bold">
                      PROJECT {project.number}
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold">
                      {project.status || 'COMPLETED'}
                    </span>
                  </div>

                  <div className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                    {project.category}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-black text-ink tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans">
                    {project.shortDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-ink-border">
                    {project.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-ink leading-relaxed font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-canvas border border-ink text-xs font-mono text-ink font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-canvas font-mono text-xs font-bold hover:bg-electric-blue transition-colors shadow-retro-sm"
                    >
                      <Eye className="w-4 h-4" />
                      <span>EXPLORE CASE STUDY</span>
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-canvas border-2 border-ink font-mono text-xs font-bold text-ink hover:bg-canvas-dark transition-colors shadow-retro-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>SOURCE CODE</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Interactive Preview Column (7 Cols) */}
                <div className="lg:col-span-7">
                  {project.interactiveType === 'interview' && <InterviewPreview />}
                  {project.interactiveType === 'sales' && <SalesPreview />}
                  {project.interactiveType === 'livability' && <LivabilityPreview />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
