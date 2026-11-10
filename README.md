# Ananya Dubey — Personal Portfolio & Data Analytics Cockpit

An expressive, editorial, production-quality personal portfolio designed for **Ananya Dubey**, B.Tech in Mathematics & Computing undergraduate at Madhav Institute of Technology, Gwalior (8.2 CGPA).

Featuring a retro-modern visual identity, pop-out monochrome photography with vibrant graphic blocks, interactive machine learning prototypes, forensic business intelligence dashboards, and a centralized configuration architecture.

---

## 🚀 Live Tech Stack

- **Core Framework:** React 18, TypeScript, Vite
- **Styling & Layout:** Tailwind CSS (Custom retro-editorial design system, brutalist shadows, custom typography)
- **Typography:** Syne (Display), Space Grotesk (Editorial Headers), Plus Jakarta Sans (Body), JetBrains Mono (Telemetry & Badges)
- **Icons:** Lucide React
- **Motion & Interactions:** Framer Motion, CSS Keyframes

---

## 📁 Project Architecture

```
portfolio/
├── public/
│   └── images/
│       ├── ananya-cutout-bw.png        # High-contrast editorial monochrome cutout
│       ├── ananya-cutout-color.png     # Full-color natural cutout
│       ├── ananya-bench-bw.jpg         # Monochrome casual portrait (bench)
│       └── ananya-bench-color.jpg      # Color casual portrait (bench)
├── src/
│   ├── components/
│   │   ├── churn/
│   │   │   └── ChurnDashboard.tsx      # Project 01: Complete interactive Churn BI Cockpit
│   │   ├── About.tsx                   # Editorial narrative, portrait, and 4 pillars
│   │   ├── CaseStudyModal.tsx          # Full-screen deep-dive drawer for all projects
│   │   ├── Certifications.tsx          # Clickable button-style certification registry
│   │   ├── Contact.tsx                 # Validated contact form & direct mailto fallback
│   │   ├── Education.tsx               # MITS Gwalior, 8.2 CGPA badge, coursework
│   │   ├── Footer.tsx                  # Live IST Gwalior clock & back-to-top button
│   │   ├── Hero.tsx                    # Split-screen hero with interactive hover photo
│   │   ├── InterviewPreview.tsx        # Project 02: OpenCV 30 FPS telemetry preview
│   │   ├── Leadership.tsx              # Editorial timeline (VP Aerospace, Hackathon, NPTEL)
│   │   ├── LivabilityPreview.tsx       # Project 04: Urban Livability EDA scorecard
│   │   ├── Marquee.tsx                 # Retro running typography banner
│   │   ├── Navbar.tsx                  # Sticky header, internship status badge & mobile drawer
│   │   ├── ResumeModal.tsx             # Pixel-perfect ATS resume view (Print/Save PDF)
│   │   ├── SalesPreview.tsx            # Project 03: 9,996 records margin audit & discount slider
│   │   └── Skills.tsx                  # Categorized skills matrix (NO fake bars)
│   ├── data/
│   │   ├── churnDummyData.ts           # Synthetic telecom cohort (1,000 users, 10 attributes)
│   │   └── portfolioData.ts            # Central config file for all links, copy, and info
│   ├── types/
│   │   └── index.ts                    # Strict TypeScript data models
│   ├── App.tsx                         # Root app orchestrating all sections
│   ├── index.css                       # Brutalist styling, custom scrollbars, noise grain
│   └── main.tsx                        # React DOM entry point
├── dist/                               # Production build output
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🛠️ How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## 🎯 How to Customize Details & External Links

All your personal details, project descriptions, GitHub URLs, LinkedIn links, and certifications are stored centrally in:
```
src/data/portfolioData.ts
```

### Updating Links & Contacts:
```typescript
socials: {
  github: 'https://github.com/ananyak19gg',
  linkedin: 'https://www.linkedin.com/in/AnanyaDubey19/',
  email: 'mailto:dubeyananya34@gmail.com',
  phone: 'tel:+916260156166'
}
```

### Adding More Certifications:
Open `src/data/portfolioData.ts` and append to the `certifications` array:
```typescript
{
  id: 'your-cert-id',
  title: 'Advanced Machine Learning',
  issuer: 'Coursera / DeepLearning.AI',
  date: '2026',
  url: 'https://verification-link.com',
  verificationStatus: 'verified',
  badgeCode: 'CERT-1234',
  topics: ['Neural Networks', 'Hyperparameter Tuning']
}
```

### Replacing Synthetic Churn Data with Real Model Outputs:
The customer churn dashboard reads directly from `src/data/churnDummyData.ts`. Once you complete your model training pipeline with actual dataset metrics, you can replace the numbers in `SIMULATED_MODEL_BENCHMARK` and `CONTRACT_CHURN_DISTRIBUTION`.
