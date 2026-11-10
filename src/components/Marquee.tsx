import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'MATHEMATICS & COMPUTING',
    'DATA ANALYTICS',
    'EXPLORATORY DATA ANALYSIS',
    'MACHINE LEARNING',
    'BUSINESS INTELLIGENCE',
    'SQL DATA MODELING',
    'FORENSIC MARGIN AUDIT',
    'OPENCV COMPUTER VISION',
    'POWER BI DASHBOARDS',
    'FEATURE ENGINEERING',
    'PREDICTIVE CHURN ANALYSIS',
  ];

  return (
    <div className="relative border-y-2 border-ink bg-ink text-canvas py-3 overflow-hidden select-none">
      <div className="flex w-max animate-marquee font-mono text-xs sm:text-sm font-bold tracking-widest uppercase">
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="hover:text-electric-lime transition-colors">{item}</span>
              <span className="text-electric-lime">✦</span>
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {items.map((item, idx) => (
            <React.Fragment key={`repeat-${idx}`}>
              <span className="hover:text-electric-lime transition-colors">{item}</span>
              <span className="text-electric-lime">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
