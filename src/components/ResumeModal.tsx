import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-ink/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white border-3 border-ink w-full max-w-4xl max-h-[95vh] overflow-y-auto shadow-retro-lg flex flex-col font-sans text-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="sticky top-0 z-20 bg-canvas border-b-2 border-ink p-3 sm:p-4 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2.5 py-1 bg-ink text-canvas">
              CURRICULUM VITAE
            </span>
            <span className="text-xs font-mono text-ink-muted hidden sm:inline-block">
              ANANYA DUBEY // ATS FORMATTED
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-ink text-canvas hover:bg-electric-blue transition-colors font-mono text-xs font-bold shadow-retro-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / SAVE PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 border border-ink hover:bg-electric-orange hover:text-white transition-colors"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content (Recreated cleanly from supplied LaTeX source) */}
        <div className="p-6 sm:p-12 space-y-6 text-zinc-800 text-xs sm:text-sm leading-normal max-w-3xl mx-auto w-full print:p-0">
          {/* Header */}
          <div className="text-center border-b border-zinc-400 pb-4">
            <h1 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-zinc-950 uppercase">
              {portfolioData.name}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-zinc-600 mt-2 font-mono">
              <a href={`tel:${portfolioData.phone}`} className="hover:text-blue-700">
                {portfolioData.phone}
              </a>
              <span>|</span>
              <a href={`mailto:${portfolioData.email}`} className="hover:text-blue-700">
                {portfolioData.email}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-blue-700 font-semibold mt-1">
              <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                <Linkedin className="w-3 h-3" /> LinkedIn
              </a>
              <span>|</span>
              <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                <Github className="w-3 h-3" /> GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed text-justify">
              {portfolioData.summary}
            </p>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-950 border-b border-zinc-300 pb-1 mb-3">
              SELECTED PROJECTS
            </h2>

            <div className="space-y-4">
              {portfolioData.projects.map((p) => (
                <div key={p.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-zinc-950">
                      {p.title}
                      {p.inProgress && (
                        <span className="text-[10px] font-mono text-amber-700 ml-2 font-normal">
                          [In Development]
                        </span>
                      )}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500 italic">
                      {p.technologies.join(', ')}
                    </span>
                  </div>

                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-700">
                    {p.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1 text-xs text-zinc-800">
              <p><strong>Languages:</strong> Python, SQL, C++</p>
              <p><strong>Data Analysis:</strong> Pandas, NumPy, Excel, Data Cleaning, Exploratory Data Analysis, Data Modeling, Statistical Analysis</p>
              <p><strong>Visualization:</strong> Power BI, Matplotlib, Seaborn, Dashboard Development, Data Storytelling</p>
              <p><strong>Machine Learning:</strong> Supervised Learning, Regression, Feature Engineering, Model Evaluation, Gradient Descent, Regularization</p>
              <p><strong>Databases & Analytics:</strong> MySQL, PostgreSQL, Google Analytics 4 (GA4), Scikit-learn</p>
              <p><strong>Tools:</strong> Git, GitHub, Figma, Canva</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              EDUCATION
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
              <span className="font-bold text-zinc-950">
                Madhav Institute of Technology, Gwalior
              </span>
              <span className="text-xs font-mono text-zinc-600 italic">
                September 2024 – Present
              </span>
            </div>
            <div className="flex justify-between text-xs text-zinc-700">
              <span>Bachelor of Technology in Mathematics and Computing</span>
              <strong className="font-mono">CGPA: 8.2 / 10</strong>
            </div>
          </div>

          {/* Leadership & Achievements */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
              LEADERSHIP & ACHIEVEMENTS
            </h2>
            <div className="space-y-2 text-xs text-zinc-700">
              <div>
                <div className="flex justify-between font-bold text-zinc-900">
                  <span>Vice President, Aerospace Club</span>
                  <span className="italic font-normal">MITS Gwalior</span>
                </div>
                <p>Promoted from Technical Team Member to Vice President.</p>
              </div>

              <div>
                <div className="font-bold text-zinc-900">
                  1st Runner-Up, BlackBox Protocol National-Level Hackathon
                </div>
                <p>Built <strong>NyayaSarthi</strong>, an AI-powered Court Order Execution System that converts unstructured court judgments into structured, trackable government action items.</p>
              </div>

              <div>
                <div className="font-bold text-zinc-900">
                  NPTEL Student Coordinator, Mathematics & Computing Branch
                </div>
                <p>Selected as the branch-level NPTEL Student Coordinator.</p>
              </div>

              <div>
                <div className="font-bold text-zinc-900">
                  Kaggle Certifications:
                </div>
                <p>Pandas, Data Visualization, Intro to Machine Learning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
