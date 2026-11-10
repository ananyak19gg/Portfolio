import React, { useState } from 'react';
import { DollarSign, AlertOctagon, TrendingDown, Layers, BarChart2 } from 'lucide-react';

export const SalesPreview: React.FC = () => {
  const [discountThreshold, setDiscountThreshold] = useState<number>(20);

  // Compute simulated profit impact based on discount slider
  const lossMakingCount = Math.round(137 * (discountThreshold / 20));
  const estimatedMarginLoss = (discountThreshold * 1420).toLocaleString();

  return (
    <div className="bg-canvas border-2 border-ink p-4 sm:p-5 font-sans shadow-retro-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-ink gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-electric-orange inline-block"></span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
            FORENSIC MARGIN AUDIT // 9,996 TRANSACTIONS
          </span>
        </div>
        <span className="text-[11px] font-mono bg-canvas-dark border border-ink-border px-2 py-0.5 text-ink">
          MySQL + Power BI
        </span>
      </div>

      {/* Main Metric Cards Callouts */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="p-2.5 bg-canvas-card border border-ink text-center">
          <div className="text-[10px] font-mono text-ink-muted uppercase">Furniture Margin</div>
          <div className="text-xl sm:text-2xl font-display font-black text-electric-orange mt-0.5">
            17.4%
          </div>
          <div className="text-[9px] font-mono text-ink-faint">Lowest Category</div>
        </div>

        <div className="p-2.5 bg-canvas-card border border-ink text-center">
          <div className="text-[10px] font-mono text-ink-muted uppercase">Central Region</div>
          <div className="text-xl sm:text-2xl font-display font-black text-electric-pink mt-0.5">
            7.92%
          </div>
          <div className="text-[9px] font-mono text-ink-faint">Lowest Regional Margin</div>
        </div>

        <div className="p-2.5 bg-canvas-card border border-ink text-center">
          <div className="text-[10px] font-mono text-ink-muted uppercase">Loss Leaders</div>
          <div className="text-xl sm:text-2xl font-display font-black text-ink mt-0.5">
            137 SKUs
          </div>
          <div className="text-[9px] font-mono text-ink-faint">Profiting Negative</div>
        </div>
      </div>

      {/* Category Margin Comparison Bars */}
      <div className="p-3 bg-canvas-card border border-ink-border mb-4 space-y-2.5 font-mono text-xs">
        <div className="flex justify-between items-center text-ink font-bold text-[11px] border-b border-ink-border pb-1">
          <span>CATEGORY MARGIN HIERARCHY</span>
          <span>NET PROFIT %</span>
        </div>

        <div>
          <div className="flex justify-between text-[11px] mb-1">
            <span>Technology</span>
            <span className="font-bold text-emerald-600">38.2%</span>
          </div>
          <div className="w-full bg-canvas-dark h-2.5 border border-ink-border overflow-hidden">
            <div className="bg-emerald-500 h-full" style={{ width: '38.2%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[11px] mb-1">
            <span>Office Supplies</span>
            <span className="font-bold text-electric-blue">28.9%</span>
          </div>
          <div className="w-full bg-canvas-dark h-2.5 border border-ink-border overflow-hidden">
            <div className="bg-electric-blue h-full" style={{ width: '28.9%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[11px] mb-1">
            <span className="font-semibold text-electric-orange">Furniture (Critical Leakage)</span>
            <span className="font-bold text-electric-orange">17.4%</span>
          </div>
          <div className="w-full bg-canvas-dark h-2.5 border border-ink-border overflow-hidden">
            <div className="bg-electric-orange h-full" style={{ width: '17.4%' }}></div>
          </div>
        </div>
      </div>

      {/* Interactive Discount Sensitivity Simulator */}
      <div className="p-3 bg-canvas-card border border-ink text-xs font-mono">
        <div className="flex justify-between items-center mb-1">
          <span className="text-ink font-semibold">Simulate Discount Ceiling:</span>
          <span className="font-bold text-electric-orange px-1.5 py-0.5 bg-orange-100 border border-orange-300">
            {discountThreshold}% Max
          </span>
        </div>

        <input
          type="range"
          min="5"
          max="35"
          value={discountThreshold}
          onChange={(e) => setDiscountThreshold(Number(e.target.value))}
          className="w-full accent-ink my-2 cursor-pointer"
        />

        <div className="flex justify-between text-[10px] text-ink-muted">
          <span>5% Strict Controls</span>
          <span>20% Actual Historical</span>
          <span>35% Unchecked</span>
        </div>

        <div className="mt-2 pt-2 border-t border-ink-border flex justify-between text-[11px]">
          <span className="text-ink-muted">Negative Margin Products:</span>
          <span className="font-bold text-ink">{lossMakingCount} SKUs affected</span>
        </div>
      </div>
    </div>
  );
};
