import { PortfolioConfig } from '../types';

export const portfolioData: PortfolioConfig = {
  name: 'Ananya Dubey',
  initials: 'AD',
  headline: "Hi, I'm Ananya.",
  roles: [
    'Data Analytics Enthusiast',
    'Aspiring Data Scientist',
    'Creative Problem Solver',
    'Mathematics & Computing Student'
  ],
  tagline: 'A little logic. A lot of curiosity.',
  summary:
    'Mathematics and Computing undergraduate with hands-on experience in Python, SQL, Excel, Power BI, and exploratory data analysis. Experienced in building data-driven projects involving regression, feature engineering, dashboard development, and database analysis. Interested in Data Analytics, Product Analytics, and Data Science roles focused on solving real-world problems through data.',
  aboutEditorial: [
    "I'm a third-year B.Tech Mathematics & Computing student at Madhav Institute of Technology, Gwalior. My academic grounding in discrete mathematics, linear algebra, statistics, and computational logic bridges directly into how I look at datasets: not merely as rows and columns, but as dynamic systems waiting for structured inquiry.",
    'Whether investigating profit leakage across 9,996 sales records, architecting an uncertainty-aware churn pipeline, or parsing facial posture during mock interviews with OpenCV, I love taking raw, messy inputs and turning them into decisive visual narratives.',
    'Outside the code editor, I serve as Vice President of the Aerospace Club and branch coordinator for NPTEL, championing peer learning, hackathon sprint execution, and technical workshops.'
  ],
  location: 'Gwalior, Madhya Pradesh, India',
  email: 'dubeyananya34@gmail.com',
  phone: '+91-6260156166',
  availability: 'Open for Summer / Fall Internships & Analytical Roles',
  isOpenToWork: true,
  socials: {
    github: 'https://github.com/ananyak19gg',
    linkedin: 'https://www.linkedin.com/in/AnanyaDubey19/',
    email: 'mailto:dubeyananya34@gmail.com',
    phone: 'tel:+916260156166'
  },
  education: {
    institution: 'Madhav Institute of Technology, Gwalior',
    degree: 'Bachelor of Technology — Mathematics and Computing',
    period: 'September 2024 – Present',
    score: 'CGPA: 8.2 / 10',
    location: 'Gwalior, India',
    highlights: [
      'Core Coursework: Probability & Statistics, Linear Algebra, Object-Oriented Programming, Data Structures & Algorithms, Numerical Methods, Database Systems',
      'Branch NPTEL Student Coordinator representing Mathematics and Computing cohort',
      'Active member and technical lead across student hackathon delegations'
    ]
  },
  projects: [
    {
      id: 'churn-analytics',
      number: '01',
      title: 'Customer Churn Analysis & Prediction',
      category: 'MACHINE LEARNING / BUSINESS INTELLIGENCE',
      status: 'In Development',
      inProgress: true,
      shortDescription:
        'An end-to-end customer retention intelligence system combining exploratory risk profiling with predictive classification models to isolate revenue vulnerabilities.',
      fullDescription:
        'A comprehensive customer churn analytics and risk forecasting engine. Built to evaluate customer attrition triggers across tenure, monthly spend, contract commitments, and tech support touchpoints. Features interactive cohort filtering, risk scoring, and a comparative ML benchmark between Logistic Regression and Random Forest.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL', 'Power BI'],
      metrics: [
        { label: 'Sample Cohort', value: '1,000', subtext: 'Synthetic baseline records' },
        { label: 'Overall Churn Rate', value: '26.8%', subtext: 'High-risk concentration' },
        { label: 'MRR at Risk', value: '$18,420', subtext: 'Monthly recurring exposure' },
        { label: 'Top Trigger', value: 'Month-to-Month', subtext: '42.7% attrition rate' }
      ],
      highlights: [
        'Exploratory data analysis mapping churn across contract types, payment methods, and customer tenure bands',
        'Engineered synthetic dataset modeled on telecom benchmark attributes with 10 structured telemetry fields',
        'Supervised learning pipeline: Data preprocessing, one-hot encoding, feature scaling, and class imbalance handling',
        'Model experimentation evaluating Logistic Regression (baseline interpretability) against Random Forest (non-linear interactions)',
        'Feature importance matrix identifying month-to-month contracts, lack of online security, and electronic check payments as prime churn signals',
        'Interactive simulated dashboard with real-time cohort recalculation and risk segmentation'
      ],
      githubUrl: 'https://github.com/ananyak19gg',
      interactiveType: 'churn',
      caseStudy: {
        problemStatement:
          'Subscription-based businesses frequently lose predictable recurring revenue because customer disengagement signals go unnoticed until cancellation occurs. The objective is to identify leading behavioral indicators of churn and construct early-warning intervention segments.',
        datasetDescription:
          'Synthetic benchmark cohort of 1,000 customers containing CustomerID, Tenure (months), Monthly Charges, Total Charges, Contract Type (Month-to-Month, 1-Year, 2-Year), Payment Method, Internet Service, Tech Support status, and Churn status.',
        methodology: [
          '1. Exploratory Data Analysis & Bivariate hypothesis testing on customer lifetime value.',
          '2. Preprocessing pipeline: Missing value imputation, robust scaling on charges, one-hot encoding of categorical features.',
          '3. Supervised Model Training: Logistic Regression (L2 penalized) & Random Forest Classifier with stratified 5-fold cross validation.',
          '4. Model Evaluation using Precision, Recall, F1-Score, and ROC-AUC curve analysis.',
          '5. Business Intelligence translation: Translating model probabilities into high, medium, and low-risk customer action lists.'
        ],
        keyInsights: [
          'Customers on month-to-month contracts are 3.8x more likely to churn than those on 1-year commitments.',
          'Tenure between 1-6 months represents the highest drop-off vulnerability window.',
          'Customers with fiber optic internet lacking tech support have elevated churn rates due to unresolved service friction.',
          'Electronic check payment users show higher voluntary and involuntary churn compared to credit card auto-pay.'
        ],
        businessImpact:
          'Proactive targeted retention campaigns focused specifically on month-to-month users in months 2-5 can mitigate up to 35% of predicted monthly recurring revenue losses.',
        toolsUsed: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Power BI', 'SQL']
      }
    },
    {
      id: 'ai-interview-platform',
      number: '02',
      title: 'AI-Powered Interview Simulation Platform',
      category: 'COMPUTER VISION / DATA PROCESSING',
      status: 'Completed',
      inProgress: false,
      shortDescription:
        'An intelligent candidate readiness system combining resume NLP extraction, adaptive interview prompts, and real-time computer vision posture scoring.',
      fullDescription:
        'An interview preparation platform that analyzes both verbal answers and non-verbal candidate signals. It parses resume text into domain competencies, generates situational questions, and tracks user presence, gaze direction, and posture via OpenCV.',
      technologies: ['Python', 'OpenCV', 'NLP Parsing', 'Scikit-learn'],
      metrics: [
        { label: 'Posture Tracking', value: '30 FPS', subtext: 'Real-time OpenCV feed' },
        { label: 'Telemetry Metrics', value: '4 Pillars', subtext: 'Gaze, posture, pacing, clarity' },
        { label: 'Evaluation Speed', value: '< 2.5s', subtext: 'Structured feedback output' }
      ],
      highlights: [
        'Developed end-to-end data pipeline for PDF resume ingestion, keyword extraction, and experience profiling',
        'Implemented computer vision pipelines in OpenCV to monitor user presence, face alignment, and posture stability',
        'Constructed dynamic question generation trees mapped to technical stacks and behavioral frameworks',
        'Engineered an objective scoring engine yielding structured performance diagnostics and improvement suggestions'
      ],
      githubUrl: 'https://github.com/ananyak19gg/PrepPal_py',
      interactiveType: 'interview',
      caseStudy: {
        problemStatement:
          'Job seekers struggle to evaluate non-verbal interview cues (such as gaze avoidance, nervous posture shifts, and pacing) in asynchronous preparation, while traditional mock sessions lack objective automated metric tracking.',
        datasetDescription:
          'Custom parsed candidate profiles, question bank matrices categorized by experience tier, and real-time webcam frame coordinates processed locally.',
        methodology: [
          'Text preprocessing and entity recognition for resume parsing and skill weight assignment.',
          'Haar cascade & landmark pose tracking via OpenCV to detect body orientation and head tilt angle.',
          'Real-time frame buffer analytics computing stillness ratio and eye-contact persistence.',
          'Composite scoring algorithm combining response confidence with visual stability indices.'
        ],
        keyInsights: [
          'Visual stability metrics directly correlate with perceived interviewer confidence ratings in blind testing.',
          'Dynamic follow-up questions tailored to resume keywords improved user response depth compared to static prompt banks.'
        ],
        businessImpact:
          'Empowered students to systematically isolate communication blind spots with automated, repeatable feedback sessions prior to high-stakes placement interviews.',
        toolsUsed: ['Python', 'OpenCV', 'Regex NLP', 'NumPy', 'Matplotlib']
      }
    },
    {
      id: 'sales-performance-analysis',
      number: '03',
      title: 'Sales Performance & Margin Leakage Analysis',
      category: 'SQL ANALYSIS / BUSINESS INTELLIGENCE',
      status: 'Completed',
      inProgress: false,
      shortDescription:
        'Deep-dive forensic SQL audit of 9,996 transaction records uncovering critical margin leakages, regional deficits, and loss-making product clusters.',
      fullDescription:
        'A comprehensive business intelligence investigation evaluating revenue, profitability, discounting behavior, and geographic performance across retail sales operations. Utilized advanced SQL aggregations and built a Power BI executive cockpit.',
      technologies: ['MySQL', 'Power BI', 'Data Modeling', 'DAX', 'Excel'],
      metrics: [
        { label: 'Records Audited', value: '9,996', subtext: 'Enterprise sales transactions' },
        { label: 'Furniture Margin', value: '17.4%', subtext: 'Lowest category margin', accent: 'orange' },
        { label: 'Central Margin', value: '7.92%', subtext: 'Lowest regional margin', accent: 'orange' },
        { label: 'Loss-Making SKUs', value: '137', subtext: 'High-revenue loss leaders', accent: 'pink' }
      ],
      highlights: [
        'Executed multi-tier SQL queries (CTEs, window functions, conditional aggregations) across 9,996 retail transaction records',
        'Discovered that Furniture generated significant gross revenue but suffered from the lowest category margin at 17.4%',
        'Isolated the Central sales region as an operational underperformer with a profit margin of only 7.92% due to aggressive discounting',
        'Flagged 137 individual high-revenue SKUs that actively generated negative net profit margins, causing hidden capital erosion',
        'Developed an interactive Power BI dashboard featuring dynamic drill-downs, margin waterfall charts, and discount sensitivity sliders'
      ],
      githubUrl: 'https://github.com/ananyak19gg/sales-performance-sql',
      interactiveType: 'sales',
      caseStudy: {
        problemStatement:
          'A national retail operation observed strong top-line revenue growth alongside shrinking net profit margins. Leadership required a forensic audit to pinpoint where discount policies and category pricing were eroding operating income.',
        datasetDescription:
          'Enterprise sales log of 9,996 order records with Order ID, Ship Mode, Customer Segment, Region, State, Category, Sub-Category, Sales, Quantity, Discount, and Profit.',
        methodology: [
          '1. Relational schema staging and data sanity validation in MySQL.',
          '2. Margin calculation queries grouping by category, regional manager, and discount tier thresholds.',
          '3. Outlier and loss-leader detection using window ranking functions to isolate products with positive sales and negative profit.',
          '4. Star schema data modeling in Power BI with custom DAX measures for profit margin %, discounted volume %, and margin variance.',
          '5. Executive dashboard synthesis with interactive category slicers and regional heatmaps.'
        ],
        keyInsights: [
          'Discounts exceeding 20% in the Furniture category produced an exponential shift into negative operating profit.',
          'The Central Region suffered from high shipping costs paired with excessive promotional allowances.',
          '137 loss-making SKUs were masquerading as "best sellers" based purely on gross volume metrics.'
        ],
        businessImpact:
          'Recommended capping discretionary discounts at 15% on low-margin furniture items and recalibrating vendor pricing on the 137 identified loss-leader SKUs to recover immediate margin.',
        toolsUsed: ['MySQL', 'Power BI', 'DAX', 'Excel Advanced Formulas']
      }
    },
    {
      id: 'city-livability-analysis',
      number: '04',
      title: 'City Livability Index & Urban Metrics EDA',
      category: 'EXPLORATORY DATA ANALYSIS / DATA STORYTELLING',
      status: 'Completed',
      inProgress: false,
      shortDescription:
        'Multi-source exploratory data synthesis harmonizing cost of living, safety indices, and environmental quality across global urban centers.',
      fullDescription:
        'An exploratory data analysis integrating disjointed municipal indices to understand trade-offs between affordability, safety, healthcare, and overall resident quality of life. Translated complex correlation matrices into an intuitive Power BI scorecard.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI'],
      metrics: [
        { label: 'Datasets Merged', value: 'Multiple', subtext: 'Normalized indicator schemas' },
        { label: 'Dimensions', value: '4 Core', subtext: 'Cost, safety, climate, health' },
        { label: 'Analysis Stack', value: 'EDA + BI', subtext: 'Pandas & Seaborn to Power BI' }
      ],
      highlights: [
        'Cleaned, standardized, and merged heterogeneous city-level datasets across cost of living, safety indices, and healthcare metrics',
        'Conducted rigorous exploratory data analysis in Python using Pandas, Seaborn pairplots, and correlation heatmaps',
        'Uncovered key trade-off clusters where low living costs coincided with deficient public transit and safety infrastructure',
        'Formulated a normalized composite Livability Score weighting economic burden against civic amenities',
        'Built a comparative Power BI dashboard enabling multi-city benchmarking and customized priority weighting'
      ],
      githubUrl: 'https://github.com/ananyak19gg/city-livability-eda',
      interactiveType: 'livability',
      caseStudy: {
        problemStatement:
          'Prospective relocators and municipal planners lack unified comparative tools that simultaneously evaluate purchasing power, crime rates, healthcare quality, and environmental comfort without contradictory metric scales.',
        datasetDescription:
          'Standardized global city survey data containing Cost of Living Index, Rent Index, Groceries Index, Purchasing Power, Crime Index, Safety Index, Healthcare Index, and Pollution Index.',
        methodology: [
          'Data cleaning, missing value imputation, and z-score normalization across disparate index scales.',
          'Exploratory bivariate regression and distribution analysis using Matplotlib and Seaborn.',
          'Principal component considerations to identify collinear indicators between rent and grocery indices.',
          'Interactive dashboard design in Power BI featuring radar charts, scatter plots, and city search filters.'
        ],
        keyInsights: [
          'Safety indices and healthcare quality demonstrated the strongest positive correlation with overall perceived livability.',
          'Mid-tier metropolitan areas often deliver 40% lower housing costs with only an 8% drop in amenities compared to tier-1 capitals.'
        ],
        businessImpact:
          'Created a reproducible exploratory framework applicable to urban planning comparisons and talent relocation cost-benefit calculations.',
        toolsUsed: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI']
      }
    }
  ],
  skillCategories: [
    {
      title: 'Programming & Logic',
      description: 'Core languages for analytical computing and application development',
      color: '#1D4ED8',
      skills: [
        { name: 'Python', level: 'Core' },
        { name: 'SQL', level: 'Core' },
        { name: 'C++', level: 'Proficient' }
      ]
    },
    {
      title: 'Data Analysis & Manipulation',
      description: 'Data wrangling, statistical validation, and exploratory modeling',
      color: '#FF5722',
      skills: [
        { name: 'Pandas', level: 'Core' },
        { name: 'NumPy', level: 'Core' },
        { name: 'Excel (Adv)', level: 'Core' },
        { name: 'Data Cleaning', level: 'Core' },
        { name: 'Exploratory Data Analysis', level: 'Core' },
        { name: 'Data Modeling', level: 'Proficient' },
        { name: 'Statistical Analysis', level: 'Proficient' }
      ]
    },
    {
      title: 'Visualization & Storytelling',
      description: 'Interactive dashboard engineering and executive communication',
      color: '#06B6D4',
      skills: [
        { name: 'Power BI', level: 'Core' },
        { name: 'Matplotlib', level: 'Core' },
        { name: 'Seaborn', level: 'Core' },
        { name: 'Dashboard Development', level: 'Core' },
        { name: 'Data Storytelling', level: 'Core' }
      ]
    },
    {
      title: 'Machine Learning & Modeling',
      description: 'Predictive algorithms, feature optimization, and metric evaluation',
      color: '#D8F827',
      skills: [
        { name: 'Supervised Learning', level: 'Core' },
        { name: 'Regression Analysis', level: 'Core' },
        { name: 'Feature Engineering', level: 'Core' },
        { name: 'Model Evaluation', level: 'Core' },
        { name: 'Gradient Descent', level: 'Proficient' },
        { name: 'Regularization', level: 'Proficient' }
      ]
    },
    {
      title: 'Databases & Analytics Engines',
      description: 'Query optimization, schema architecture, and web telemetry',
      color: '#FF2A6D',
      skills: [
        { name: 'MySQL', level: 'Core' },
        { name: 'PostgreSQL', level: 'Proficient' },
        { name: 'Google Analytics 4 (GA4)', level: 'Proficient' },
        { name: 'Scikit-learn', level: 'Core' }
      ]
    },
    {
      title: 'Developer Tools & Design',
      description: 'Version control, collaborative workflows, and UI ideation',
      color: '#8B5CF6',
      skills: [
        { name: 'Git', level: 'Core' },
        { name: 'GitHub', level: 'Core' },
        { name: 'Figma', level: 'Proficient' },
        { name: 'Canva', level: 'Proficient' }
      ]
    }
  ],
  achievements: [
    {
      id: 'aerospace-club',
      role: 'Vice President',
      organization: 'Aerospace Club, MITS Gwalior',
      period: '2024 – Present',
      tag: 'LEADERSHIP & MANAGEMENT',
      description:
        'Promoted from Technical Team Member to Vice President in recognition of technical initiative, peer mentorship, and operational leadership.',
      bullets: [
        'Directing club technical divisions, cross-batch project planning, and inter-collegiate technical demonstrations.',
        'Mentored junior students on scientific programming basics, computational modeling, and collaborative engineering workflows.',
        'Spearheaded technical symposia, workshop scheduling, and inter-departmental innovation events.'
      ],
      featured: true
    },
    {
      id: 'blackbox-hackathon',
      role: '1st Runner-Up (National Level)',
      organization: 'BlackBox Protocol National-Level Hackathon',
      period: 'National Hackathon',
      tag: 'HACKATHON WINNER',
      description:
        'Engineered NyayaSarthi — an AI-powered Court Order Execution System converting unstructured judicial verdicts into structured, trackable administrative workflows.',
      bullets: [
        'Built a system that ingests unstructured legal court judgements and extracts definitive compliance action items.',
        'Designed workflow state tracking ensuring government agencies receive verified, actionable mandates.',
        'Recognized with 1st Runner-Up honors among nationwide competing collegiate engineering teams.'
      ],
      featured: true
    },
    {
      id: 'nptel-coordinator',
      role: 'NPTEL Student Coordinator',
      organization: 'Mathematics & Computing Branch, MITS Gwalior',
      period: 'Academic Session',
      tag: 'ACADEMIC LEADERSHIP',
      description:
        'Selected as the official branch-level NPTEL student coordinator, serving as the central liaison between students, faculty mentors, and national certification platforms.',
      bullets: [
        'Coordinating certification roadmaps, course enrollment drives, and doubt-clearing sessions across the cohort.',
        'Achieved enhanced course completion and examination registration rates across core mathematical domains.'
      ]
    }
  ],
  certifications: [
    {
      id: 'kaggle-pandas',
      title: 'Pandas',
      issuer: 'Kaggle',
      date: 'Verified',
      url: 'https://www.kaggle.com/learn/certification',
      verificationStatus: 'verified',
      badgeCode: 'KGL-PNDS-2024',
      topics: ['Data Wrangling', 'Indexing & Selecting', 'Grouping & Aggregation', 'Renaming & Combining']
    },
    {
      id: 'kaggle-data-viz',
      title: 'Data Visualization',
      issuer: 'Kaggle',
      date: 'Verified',
      url: 'https://www.kaggle.com/learn/certification',
      verificationStatus: 'verified',
      badgeCode: 'KGL-DVIZ-2024',
      topics: ['Seaborn', 'Distributions', 'Bar Charts & Heatmaps', 'Scatter Plots', 'Data Storytelling']
    },
    {
      id: 'kaggle-intro-ml',
      title: 'Intro to Machine Learning',
      issuer: 'Kaggle',
      date: 'Verified',
      url: 'https://www.kaggle.com/learn/certification',
      verificationStatus: 'verified',
      badgeCode: 'KGL-IML-2024',
      topics: ['Decision Trees', 'Random Forests', 'Model Validation', 'Underfitting & Overfitting']
    }
  ]
};
