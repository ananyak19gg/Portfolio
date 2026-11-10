import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section className="py-16 sm:py-24 bg-canvas-dark/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b-2 border-ink pb-4 mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-muted mb-1">
            <span className="w-2.5 h-2.5 bg-electric-blue border border-ink inline-block"></span>
            06 / ACADEMIC BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-ink tracking-tight">
            Education.
          </h2>
        </div>

        {/* Big Editorial Education Card */}
        <div className="bg-canvas-card border-3 border-ink p-6 sm:p-10 shadow-retro-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column (8 Cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="px-3 py-1 bg-ink text-canvas-card font-bold">
                  UNDERGRADUATE DEGREE
                </span>
                <span className="text-ink-muted flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {education.period}
                </span>
                <span className="text-ink-muted flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-electric-orange" />
                  {education.location}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-black text-ink tracking-tight">
                {education.institution}
              </h3>

              <div className="text-base sm:text-lg font-mono font-bold text-electric-blue">
                {education.degree}
              </div>

              <div className="space-y-2 pt-2 border-t border-ink-border">
                {education.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted font-sans leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Prominent CGPA Badge (4 Cols) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-full max-w-[240px] p-6 bg-canvas border-3 border-ink shadow-retro text-center space-y-2">
                <div className="text-xs font-mono font-bold uppercase text-ink-muted">
                  CUMULATIVE CGPA
                </div>
                <div className="text-5xl sm:text-6xl font-display font-black text-ink tracking-tight">
                  8.2
                </div>
                <div className="text-xs font-mono text-ink-muted">
                  Scale of 10.0
                </div>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 bg-electric-lime border border-ink text-xs font-mono font-bold text-ink">
                    FIRST CLASS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
