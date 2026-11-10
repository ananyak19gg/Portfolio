import React, { useState } from 'react';
import { Compass, Shield, HeartPulse, DollarSign, BarChart2 } from 'lucide-react';

interface CityScore {
  name: string;
  tier: string;
  costOfLivingIndex: number;
  safetyIndex: number;
  healthcareIndex: number;
  compositeLivability: number;
}

const SAMPLE_CITIES: CityScore[] = [
  { name: 'City Alpha (Tier-1)', tier: 'Metro Capital', costOfLivingIndex: 88, safetyIndex: 62, healthcareIndex: 85, compositeLivability: 74 },
  { name: 'City Beta (Tier-2)', tier: 'Tech Hub', costOfLivingIndex: 64, safetyIndex: 78, healthcareIndex: 80, compositeLivability: 82 },
  { name: 'City Gamma (Tier-2)', tier: 'Cultural Center', costOfLivingIndex: 58, safetyIndex: 74, healthcareIndex: 76, compositeLivability: 79 },
  { name: 'City Delta (Tier-3)', tier: 'Developing Hub', costOfLivingIndex: 42, safetyIndex: 69, healthcareIndex: 60, compositeLivability: 68 }
];

export const LivabilityPreview: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<CityScore>(SAMPLE_CITIES[1]);

  return (
    <div className="bg-canvas border-2 border-ink p-4 sm:p-5 font-sans shadow-retro-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-ink gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-electric-blue inline-block"></span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
            URBAN LIVABILITY EDA // MULTI-DATASET MERGE
          </span>
        </div>
        <span className="text-[11px] font-mono bg-canvas-dark border border-ink-border px-2 py-0.5 text-ink">
          Pandas + Seaborn + Power BI
        </span>
      </div>

      {/* City Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 font-mono text-xs">
        {SAMPLE_CITIES.map((c) => (
          <button
            key={c.name}
            onClick={() => setSelectedCity(c)}
            className={`p-2 text-left border transition-all ${
              selectedCity.name === c.name
                ? 'bg-ink text-canvas border-ink font-bold shadow-retro-sm'
                : 'bg-canvas-card text-ink-muted border-ink-border hover:text-ink'
            }`}
          >
            <div className="text-[10px] text-electric-lime">{c.tier}</div>
            <div className="truncate font-semibold">{c.name.split(' ')[1]}</div>
          </button>
        ))}
      </div>

      {/* Selected City Scorecard */}
      <div className="p-4 bg-canvas-card border border-ink space-y-3 font-mono text-xs">
        <div className="flex justify-between items-center border-b border-ink-border pb-2">
          <div>
            <div className="text-xs text-ink-muted">{selectedCity.tier}</div>
            <div className="text-base font-display font-black text-ink">{selectedCity.name}</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-ink-muted uppercase">COMPOSITE SCORE</div>
            <div className="text-2xl font-display font-black text-electric-blue">
              {selectedCity.compositeLivability} / 100
            </div>
          </div>
        </div>

        {/* Indicator Breakdown */}
        <div className="space-y-2 pt-1">
          <div>
            <div className="flex justify-between text-[11px] mb-0.5">
              <span className="flex items-center gap-1.5 text-ink">
                <DollarSign className="w-3.5 h-3.5 text-electric-orange" />
                Cost Burden Index (Lower is Better)
              </span>
              <span className="font-bold text-ink">{selectedCity.costOfLivingIndex}</span>
            </div>
            <div className="w-full bg-canvas-dark h-2 border border-ink-border overflow-hidden">
              <div className="bg-electric-orange h-full" style={{ width: `${selectedCity.costOfLivingIndex}%` }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[11px] mb-0.5">
              <span className="flex items-center gap-1.5 text-ink">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                Safety & Civic Order Index
              </span>
              <span className="font-bold text-emerald-600">{selectedCity.safetyIndex}</span>
            </div>
            <div className="w-full bg-canvas-dark h-2 border border-ink-border overflow-hidden">
              <div className="bg-emerald-500 h-full" style={{ width: `${selectedCity.safetyIndex}%` }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[11px] mb-0.5">
              <span className="flex items-center gap-1.5 text-ink">
                <HeartPulse className="w-3.5 h-3.5 text-electric-pink" />
                Healthcare Infrastructure
              </span>
              <span className="font-bold text-electric-pink">{selectedCity.healthcareIndex}</span>
            </div>
            <div className="w-full bg-canvas-dark h-2 border border-ink-border overflow-hidden">
              <div className="bg-electric-pink h-full" style={{ width: `${selectedCity.healthcareIndex}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
