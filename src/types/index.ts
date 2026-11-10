export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface MetricCard {
  label: string;
  value: string;
  subtext?: string;
  accent?: 'blue' | 'orange' | 'lime' | 'pink' | 'neutral';
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  number: string;
  status?: string;
  inProgress?: boolean;
  technologies: string[];
  metrics?: MetricCard[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  interactiveType?: 'churn' | 'interview' | 'sales' | 'livability';
  caseStudy: {
    problemStatement: string;
    datasetDescription: string;
    methodology: string[];
    keyInsights: string[];
    businessImpact: string;
    toolsUsed: string[];
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  color: string;
  skills: {
    name: string;
    level?: 'Core' | 'Proficient' | 'Familiar';
    icon?: string;
  }[];
}

export interface Achievement {
  id: string;
  role: string;
  organization: string;
  period: string;
  tag: string;
  description: string;
  bullets: string[];
  featured?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
  verificationStatus: 'verified' | 'pending' | 'configurable';
  badgeCode: string;
  topics: string[];
}

export interface EducationInfo {
  institution: string;
  degree: string;
  period: string;
  score: string;
  location: string;
  highlights: string[];
}

export interface PortfolioConfig {
  name: string;
  initials: string;
  headline: string;
  roles: string[];
  tagline: string;
  summary: string;
  aboutEditorial: string[];
  location: string;
  email: string;
  phone: string;
  availability: string;
  isOpenToWork: boolean;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
  };
  education: EducationInfo;
  projects: Project[];
  skillCategories: SkillCategory[];
  achievements: Achievement[];
  certifications: Certification[];
}
