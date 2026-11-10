import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
      scrolled 
        ? 'bg-canvas/95 backdrop-blur-md border-b-2 border-ink py-3 shadow-retro-sm' 
        : 'bg-transparent border-b border-ink/10 py-4 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 bg-ink text-canvas-card flex items-center justify-center font-display font-black text-sm tracking-tight border border-ink group-hover:bg-electric-lime group-hover:text-ink transition-colors shadow-retro-sm">
            AD
          </span>
          <div className="flex flex-col">
            <span className="font-display font-black text-lg sm:text-xl text-ink tracking-tight">
              ananya<span className="text-electric-blue">.</span>
            </span>
            <span className="text-[9px] font-mono uppercase tracking-widest text-ink-muted -mt-1 hidden sm:block">
              Math & Computing
            </span>
          </div>
        </a>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-canvas-card border border-ink px-3 py-1.5 shadow-retro-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 text-xs font-mono font-medium text-ink hover:text-white hover:bg-ink transition-all uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA / Socials */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Internship Status Badge */}
          <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-300 text-[11px] font-mono text-emerald-900">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>OPEN TO WORK</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-1">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 border border-ink bg-canvas-card hover:bg-electric-lime hover:text-ink transition-colors shadow-retro-sm"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 border border-ink bg-canvas-card hover:bg-electric-blue hover:text-white transition-colors shadow-retro-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-ink text-canvas-card text-xs font-mono font-bold hover:bg-electric-blue transition-colors shadow-retro-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RÉSUMÉ</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 bg-ink text-canvas-card text-[11px] font-mono font-bold shadow-retro-sm"
          >
            RÉSUMÉ
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border border-ink bg-canvas-card shadow-retro-sm"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-canvas border-b-2 border-ink px-4 py-6 space-y-4 shadow-retro-lg animate-fadeIn">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-100 border border-emerald-400 text-xs font-mono text-emerald-950">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>CURRENTLY OPEN TO INTERNSHIPS</span>
          </div>

          <div className="flex flex-col space-y-2 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 bg-canvas-card border border-ink-border hover:bg-ink hover:text-canvas transition-colors uppercase tracking-wider font-semibold"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-ink-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-ink bg-canvas-card"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-ink bg-canvas-card"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
              className="px-4 py-2 bg-ink text-canvas font-mono text-xs font-bold"
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
