import React, { useState, useEffect } from 'react';
import { 
  ArrowDownRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  TrendingUp, 
  Terminal,
  Layers,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % portfolioData.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 sm:pb-24 flex items-center overflow-hidden bg-grid-pattern">
      {/* Background Decorative Graphic Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-electric-lime/20 blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-electric-blue/15 blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Editorial Top Metadata Ribbon */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-ink pb-3 mb-8 sm:mb-12 text-xs font-mono gap-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-ink text-canvas-card font-bold">
              PORTFOLIO // 2026
            </span>
            <span className="text-ink-muted hidden sm:inline-block">
              MATHEMATICS & COMPUTING | B.TECH
            </span>
          </div>

          <div className="flex items-center gap-4 text-ink-muted">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-electric-orange" />
              Gwalior, MP, India
            </span>
            <span className="hidden md:inline-block">·</span>
            <span className="hidden md:inline-block font-semibold text-ink">
              MITS Gwalior (8.2 CGPA)
            </span>
          </div>
        </div>

        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Expressive Typography & Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Internship Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-canvas-card border-2 border-ink shadow-retro-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-ink uppercase">
                {portfolioData.availability}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-black text-ink tracking-tight leading-[1.05]">
                Hi, I'm <span className="underline decoration-electric-lime decoration-4 underline-offset-8">Ananya</span>.
              </h1>

              {/* Dynamic Animated Role */}
              <div className="h-12 sm:h-16 flex items-center">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-ink text-canvas-card font-mono text-base sm:text-2xl font-bold tracking-tight shadow-retro-sm transition-all">
                  <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-electric-lime shrink-0" />
                  <span className="text-electric-lime">/</span>
                  <span className="text-white">
                    {portfolioData.roles[currentRoleIndex]}
                  </span>
                </div>
              </div>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-xl text-ink-muted font-sans font-normal leading-relaxed max-w-2xl">
              I'm a <strong className="text-ink font-semibold">Mathematics and Computing undergraduate</strong> passionate about data, technology and solving real-world problems through analytical thinking and creative execution.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-ink text-canvas-card font-mono text-sm font-bold tracking-wider uppercase hover:bg-electric-blue transition-all shadow-retro hover:translate-x-0.5 hover:translate-y-0.5"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-canvas-card text-ink border-2 border-ink font-mono text-sm font-bold tracking-wider uppercase hover:bg-canvas-dark transition-all shadow-retro hover:translate-x-0.5 hover:translate-y-0.5"
              >
                <Download className="w-4 h-4 text-electric-orange" />
                <span>DOWNLOAD RÉSUMÉ</span>
              </button>

              {/* Social Link Quick Badges */}
              <div className="flex items-center gap-2 pl-1 sm:pl-2">
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 bg-canvas-card border-2 border-ink hover:bg-electric-lime hover:text-ink transition-colors shadow-retro-sm"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 bg-canvas-card border-2 border-ink hover:bg-electric-blue hover:text-white transition-colors shadow-retro-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${portfolioData.email}`}
                  aria-label="Send Email"
                  className="p-3 bg-canvas-card border-2 border-ink hover:bg-electric-pink hover:text-white transition-colors shadow-retro-sm"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Spec Highlights */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-ink/20 font-mono text-xs">
              <div>
                <span className="text-ink-muted block text-[10px] uppercase">Specialization</span>
                <span className="font-bold text-ink">Data Analytics & ML</span>
              </div>
              <div>
                <span className="text-ink-muted block text-[10px] uppercase">Core Tools</span>
                <span className="font-bold text-ink">Python · SQL · Power BI</span>
              </div>
              <div>
                <span className="text-ink-muted block text-[10px] uppercase">Leadership</span>
                <span className="font-bold text-ink">VP Aerospace Club</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pop-Out Editorial Portrait Composition (5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
            <div 
              className="relative w-full max-w-md aspect-[4/5] flex items-end justify-center select-none"
              onMouseEnter={() => setIsPhotoHovered(true)}
              onMouseLeave={() => setIsPhotoHovered(false)}
            >
              {/* Layer 1: Geometric Color Blocks Behind Subject */}
              {/* Electric Blue Arch */}
              <div className="absolute top-8 left-4 right-8 bottom-4 bg-electric-blue rounded-t-[120px] border-3 border-ink shadow-retro-lg transform -rotate-2 transition-transform duration-500"></div>
              
              {/* Acid Lime Geometric Block */}
              <div className="absolute -top-3 -right-3 w-28 h-28 bg-electric-lime border-2 border-ink shadow-retro flex flex-col items-center justify-center rotate-6 z-0">
                <span className="text-[10px] font-mono font-bold uppercase text-ink">MITS GWL</span>
                <span className="text-2xl font-display font-black text-ink">8.2</span>
                <span className="text-[9px] font-mono text-ink">CGPA</span>
              </div>

              {/* Orange Geometric Accents */}
              <div className="absolute bottom-6 -left-4 px-3 py-1.5 bg-electric-orange text-white border-2 border-ink shadow-retro font-mono text-xs font-bold -rotate-3 z-20">
                ★ DATA & LOGIC
              </div>

              {/* Layer 2: Editorial Cutout Portrait */}
              {/* When hovered, transforms smoothly to full natural color; defaults to crisp high-contrast B&W */}
              <div className="relative z-10 w-full h-full flex items-end justify-center overflow-visible">
                <img
                  src={isPhotoHovered ? '/images/ananya-cutout-color.png' : '/images/ananya-cutout-bw.png'}
                  alt="Ananya Dubey portrait"
                  className="max-h-[96%] w-auto object-contain object-bottom filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:scale-[1.02]"
                />
              </div>

              {/* Layer 3: Floating Metadata Tag Card in Foreground */}
              <div className="absolute -bottom-4 right-2 sm:right-6 z-20 bg-canvas-card border-2 border-ink p-3 shadow-retro max-w-[210px]">
                <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted mb-1">
                  <span>SUBJECT_ID</span>
                  <span className="text-emerald-600 font-bold">ONLINE</span>
                </div>
                <div className="text-xs font-mono font-bold text-ink">
                  ANANYA DUBEY
                </div>
                <div className="text-[10px] font-mono text-ink-muted mt-0.5">
                  Hover photo to toggle color / monochrome mode
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
