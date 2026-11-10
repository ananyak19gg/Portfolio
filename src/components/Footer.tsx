import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Clock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in IST (Asia/Kolkata)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options) + ' IST');
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-canvas border-t-3 border-ink font-sans select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top Big Footer Brand Typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-canvas-dark/20 pb-8 mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-electric-lime uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-electric-lime animate-ping"></span>
              PORTFOLIO 2026 // ANANYA DUBEY
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white">
              ananya<span className="text-electric-blue">.</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-2">
              Mathematics & Computing · Madhav Institute of Technology, Gwalior
            </p>
          </div>

          {/* Live Gwalior Clock & Status */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono">
            <div className="p-3 bg-zinc-900 border border-zinc-700 space-y-1">
              <div className="text-[10px] text-zinc-400 uppercase flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-electric-lime" />
                GWALIOR, INDIA // LOCAL TIME
              </div>
              <div className="text-base font-bold text-white tracking-wider">
                {currentTime || '09:30:00 PM IST'}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-3 bg-canvas text-ink hover:bg-electric-lime font-mono text-xs font-bold transition-all shadow-retro-sm"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Metadata & Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 gap-4">
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href={`mailto:${portfolioData.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>

          <div className="text-center sm:text-right text-[11px] text-zinc-400">
            Crafted with React, TypeScript, Tailwind & Framer Motion. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
