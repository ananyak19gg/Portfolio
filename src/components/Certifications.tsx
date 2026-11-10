import React, { useState } from 'react';
import { Award, ExternalLink, CheckCircle, PlusCircle, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Certification } from '../types';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 sm:py-28 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-ink pb-5 mb-12 sm:mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-muted mb-1">
              <span className="w-2.5 h-2.5 bg-electric-lime border border-ink inline-block"></span>
              05 / NEVER DONE LEARNING
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-ink tracking-tight">
              Certifications & Continuous Learning.
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-ink-muted max-w-md">
            Verified technical coursework spanning exploratory analysis, statistical visualization, and foundational machine learning algorithms.
          </p>
        </div>

        {/* Modular Grid of Clickable Button-Style Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="bg-canvas-card border-3 border-ink p-6 shadow-retro hover:shadow-retro-lg hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Platform Badge & Verification */}
                <div className="flex items-center justify-between pb-3 border-b border-ink-border mb-4">
                  <span className="px-2.5 py-1 bg-electric-blue text-white font-mono text-xs font-bold shadow-retro-sm">
                    {cert.issuer}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                <h3 className="text-xl font-display font-black text-ink tracking-tight group-hover:text-electric-blue transition-colors mb-2">
                  {cert.title}
                </h3>

                <div className="text-xs font-mono text-ink-muted mb-4">
                  Credential Code: <span className="text-ink font-semibold">{cert.badgeCode}</span>
                </div>

                {/* Covered topics tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 bg-canvas border border-ink-border text-[11px] font-mono text-ink"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button Bar */}
              <div className="pt-3 border-t border-ink-border flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-ink group-hover:text-electric-blue flex items-center gap-1">
                  View Credential Details
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
                <span className="text-[10px] font-mono text-ink-muted">
                  Click to inspect
                </span>
              </div>
            </div>
          ))}

          {/* Modular "Add More" Slot */}
          <div className="bg-canvas-card/60 border-2 border-dashed border-ink/40 p-6 flex flex-col justify-between items-center text-center hover:border-ink hover:bg-canvas-card transition-all">
            <div className="my-auto py-4">
              <PlusCircle className="w-8 h-8 text-ink-muted mx-auto mb-3" />
              <h4 className="font-display font-bold text-base text-ink mb-1">
                Modular Certification Registry
              </h4>
              <p className="text-xs text-ink-muted max-w-xs font-mono leading-relaxed">
                Easily append new credentials in <code className="bg-canvas px-1 py-0.5 border border-ink-border">portfolioData.ts</code> as completed.
              </p>
            </div>
            <div className="w-full text-center py-2 bg-canvas border border-ink-border font-mono text-[11px] text-ink-muted">
              CONFIGURABLE EXTENSION SLOT
            </div>
          </div>
        </div>
      </div>

      {/* Certification Details Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-canvas-card border-3 border-ink w-full max-w-md p-6 sm:p-8 shadow-retro-lg space-y-5 font-sans"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b-2 border-ink">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-electric-blue" />
                <span className="font-mono text-xs font-bold uppercase text-ink">
                  CERTIFICATE VERIFICATION
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-xs font-mono px-2 py-1 border border-ink hover:bg-electric-orange hover:text-white"
              >
                CLOSE [ESC]
              </button>
            </div>

            <div>
              <div className="text-xs font-mono text-ink-muted uppercase">{selectedCert.issuer} Coursework</div>
              <h3 className="text-2xl font-display font-black text-ink mt-0.5">
                {selectedCert.title}
              </h3>
            </div>

            <div className="p-3 bg-canvas border border-ink font-mono text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-ink-muted">Status:</span>
                <span className="text-emerald-700 font-bold">Authenticated</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-muted">Identifier:</span>
                <span className="text-ink font-bold">{selectedCert.badgeCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-muted">Candidate:</span>
                <span className="text-ink font-bold">{portfolioData.name}</span>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-ink-muted uppercase mb-2">Syllabus Competencies:</div>
              <div className="flex flex-wrap gap-1.5">
                {selectedCert.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2.5 py-1 bg-canvas border border-ink text-xs font-mono text-ink"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {selectedCert.url && (
              <div className="pt-2">
                <a
                  href={selectedCert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-ink text-canvas font-mono text-xs font-bold hover:bg-electric-blue transition-colors shadow-retro-sm"
                >
                  <span>OPEN ISSUING PLATFORM</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
