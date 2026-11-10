import React, { useState } from 'react';
import { 
  Code2, 
  BarChart, 
  PieChart, 
  Brain, 
  Database, 
  Wrench, 
  Sparkles,
  Layers,
  Check
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.ElementType> = {
    'Programming & Logic': Code2,
    'Data Analysis & Manipulation': BarChart,
    'Visualization & Storytelling': PieChart,
    'Machine Learning & Modeling': Brain,
    'Databases & Analytics Engines': Database,
    'Developer Tools & Design': Wrench
  };

  const filteredCategories = activeCategory === 'All'
    ? portfolioData.skillCategories
    : portfolioData.skillCategories.filter(c => c.title === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-ink pb-5 mb-10 sm:mb-14 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-muted mb-1">
              <span className="w-2.5 h-2.5 bg-electric-lime border border-ink inline-block"></span>
              03 / SKILLS & METHODOLOGIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-ink tracking-tight">
              Tools I work with.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-3 py-1.5 border transition-all ${
                activeCategory === 'All'
                  ? 'bg-ink text-canvas-card border-ink font-bold shadow-retro-sm'
                  : 'bg-canvas-card text-ink-muted border-ink-border hover:text-ink'
              }`}
            >
              All Categories
            </button>
            {portfolioData.skillCategories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`px-3 py-1.5 border transition-all ${
                  activeCategory === cat.title
                    ? 'bg-ink text-canvas-card border-ink font-bold shadow-retro-sm'
                    : 'bg-canvas-card text-ink-muted border-ink-border hover:text-ink'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Code2;

            return (
              <div
                key={category.title}
                className="bg-canvas-card border-2 border-ink p-5 sm:p-6 shadow-retro hover:shadow-retro-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-ink-border mb-4">
                    <div className="flex items-center gap-2.5">
                      <div 
                        className="w-8 h-8 flex items-center justify-center border border-ink shadow-retro-sm"
                        style={{ backgroundColor: category.color }}
                      >
                        <Icon className="w-4 h-4 text-zinc-900" />
                      </div>
                      <h3 className="font-display font-bold text-base text-ink">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-ink-muted mb-5 leading-relaxed font-sans">
                    {category.description}
                  </p>

                  {/* Skills Cluster Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-canvas border border-ink text-xs font-mono text-ink hover:bg-ink hover:text-canvas-card transition-all cursor-default shadow-retro-sm group/pill"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-lime group-hover/pill:bg-white"></span>
                        <span className="font-semibold">{skill.name}</span>
                        {skill.level && (
                          <span className="text-[9px] uppercase text-ink-muted group-hover/pill:text-canvas-dark ml-0.5">
                            · {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom spec strip */}
                <div className="mt-6 pt-3 border-t border-ink-border flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-electric-blue font-bold flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Verified Applied
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
