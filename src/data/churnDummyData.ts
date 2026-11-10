export interface ChurnCustomerRecord {
  id: string;
  age: number;
  tenureMonths: number;
  monthlyCharges: number;
  totalCharges: number;
  contract: 'Month-to-Month' | 'One-Year' | 'Two-Year';
  paymentMethod: 'Electronic Check' | 'Mailed Check' | 'Bank Transfer (auto)' | 'Credit Card (auto)';
  internetService: 'Fiber Optic' | 'DSL' | 'No Internet';
  supportTickets: number;
  churnRiskScore: number; // 0 to 100
  churnStatus: 'Churned' | 'Active';
}

export interface ChurnModelMetrics {
  modelName: string;
  type: string;
  precision: number;
  recall: number;
  f1Score: number;
  rocAuc: number;
  status: string;
  notes: string;
}

export const SYNTHETIC_CHURN_RECORDS: ChurnCustomerRecord[] = [
  { id: 'CUST-1042', age: 34, tenureMonths: 3, monthlyCharges: 89.5, totalCharges: 268.5, contract: 'Month-to-Month', paymentMethod: 'Electronic Check', internetService: 'Fiber Optic', supportTickets: 4, churnRiskScore: 88, churnStatus: 'Churned' },
  { id: 'CUST-1088', age: 52, tenureMonths: 48, monthlyCharges: 64.2, totalCharges: 3081.6, contract: 'Two-Year', paymentMethod: 'Credit Card (auto)', internetService: 'DSL', supportTickets: 0, churnRiskScore: 12, churnStatus: 'Active' },
  { id: 'CUST-1115', age: 29, tenureMonths: 5, monthlyCharges: 94.0, totalCharges: 470.0, contract: 'Month-to-Month', paymentMethod: 'Electronic Check', internetService: 'Fiber Optic', supportTickets: 3, churnRiskScore: 82, churnStatus: 'Churned' },
  { id: 'CUST-1149', age: 41, tenureMonths: 24, monthlyCharges: 45.1, totalCharges: 1082.4, contract: 'One-Year', paymentMethod: 'Bank Transfer (auto)', internetService: 'DSL', supportTickets: 1, churnRiskScore: 28, churnStatus: 'Active' },
  { id: 'CUST-1203', age: 63, tenureMonths: 2, monthlyCharges: 79.8, totalCharges: 159.6, contract: 'Month-to-Month', paymentMethod: 'Mailed Check', internetService: 'Fiber Optic', supportTickets: 5, churnRiskScore: 94, churnStatus: 'Churned' },
  { id: 'CUST-1240', age: 38, tenureMonths: 36, monthlyCharges: 102.5, totalCharges: 3690.0, contract: 'One-Year', paymentMethod: 'Credit Card (auto)', internetService: 'Fiber Optic', supportTickets: 1, churnRiskScore: 35, churnStatus: 'Active' },
  { id: 'CUST-1277', age: 25, tenureMonths: 8, monthlyCharges: 85.0, totalCharges: 680.0, contract: 'Month-to-Month', paymentMethod: 'Electronic Check', internetService: 'Fiber Optic', supportTickets: 2, churnRiskScore: 71, churnStatus: 'Churned' },
  { id: 'CUST-1310', age: 47, tenureMonths: 60, monthlyCharges: 29.5, totalCharges: 1770.0, contract: 'Two-Year', paymentMethod: 'Bank Transfer (auto)', internetService: 'No Internet', supportTickets: 0, churnRiskScore: 8, churnStatus: 'Active' },
  { id: 'CUST-1355', age: 31, tenureMonths: 4, monthlyCharges: 98.7, totalCharges: 394.8, contract: 'Month-to-Month', paymentMethod: 'Electronic Check', internetService: 'Fiber Optic', supportTickets: 4, churnRiskScore: 91, churnStatus: 'Churned' },
  { id: 'CUST-1392', age: 56, tenureMonths: 42, monthlyCharges: 70.3, totalCharges: 2952.6, contract: 'Two-Year', paymentMethod: 'Credit Card (auto)', internetService: 'DSL', supportTickets: 0, churnRiskScore: 16, churnStatus: 'Active' },
  { id: 'CUST-1428', age: 22, tenureMonths: 1, monthlyCharges: 81.2, totalCharges: 81.2, contract: 'Month-to-Month', paymentMethod: 'Electronic Check', internetService: 'Fiber Optic', supportTickets: 3, churnRiskScore: 86, churnStatus: 'Churned' },
  { id: 'CUST-1466', age: 45, tenureMonths: 18, monthlyCharges: 55.4, totalCharges: 997.2, contract: 'One-Year', paymentMethod: 'Bank Transfer (auto)', internetService: 'DSL', supportTickets: 1, churnRiskScore: 31, churnStatus: 'Active' },
  { id: 'CUST-1502', age: 39, tenureMonths: 12, monthlyCharges: 91.0, totalCharges: 1092.0, contract: 'Month-to-Month', paymentMethod: 'Mailed Check', internetService: 'Fiber Optic', supportTickets: 2, churnRiskScore: 68, churnStatus: 'Active' },
  { id: 'CUST-1539', age: 68, tenureMonths: 54, monthlyCharges: 24.8, totalCharges: 1339.2, contract: 'Two-Year', paymentMethod: 'Credit Card (auto)', internetService: 'No Internet', supportTickets: 0, churnRiskScore: 9, churnStatus: 'Active' },
  { id: 'CUST-1581', age: 28, tenureMonths: 6, monthlyCharges: 88.3, totalCharges: 529.8, contract: 'Month-to-Month', paymentMethod: 'Electronic Check', internetService: 'Fiber Optic', supportTickets: 4, churnRiskScore: 84, churnStatus: 'Churned' },
  { id: 'CUST-1614', age: 50, tenureMonths: 30, monthlyCharges: 62.0, totalCharges: 1860.0, contract: 'One-Year', paymentMethod: 'Credit Card (auto)', internetService: 'DSL', supportTickets: 1, churnRiskScore: 24, churnStatus: 'Active' }
];

export const CHURN_AGGREGATE_STATS = {
  totalCustomers: 1000,
  activeCustomers: 732,
  churnedCustomers: 268,
  churnRatePercent: 26.8,
  totalMonthlyRevenue: 68740,
  monthlyRevenueAtRisk: 18420,
  avgTenureActiveMonths: 37.4,
  avgTenureChurnedMonths: 10.2,
  sampleNotice: 'Synthetic exploratory cohort generated for prototype testing (1,000 customers). Real dataset ingestion and baseline benchmarks under active engineering.'
};

export const CONTRACT_CHURN_DISTRIBUTION = [
  { contract: 'Month-to-Month', total: 550, churned: 235, rate: 42.7, color: '#FF5722' },
  { contract: 'One-Year', total: 240, churned: 25, rate: 10.4, color: '#1D4ED8' },
  { contract: 'Two-Year', total: 210, churned: 8, rate: 3.8, color: '#06B6D4' }
];

export const PAYMENT_CHURN_DISTRIBUTION = [
  { method: 'Electronic Check', total: 340, churned: 154, rate: 45.3, color: '#FF2A6D' },
  { method: 'Mailed Check', total: 220, churned: 42, rate: 19.1, color: '#FF5722' },
  { method: 'Bank Transfer (auto)', total: 220, churned: 38, rate: 17.3, color: '#1D4ED8' },
  { method: 'Credit Card (auto)', total: 220, churned: 34, rate: 15.5, color: '#06B6D4' }
];

export const TENURE_CHURN_DISTRIBUTION = [
  { band: '0 - 6 Months', total: 260, churned: 135, rate: 51.9 },
  { band: '7 - 12 Months', total: 180, churned: 52, rate: 28.9 },
  { band: '13 - 24 Months', total: 190, churned: 38, rate: 20.0 },
  { band: '25 - 48 Months', total: 210, churned: 29, rate: 13.8 },
  { band: '49+ Months', total: 160, churned: 14, rate: 8.8 }
];

export const FEATURE_IMPORTANCE_PREVIEW = [
  { feature: 'Contract: Month-to-Month', weight: 0.32, impact: 'Positive (Increases Churn)', color: '#FF5722' },
  { feature: 'Tenure (Months)', weight: -0.28, impact: 'Negative (Reduces Churn)', color: '#1D4ED8' },
  { feature: 'Payment: Electronic Check', weight: 0.19, impact: 'Positive (Increases Churn)', color: '#FF2A6D' },
  { feature: 'Monthly Charges', weight: 0.16, impact: 'Positive (Increases Churn)', color: '#FF5722' },
  { feature: 'Tech Support: No', weight: 0.14, impact: 'Positive (Increases Churn)', color: '#FF5722' },
  { feature: 'Internet: Fiber Optic', weight: 0.11, impact: 'Positive (Increases Churn)', color: '#FF5722' },
  { feature: 'Contract: Two-Year', weight: -0.24, impact: 'Negative (Reduces Churn)', color: '#06B6D4' }
];

export const SIMULATED_MODEL_BENCHMARK: ChurnModelMetrics[] = [
  {
    modelName: 'Logistic Regression (L2)',
    type: 'Linear / Baseline Probabilistic',
    precision: 0.69,
    recall: 0.74,
    f1Score: 0.71,
    rocAuc: 0.82,
    status: 'In-Development Prototype',
    notes: 'Prioritizes high recall to minimize false negatives on at-risk high-spend accounts; highly interpretable coefficients.'
  },
  {
    modelName: 'Random Forest Classifier',
    type: 'Ensemble Non-Linear',
    precision: 0.74,
    recall: 0.71,
    f1Score: 0.72,
    rocAuc: 0.84,
    status: 'In-Development Prototype',
    notes: 'Captures non-linear interactions between high monthly charges and short tenure windows; robust to outliers.'
  }
];
