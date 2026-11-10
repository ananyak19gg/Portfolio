import React, { useState } from 'react';
import { 
  Sparkles, 
  BrainCircuit, 
  Compass, 
  Users, 
  MessageSquare, 
  BookOpen, 
  GraduationCap,
  Award,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const [photoColor, setPhotoColor] = useState(false);

  const pillars = [
    {
      title: 'Analytical Mindset',
      description: 'Grounded in discrete mathematics, probability distributions, linear algebra, and statistical hypothesis testing.',
      icon: BrainCircuit,
      color: '#1D4ED8'
    },
    {
      title: 'Creative Problem-Solving',
      description: 'Synthesizing messy datasets into structured feature sets, uncovering non-obvious business anomalies and risk levers.',
      icon: Compass,
      color: '#FF5722'
    },
    {
      title: 'Leadership & Teamwork',
      description: 'Serving as Vice President of the Aerospace Club and NPTEL Student Coordinator, mentoring peers and coordinating technical symposia.',
      icon: Users,
      color: '#06B6D4'
    },
    {
      title: 'Actionable Storytelling',
      description: 'Translating model evaluation curves and complex SQL queries into intuitive executive dashboards that inspire decisive actions.',
      icon: MessageSquare,
      color: '#D8F827'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-ink pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-muted mb-1">
            <span className="w-2.5 h-2.5 bg-electric-lime border border-ink inline-block"></span>
            01 / HUMAN, BEFORE ANYTHING ELSE
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-ink tracking-tight">
            A little more about me.
          </h2>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Photograph with Editorial Treatment & Pop-Out Elements (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div 
              className="relative bg-canvas-card border-3 border-ink p-4 sm:p-5 shadow-retro-lg cursor-pointer group"
              onMouseEnter={() => setPhotoColor(true)}
              onMouseLeave={() => setPhotoColor(false)}
            >
              {/* Graphic Backdrop Block */}
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-electric-lime border-2 border-ink shadow-retro-sm -z-10 flex items-center justify-center font-mono font-bold text-xs">
                ✦ 2026
              </div>

              {/* Casual Portrait Photo */}
              <div className="relative aspect-[3/4] overflow-hidden border-2 border-ink bg-zinc-900">
                <img
                  src={photoColor ? '/images/ananya-bench-color.jpg' : '/images/ananya-bench-bw.jpg'}
                  alt="Ananya Dubey portrait"
                  className="w-full h-full object-cover object-center filter transition-all duration-500 group-hover:scale-105"
                />

                {/* Subtle photo stamp */}
                <div className="absolute bottom-3 left-3 bg-ink/90 text-canvas-card px-2.5 py-1 font-mono text-[10px] tracking-widest uppercase border border-ink">
                  ANANYA DUBEY // GWALIOR
                </div>
              </div>

              {/* Photo Caption / Note */}
              <div className="mt-3.5 flex items-center justify-between font-mono text-xs text-ink-muted">
                <span>The person behind the algorithms.</span>
                <span className="text-[10px] text-electric-orange font-bold">
                  {photoColor ? 'VIVID MODE' : 'MONOCHROME'}
                </span>
              </div>
            </div>

            {/* Quick Education Card Underneath Photo */}
            <div className="mt-6 p-4 sm:p-5 bg-canvas-card border-2 border-ink shadow-retro">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
                <GraduationCap className="w-4 h-4 text-electric-blue" />
                <span>Academic Foundation</span>
              </div>
              <h3 className="font-display font-bold text-base text-ink">
                Madhav Institute of Technology, Gwalior
              </h3>
              <p className="text-xs text-ink-muted mt-1">
                B.Tech in Mathematics & Computing (2024 – Present)
              </p>
              <div className="mt-3 inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-100 border border-emerald-400 text-xs font-mono font-bold text-emerald-900">
                <span>CURRENT CGPA: 8.2 / 10</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio, Resume Summary & Pillars (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Resume Professional Summary Callout */}
            <div className="p-5 sm:p-6 bg-canvas-card border-2 border-ink shadow-retro space-y-3">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-electric-lime border border-ink text-ink font-bold uppercase">
                RESUME SUMMARY
              </span>
              <p className="text-base sm:text-lg text-ink font-sans leading-relaxed font-medium">
                {portfolioData.summary}
              </p>
            </div>

            {/* Detailed Editorial Narratives */}
            <div className="space-y-4 text-sm sm:text-base text-ink-muted font-sans leading-relaxed">
              {portfolioData.aboutEditorial.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Four Core Pillars of Work */}
            <div className="pt-4 border-t-2 border-ink">
              <h3 className="font-display font-bold text-lg text-ink mb-4">
                How I Approach Problems
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="p-4 bg-canvas-card border border-ink hover:border-2 transition-all hover:shadow-retro-sm"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="w-7 h-7 flex items-center justify-center border border-ink"
                          style={{ backgroundColor: pillar.color }}
                        >
                          <Icon className="w-3.5 h-3.5 text-zinc-900" />
                        </div>
                        <h4 className="font-display font-bold text-sm text-ink">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="text-xs text-ink-muted leading-relaxed font-sans">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* What I'm Looking For */}
            <div className="p-4 bg-blue-50 border-2 border-electric-blue text-xs sm:text-sm text-blue-950 font-sans flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-electric-blue shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold block font-display text-base">Seeking Analytical Impact</strong>
                <span>
                  Actively interviewing for Data Analytics, Product Analytics, and Data Science internship roles where I can combine statistical rigor with business intuition.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
