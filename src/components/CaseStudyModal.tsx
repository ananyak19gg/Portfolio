import React from 'react';
import { X, ExternalLink, Github, CheckCircle, Database, Cpu, TrendingUp, Layers } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-canvas-card border-3 border-ink w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-retro-lg flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-canvas border-b-2 border-ink p-4 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2.5 py-1 bg-ink text-canvas font-bold">
              CASE STUDY // {project.number}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-ink-muted hidden sm:inline-block">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-ink hover:bg-electric-orange hover:text-white transition-all shadow-retro-sm"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-8 space-y-8">
          {/* Title and Short Description */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-electric-lime border border-ink text-xs font-mono font-bold text-ink">
                {project.status || 'Active Project'}
              </span>
              {project.inProgress && (
                <span className="px-2 py-0.5 bg-amber-100 border border-amber-300 text-xs font-mono text-amber-900">
                  Model Tuning In Progress
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-4xl font-display font-black text-ink tracking-tight mb-3">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-sans">
              {project.fullDescription}
            </p>
          </div>

          {/* Quick Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-canvas border border-ink">
              {project.metrics.map((metric, i) => (
                <div key={i} className="text-left">
                  <div className="text-[11px] font-mono text-ink-muted uppercase">{metric.label}</div>
                  <div className="text-xl sm:text-2xl font-display font-black text-ink mt-0.5">{metric.value}</div>
                  {metric.subtext && <div className="text-[10px] font-mono text-ink-faint mt-0.5">{metric.subtext}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Problem Statement */}
          <div className="border-l-4 border-electric-blue pl-4 py-1">
            <h3 className="text-xs font-mono uppercase tracking-widest text-ink-muted mb-1 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-electric-blue" />
              The Business Problem
            </h3>
            <p className="text-sm sm:text-base text-ink leading-relaxed">
              {project.caseStudy.problemStatement}
            </p>
          </div>

          {/* Dataset & Schema */}
          <div className="p-4 bg-canvas-dark/60 border border-ink">
            <h3 className="text-xs font-mono uppercase tracking-widest text-ink-muted mb-2 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-ink" />
              Dataset & Feature Architecture
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed font-mono text-xs">
              {project.caseStudy.datasetDescription}
            </p>
          </div>

          {/* Methodology */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-ink-muted mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-electric-orange" />
              Analytical & Engineering Methodology
            </h3>
            <div className="space-y-2.5">
              {project.caseStudy.methodology.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-canvas border border-ink-border text-xs sm:text-sm text-ink">
                  <span className="w-5 h-5 rounded-none bg-ink text-canvas font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights & Findings */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-ink-muted mb-3 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              Key Insights Uncovered
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.caseStudy.keyInsights.map((insight, idx) => (
                <div key={idx} className="p-3.5 bg-canvas border border-ink flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-ink leading-relaxed">{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Impact */}
          <div className="p-4 bg-emerald-50 border-2 border-emerald-600 text-emerald-950">
            <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-900 font-bold mb-1">
              Measurable Impact & Strategic Recommendations
            </h4>
            <p className="text-sm leading-relaxed">
              {project.caseStudy.businessImpact}
            </p>
          </div>

          {/* Technologies Used Strip */}
          <div className="pt-4 border-t border-ink-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-canvas border border-ink text-xs font-mono text-ink font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-canvas hover:bg-electric-blue transition-colors font-mono text-xs font-bold shadow-retro-sm"
              >
                <Github className="w-4 h-4" />
                View on GitHub
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
