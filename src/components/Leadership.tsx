import React from 'react';
import { Award, Users, Trophy, BookOpen, Star, Calendar, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  const achievementIcons: Record<string, React.ElementType> = {
    'aerospace-club': Users,
    'blackbox-hackathon': Trophy,
    'nptel-coordinator': BookOpen,
  };

  return (
    <section id="leadership" className="py-20 sm:py-28 bg-canvas-dark/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b-2 border-ink pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-muted mb-1">
            <span className="w-2.5 h-2.5 bg-electric-pink border border-ink inline-block"></span>
            04 / INITIATIVE, COLLABORATION & IMPACT
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-ink tracking-tight">
            Beyond academics.
          </h2>
        </div>

        {/* Editorial Timeline & Cards */}
        <div className="space-y-8">
          {portfolioData.achievements.map((item, idx) => {
            const Icon = achievementIcons[item.id] || Award;

            return (
              <div
                key={item.id}
                className="bg-canvas-card border-3 border-ink p-6 sm:p-8 shadow-retro-lg hover:shadow-retro transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Role & Organization (5 Cols) */}
                  <div className="lg:col-span-5 space-y-2">
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span className="px-2.5 py-0.5 bg-electric-lime border border-ink text-ink font-bold">
                        {item.tag}
                      </span>
                      <span className="text-ink-muted flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-black text-ink tracking-tight">
                      {item.role}
                    </h3>

                    <div className="text-sm font-mono font-bold text-electric-blue">
                      {item.organization}
                    </div>

                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans pt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Column: Concrete Highlights & Bullet Points (7 Cols) */}
                  <div className="lg:col-span-7 bg-canvas border border-ink p-5 space-y-3 font-sans text-xs sm:text-sm">
                    <div className="font-mono text-xs font-bold text-ink uppercase tracking-wider pb-1 border-b border-ink-border">
                      KEY DELIVERABLES & OUTCOMES
                    </div>

                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 leading-relaxed text-ink">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-orange mt-2 shrink-0"></span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
