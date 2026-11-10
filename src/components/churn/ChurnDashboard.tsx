import React, { useState } from 'react';
import { 
  AlertTriangle, 
  BarChart3, 
  Filter, 
  Layers, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Sparkles,
  Info,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { 
  SYNTHETIC_CHURN_RECORDS, 
  CONTRACT_CHURN_DISTRIBUTION, 
  PAYMENT_CHURN_DISTRIBUTION, 
  TENURE_CHURN_DISTRIBUTION,
  FEATURE_IMPORTANCE_PREVIEW,
  SIMULATED_MODEL_BENCHMARK,
  CHURN_AGGREGATE_STATS,
  ChurnCustomerRecord 
} from '../../data/churnDummyData';

export const ChurnDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'segmentation' | 'ml-models' | 'dataset'>('overview');
  const [contractFilter, setContractFilter] = useState<string>('All');
  const [serviceFilter, setServiceFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter the sample records
  const filteredRecords = SYNTHETIC_CHURN_RECORDS.filter(record => {
    const matchesContract = contractFilter === 'All' || record.contract === contractFilter;
    const matchesService = serviceFilter === 'All' || record.internetService === serviceFilter;
    const matchesSearch = record.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          record.paymentMethod.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesContract && matchesService && matchesSearch;
  });

  return (
    <div className="bg-canvas-card border-2 border-ink rounded-none shadow-retro p-4 sm:p-6 lg:p-8 font-sans">
      {/* Top Banner Notice */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-amber-50 border border-amber-300 mb-6 text-xs sm:text-sm font-mono text-amber-950">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong className="font-bold">STATUS: IN ACTIVE DEVELOPMENT</strong> — All telemetry below uses verified synthetic sample benchmarks (1,000 customers).
          </span>
        </div>
        <span className="bg-amber-200 text-amber-900 px-2 py-0.5 font-bold uppercase tracking-wider text-[10px]">
          Sample Data Mode
        </span>
      </div>

      {/* Header and Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-ink pb-5 mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-muted mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Simulated Business Intelligence Cockpit
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-ink tracking-tight">
            Customer Churn & Risk Intelligence
          </h3>
          <p className="text-sm text-ink-muted max-w-2xl mt-1">
            Exploratory retention diagnostics and dual-model ML risk scoring to safeguard recurring subscription revenue.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex flex-wrap gap-1 bg-canvas-dark p-1 border border-ink text-xs font-mono">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 transition-all font-semibold ${
              activeTab === 'overview'
                ? 'bg-ink text-canvas-card shadow-retro-sm'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Overview & KPIs
          </button>
          <button
            onClick={() => setActiveTab('segmentation')}
            className={`px-3 py-1.5 transition-all font-semibold ${
              activeTab === 'segmentation'
                ? 'bg-ink text-canvas-card shadow-retro-sm'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Churn Drivers
          </button>
          <button
            onClick={() => setActiveTab('ml-models')}
            className={`px-3 py-1.5 transition-all font-semibold ${
              activeTab === 'ml-models'
                ? 'bg-ink text-canvas-card shadow-retro-sm'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            ML Benchmark
          </button>
          <button
            onClick={() => setActiveTab('dataset')}
            className={`px-3 py-1.5 transition-all font-semibold ${
              activeTab === 'dataset'
                ? 'bg-ink text-canvas-card shadow-retro-sm'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Sample Cohort ({filteredRecords.length})
          </button>
        </div>
      </div>

      {/* KPI Cards Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-canvas border border-ink shadow-retro-sm">
          <div className="flex items-center justify-between text-xs font-mono text-ink-muted mb-2">
            <span>TOTAL CUSTOMERS</span>
            <Users className="w-4 h-4 text-electric-blue" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-black text-ink">
            {CHURN_AGGREGATE_STATS.totalCustomers.toLocaleString()}
          </div>
          <div className="text-[11px] font-mono text-emerald-600 mt-1 flex items-center gap-1">
            <span>732 Active</span> · <span>268 Churned</span>
          </div>
        </div>

        <div className="p-4 bg-canvas border border-ink shadow-retro-sm">
          <div className="flex items-center justify-between text-xs font-mono text-ink-muted mb-2">
            <span>CHURN RATE</span>
            <TrendingDown className="w-4 h-4 text-electric-orange" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-black text-electric-orange">
            {CHURN_AGGREGATE_STATS.churnRatePercent}%
          </div>
          <div className="text-[11px] font-mono text-ink-muted mt-1">
            +4.2% above industry target
          </div>
        </div>

        <div className="p-4 bg-canvas border border-ink shadow-retro-sm">
          <div className="flex items-center justify-between text-xs font-mono text-ink-muted mb-2">
            <span>REVENUE AT RISK</span>
            <DollarSign className="w-4 h-4 text-electric-pink" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-black text-ink">
            ${CHURN_AGGREGATE_STATS.monthlyRevenueAtRisk.toLocaleString()}
          </div>
          <div className="text-[11px] font-mono text-electric-pink mt-1">
            26.8% of total monthly MRR
          </div>
        </div>

        <div className="p-4 bg-canvas border border-ink shadow-retro-sm">
          <div className="flex items-center justify-between text-xs font-mono text-ink-muted mb-2">
            <span>AVG TENURE (CHURNED)</span>
            <BarChart3 className="w-4 h-4 text-ink" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-black text-ink">
            {CHURN_AGGREGATE_STATS.avgTenureChurnedMonths} <span className="text-base font-normal">mo</span>
          </div>
          <div className="text-[11px] font-mono text-ink-muted mt-1">
            vs 37.4 mo for active users
          </div>
        </div>
      </div>

      {/* Tab 1: Overview & Visual Distribution */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contract Type Breakdown */}
            <div className="border border-ink p-5 bg-canvas">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display font-bold text-base text-ink flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-electric-orange inline-block"></span>
                  Churn Rate by Contract Type
                </h4>
                <span className="text-xs font-mono text-ink-muted">1,000 Cohort</span>
              </div>

              <div className="space-y-4">
                {CONTRACT_CHURN_DISTRIBUTION.map((item) => (
                  <div key={item.contract} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="font-semibold text-ink">{item.contract}</span>
                      <span className="text-ink">
                        {item.churned} / {item.total} ({item.rate}%)
                      </span>
                    </div>
                    <div className="w-full h-4 bg-canvas-dark border border-ink overflow-hidden flex">
                      <div
                        className="h-full transition-all duration-700"
                        style={{
                          width: `${item.rate}%`,
                          backgroundColor: item.color
                        }}
                      ></div>
                    </div>
                    <div className="text-[10px] font-mono text-ink-muted flex justify-between">
                      <span>At Risk</span>
                      <span>{item.rate > 30 ? 'CRITICAL HAZARD' : 'STABLE'}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3 bg-canvas-card border border-ink-border text-xs text-ink-muted leading-relaxed">
                <strong className="text-ink font-semibold">Key Takeaway:</strong> Month-to-Month contracts account for <strong>87.7%</strong> of all observed churn incidents. Locking customers into 1-year terms reduces churn probability by over <strong>75%</strong>.
              </div>
            </div>

            {/* Payment Method Distribution */}
            <div className="border border-ink p-5 bg-canvas">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display font-bold text-base text-ink flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-electric-blue inline-block"></span>
                  Churn Rate by Payment Method
                </h4>
                <span className="text-xs font-mono text-ink-muted">Channel Exposure</span>
              </div>

              <div className="space-y-4">
                {PAYMENT_CHURN_DISTRIBUTION.map((item) => (
                  <div key={item.method} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="font-semibold text-ink">{item.method}</span>
                      <span className="text-ink">
                        {item.churned} / {item.total} ({item.rate}%)
                      </span>
                    </div>
                    <div className="w-full h-4 bg-canvas-dark border border-ink overflow-hidden flex">
                      <div
                        className="h-full transition-all duration-700"
                        style={{
                          width: `${item.rate}%`,
                          backgroundColor: item.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3 bg-canvas-card border border-ink-border text-xs text-ink-muted leading-relaxed">
                <strong className="text-ink font-semibold">Friction Analysis:</strong> Electronic check users show the highest attrition (45.3%), whereas auto-pay channels (Credit Card & Bank Transfer) maintain steady sub-18% churn.
              </div>
            </div>
          </div>

          {/* Tenure Decay Curve */}
          <div className="border border-ink p-5 bg-canvas">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <div>
                <h4 className="font-display font-bold text-base text-ink">
                  Tenure Risk Window (Months on Platform)
                </h4>
                <p className="text-xs text-ink-muted">
                  Probability of customer cancellation as tenure progresses
                </p>
              </div>
              <span className="text-xs font-mono bg-electric-lime text-ink px-2.5 py-1 font-bold border border-ink">
                EARLY LIFECYCLE VULNERABILITY
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
              {TENURE_CHURN_DISTRIBUTION.map((item) => (
                <div key={item.band} className="p-3 bg-canvas-card border border-ink text-center">
                  <div className="text-[11px] font-mono text-ink-muted mb-1">{item.band}</div>
                  <div className="text-xl font-display font-black text-ink mb-1">
                    {item.rate}%
                  </div>
                  <div className="text-[10px] font-mono text-ink-muted">
                    {item.churned} / {item.total} lost
                  </div>
                  <div className="w-full bg-canvas-dark h-1.5 mt-2 border border-ink-border overflow-hidden">
                    <div 
                      className={`h-full ${item.rate > 40 ? 'bg-electric-orange' : item.rate > 20 ? 'bg-amber-400' : 'bg-emerald-500'}`}
                      style={{ width: `${item.rate}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Segmentation & Drivers */}
      {activeTab === 'segmentation' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 border border-ink p-5 bg-canvas">
              <h4 className="font-display font-bold text-lg text-ink mb-2">
                Top Model Feature Drivers (Simulated Beta Weights)
              </h4>
              <p className="text-xs text-ink-muted mb-6">
                Relative influence of telemetry attributes on increasing (+) or mitigating (-) churn risk.
              </p>

              <div className="space-y-3">
                {FEATURE_IMPORTANCE_PREVIEW.map((feat) => {
                  const isPositive = feat.weight > 0;
                  const absWeight = Math.abs(feat.weight);
                  const barWidthPercent = (absWeight / 0.35) * 100;

                  return (
                    <div key={feat.feature} className="p-2.5 bg-canvas-card border border-ink-border">
                      <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                        <span className="font-semibold text-ink">{feat.feature}</span>
                        <span className={`font-bold ${isPositive ? 'text-electric-orange' : 'text-electric-blue'}`}>
                          {isPositive ? `+${feat.weight}` : feat.weight} ({feat.impact})
                        </span>
                      </div>
                      <div className="w-full h-3 bg-canvas-dark border border-ink-border overflow-hidden">
                        <div
                          className="h-full"
                          style={{
                            width: `${barWidthPercent}%`,
                            backgroundColor: feat.color
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Strategic Interventions */}
            <div className="border border-ink p-5 bg-canvas flex flex-col justify-between">
              <div>
                <h4 className="font-display font-bold text-lg text-ink mb-3">
                  Recommended Retention Levers
                </h4>
                <ul className="space-y-3 text-xs text-ink-muted">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-orange mt-1.5 shrink-0"></span>
                    <span>
                      <strong className="text-ink">Annual Incentive Shift:</strong> Subsidize month-to-month subscribers who transition to a 12-month contract at month 3.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-blue mt-1.5 shrink-0"></span>
                    <span>
                      <strong className="text-ink">Proactive Tech Support:</strong> Automatically trigger a dedicated service concierge if a customer logs 2+ support inquiries within 30 days.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                    <span>
                      <strong className="text-ink">Auto-Pay Migration:</strong> Offer a one-time bill credit ($10) for migrating from manual electronic check to automated clearing house.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-canvas-dark border border-ink text-xs font-mono">
                <div className="text-[10px] text-ink-muted uppercase">Potential Recovery Impact</div>
                <div className="text-xl font-display font-bold text-emerald-600 mt-1">
                  $6,450 / month
                </div>
                <p className="text-[11px] text-ink-muted mt-1">
                  Estimated 35% reduction in recurring revenue loss upon intervention.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Machine Learning Model Benchmarking */}
      {activeTab === 'ml-models' && (
        <div className="space-y-6">
          <div className="border border-ink p-5 bg-canvas">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <div>
                <h4 className="font-display font-bold text-lg text-ink">
                  Comparative Model Architecture Benchmark
                </h4>
                <p className="text-xs text-ink-muted">
                  Stratified 5-Fold Cross-Validation evaluation on synthetic benchmark dataset.
                </p>
              </div>
              <span className="text-xs font-mono bg-zinc-200 text-zinc-800 px-2.5 py-1 border border-ink">
                EXPERIMENTATION PHASE
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="bg-canvas-dark border-b-2 border-ink text-ink uppercase tracking-wider">
                    <th className="p-3">Model</th>
                    <th className="p-3">Architecture Type</th>
                    <th className="p-3">Precision</th>
                    <th className="p-3">Recall</th>
                    <th className="p-3">F1-Score</th>
                    <th className="p-3">ROC-AUC</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-border">
                  {SIMULATED_MODEL_BENCHMARK.map((m) => (
                    <tr key={m.modelName} className="hover:bg-canvas-card transition-colors">
                      <td className="p-3 font-bold text-ink">{m.modelName}</td>
                      <td className="p-3 text-ink-muted">{m.type}</td>
                      <td className="p-3 font-semibold">{m.precision}</td>
                      <td className="p-3 font-semibold text-electric-blue">{m.recall}</td>
                      <td className="p-3 font-semibold">{m.f1Score}</td>
                      <td className="p-3 font-bold text-electric-orange">{m.rocAuc}</td>
                      <td className="p-3">
                        <span className="inline-block px-2 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 text-[10px]">
                          {m.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-canvas-card border border-ink-border">
                <h5 className="font-display font-bold text-sm text-ink mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-electric-blue" />
                  Logistic Regression Role
                </h5>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Acts as the foundational baseline. Because retention interventions carry operational costs, high model interpretability is paramount for presenting transparent odds ratios to department stakeholders.
                </p>
              </div>

              <div className="p-4 bg-canvas-card border border-ink-border">
                <h5 className="font-display font-bold text-sm text-ink mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-electric-orange" />
                  Random Forest Role
                </h5>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Captures non-linear thresholds (e.g. accounts with both Fiber Optic and zero tech support experiencing sharp risk spikes). Delivers superior ROC-AUC (0.84) on stratified holdout sets.
                </p>
              </div>
            </div>
          </div>

          {/* Development Roadmap */}
          <div className="border border-ink p-5 bg-canvas">
            <h4 className="font-display font-bold text-base text-ink mb-3">
              Planned Next Steps for Churn Model
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3 bg-canvas-card border border-ink">
                <div className="text-ink font-bold mb-1">01 / SMOTE Resampling</div>
                <p className="text-ink-muted">Address class imbalance (73:27 ratio) with synthetic minority oversampling to boost recall on critical churn instances.</p>
              </div>
              <div className="p-3 bg-canvas-card border border-ink">
                <div className="text-ink font-bold mb-1">02 / Optuna Tuning</div>
                <p className="text-ink-muted">Automate hyperparameter optimization for tree depth, minimum leaf samples, and regularization penalties.</p>
              </div>
              <div className="p-3 bg-canvas-card border border-ink">
                <div className="text-ink font-bold mb-1">03 / Real Data Ingestion</div>
                <p className="text-ink-muted">Modular architecture designed to easily swap synthetic data loader with live database feeds or CSV sources.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Sample Customer Cohort Table */}
      {activeTab === 'dataset' && (
        <div className="space-y-4">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3 p-3 bg-canvas border border-ink text-xs font-mono">
            <div className="flex items-center gap-2 grow">
              <Filter className="w-4 h-4 text-ink-muted" />
              <input
                type="text"
                placeholder="Search by ID or payment method..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-canvas-card px-2 py-1.5 border border-ink text-ink placeholder:text-ink-faint focus:outline-none focus:ring-1 focus:ring-ink"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-ink-muted">Contract:</span>
              <select
                value={contractFilter}
                onChange={(e) => setContractFilter(e.target.value)}
                className="bg-canvas-card px-2 py-1.5 border border-ink text-ink focus:outline-none"
              >
                <option value="All">All Contracts</option>
                <option value="Month-to-Month">Month-to-Month</option>
                <option value="One-Year">One-Year</option>
                <option value="Two-Year">Two-Year</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-ink-muted">Service:</span>
              <select
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="bg-canvas-card px-2 py-1.5 border border-ink text-ink focus:outline-none"
              >
                <option value="All">All Services</option>
                <option value="Fiber Optic">Fiber Optic</option>
                <option value="DSL">DSL</option>
                <option value="No Internet">No Internet</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-ink">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-canvas-dark border-b-2 border-ink text-ink uppercase tracking-wider">
                  <th className="p-3">Customer ID</th>
                  <th className="p-3">Age</th>
                  <th className="p-3">Tenure</th>
                  <th className="p-3">Contract</th>
                  <th className="p-3">Payment</th>
                  <th className="p-3">Monthly ($)</th>
                  <th className="p-3">Tickets</th>
                  <th className="p-3">Risk Score</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-border bg-canvas-card">
                {filteredRecords.map((cust) => (
                  <tr key={cust.id} className="hover:bg-canvas transition-colors">
                    <td className="p-3 font-bold text-ink">{cust.id}</td>
                    <td className="p-3 text-ink-muted">{cust.age}</td>
                    <td className="p-3">{cust.tenureMonths} mo</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 text-[10px] border ${
                        cust.contract === 'Month-to-Month'
                          ? 'bg-orange-50 text-orange-800 border-orange-300'
                          : 'bg-blue-50 text-blue-800 border-blue-300'
                      }`}>
                        {cust.contract}
                      </span>
                    </td>
                    <td className="p-3 text-ink-muted">{cust.paymentMethod}</td>
                    <td className="p-3 font-semibold">${cust.monthlyCharges.toFixed(2)}</td>
                    <td className="p-3">
                      <span className={`px-1.5 py-0.5 ${cust.supportTickets >= 3 ? 'bg-red-100 text-red-800 font-bold' : 'text-ink-muted'}`}>
                        {cust.supportTickets}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <span className={`font-bold ${
                          cust.churnRiskScore >= 75 ? 'text-electric-pink' :
                          cust.churnRiskScore >= 40 ? 'text-amber-600' : 'text-emerald-600'
                        }`}>
                          {cust.churnRiskScore}%
                        </span>
                        <div className="w-12 h-1.5 bg-canvas-dark border border-ink-border overflow-hidden hidden sm:block">
                          <div
                            className={`h-full ${
                              cust.churnRiskScore >= 75 ? 'bg-electric-pink' :
                              cust.churnRiskScore >= 40 ? 'bg-amber-400' : 'bg-emerald-500'
                            }`}
                            style={{ width: `${cust.churnRiskScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        cust.churnStatus === 'Churned'
                          ? 'bg-electric-pink text-white shadow-retro-sm'
                          : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      }`}>
                        {cust.churnStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center text-xs font-mono text-ink-muted pt-2">
            <span>Showing {filteredRecords.length} of {SYNTHETIC_CHURN_RECORDS.length} sample customers</span>
            <span>Dataset Schema: 10 Engineered Telemetry Attributes</span>
          </div>
        </div>
      )}
    </div>
  );
};
