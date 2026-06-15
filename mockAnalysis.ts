import type { AnalysisResult } from '../types';


export const mockAnalysisResult: AnalysisResult = {
  atsScore: 78,
  resumeScore: 82,
  keywordMatch: 71,
  healthStatus: 'good',

  sections: [
    {
      name: 'Experience',
      score: 88,
      feedback: 'Strong impact metrics, but consider adding more quantifiable achievements in your mid-career roles.',
      items: [
        'Senior Frontend Engineer – Vercel (2021–Present)',
        'Frontend Engineer – Stripe (2019–2021)',
        'Software Engineer – Shopify (2017–2019)',
      ],
    },
    {
      name: 'Skills',
      score: 74,
      feedback: 'Missing several in-demand keywords like "microfrontends", "Web Vitals optimization", and "design systems".',
      items: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'Docker', 'PostgreSQL', 'Redis'],
    },
    {
      name: 'Education',
      score: 90,
      feedback: 'Well-structured with honors and relevant coursework listed.',
      items: ['B.S. Computer Science – MIT (2013–2017)', 'Dean\'s List – 3.9 GPA'],
    },
    {
      name: 'Projects',
      score: 65,
      feedback: 'Projects lack GitHub links and measurable outcomes. Add user/traffic metrics where possible.',
      items: ['OpenSaaS – Open source SaaS boilerplate (4.2k GitHub stars)', 'DevMetrics – Real-time developer productivity dashboard'],
    },
    {
      name: 'Certifications',
      score: 70,
      feedback: 'AWS certification is slightly outdated. Consider renewing and adding a Kubernetes certification.',
      items: ['AWS Certified Solutions Architect (2020)', 'Google Cloud Professional (2022)'],
    },
  ],

  keywords: [
    { term: 'React', frequency: 8, importance: 'critical', found: true },
    { term: 'TypeScript', frequency: 6, importance: 'critical', found: true },
    { term: 'Node.js', frequency: 4, importance: 'high', found: true },
    { term: 'GraphQL', frequency: 3, importance: 'high', found: true },
    { term: 'AWS', frequency: 2, importance: 'high', found: true },
    { term: 'Microfrontends', frequency: 0, importance: 'high', found: false },
    { term: 'Web Vitals', frequency: 0, importance: 'high', found: false },
    { term: 'Design Systems', frequency: 0, importance: 'medium', found: false },
    { term: 'Kubernetes', frequency: 1, importance: 'medium', found: true },
    { term: 'CI/CD', frequency: 2, importance: 'medium', found: true },
    { term: 'System Design', frequency: 0, importance: 'medium', found: false },
    { term: 'Performance Optimization', frequency: 1, importance: 'critical', found: true },
    { term: 'A/B Testing', frequency: 0, importance: 'low', found: false },
    { term: 'Agile/Scrum', frequency: 1, importance: 'low', found: true },
  ],

  skills: [
    { name: 'React', level: 95, category: 'technical', trending: true },
    { name: 'TypeScript', level: 90, category: 'technical', trending: true },
    { name: 'Node.js', level: 80, category: 'technical', trending: false },
    { name: 'GraphQL', level: 75, category: 'technical', trending: true },
    { name: 'AWS', level: 70, category: 'domain', trending: false },
    { name: 'Docker', level: 65, category: 'technical', trending: false },
    { name: 'System Design', level: 60, category: 'domain', trending: true },
    { name: 'Leadership', level: 85, category: 'soft', trending: false },
    { name: 'Communication', level: 80, category: 'soft', trending: false },
    { name: 'Problem Solving', level: 92, category: 'soft', trending: false },
  ],

  atsTrend: [
    { month: 'Jan', score: 58, industry: 65 },
    { month: 'Feb', score: 61, industry: 66 },
    { month: 'Mar', score: 65, industry: 67 },
    { month: 'Apr', score: 69, industry: 68 },
    { month: 'May', score: 72, industry: 69 },
    { month: 'Jun', score: 75, industry: 70 },
    { month: 'Jul', score: 78, industry: 71 },
  ],

  sectionBreakdown: [
    { section: 'Experience', score: 88, weight: 35, maxScore: 100 },
    { section: 'Skills', score: 74, weight: 25, maxScore: 100 },
    { section: 'Education', score: 90, weight: 15, maxScore: 100 },
    { section: 'Projects', score: 65, weight: 15, maxScore: 100 },
    { section: 'Certifications', score: 70, weight: 10, maxScore: 100 },
  ],

  improvements: [
    {
      id: 'imp-1',
      category: 'keywords',
      priority: 'high',
      title: 'Add microfrontend architecture experience',
      description: 'Microfrontends appears in 89% of senior frontend job descriptions this quarter. Reference your architecture decisions at Vercel.',
      impact: 12,
    },
    {
      id: 'imp-2',
      category: 'content',
      priority: 'high',
      title: 'Quantify project outcomes',
      description: 'Your projects section mentions no traffic, revenue, or performance metrics. ATS systems and recruiters both reward measurable impact.',
      impact: 10,
    },
    {
      id: 'imp-3',
      category: 'keywords',
      priority: 'high',
      title: 'Include Core Web Vitals optimization',
      description: 'Performance optimization is a critical keyword. Expand it with specifics: LCP, CLS, INP scores you\'ve achieved.',
      impact: 9,
    },
    {
      id: 'imp-4',
      category: 'format',
      priority: 'medium',
      title: 'Standardize date formatting',
      description: 'ATS parsers struggle with inconsistent date formats. Use MM/YYYY consistently across all sections.',
      impact: 6,
    },
    {
      id: 'imp-5',
      category: 'structure',
      priority: 'medium',
      title: 'Move skills section above projects',
      description: 'Most modern ATS systems parse the first 60% of a resume most accurately. Reorder to maximize keyword density early.',
      impact: 5,
    },
    {
      id: 'imp-6',
      category: 'keywords',
      priority: 'low',
      title: 'Add design systems experience',
      description: 'Design systems expertise is a differentiator for senior roles. Mention any component libraries or design tokens you\'ve built.',
      impact: 4,
    },
  ],

  jobMatches: [
    {
      jobTitle: 'Staff Frontend Engineer',
      company: 'Linear',
      matchScore: 91,
      location: 'Remote',
      salary: '$180k – $230k',
      missingSkills: ['Design Systems', 'Electron'],
      strongMatches: ['React', 'TypeScript', 'Performance Optimization', 'GraphQL'],
      postedDate: '2 days ago',
    },
    {
      jobTitle: 'Senior React Engineer',
      company: 'Notion',
      matchScore: 87,
      location: 'San Francisco, CA',
      salary: '$170k – $210k',
      missingSkills: ['Real-time Collaboration', 'CRDT'],
      strongMatches: ['React', 'TypeScript', 'Node.js', 'AWS'],
      postedDate: '4 days ago',
    },
    {
      jobTitle: 'Frontend Platform Lead',
      company: 'Figma',
      matchScore: 83,
      location: 'Remote',
      salary: '$190k – $250k',
      missingSkills: ['WebAssembly', 'Microfrontends', 'Canvas API'],
      strongMatches: ['TypeScript', 'Performance', 'System Design'],
      postedDate: '1 week ago',
    },
    {
      jobTitle: 'Principal Engineer, Web',
      company: 'Vercel',
      matchScore: 79,
      location: 'Remote',
      salary: '$200k – $280k',
      missingSkills: ['Rust', 'Edge Computing', 'Turborepo'],
      strongMatches: ['React', 'Next.js', 'AWS', 'CI/CD'],
      postedDate: '1 week ago',
    },
  ],
};
export const dataAnalyticsAnalysis: AnalysisResult = {
  ...mockAnalysisResult,

  atsScore: 84,
  resumeScore: 86,

  skills: [
    { name: 'SQL', level: 95, category: 'technical', trending: true },
    { name: 'Power BI', level: 90, category: 'technical', trending: true },
    { name: 'Tableau', level: 85, category: 'technical', trending: true },
    { name: 'Excel', level: 92, category: 'technical', trending: false },
    { name: 'Python', level: 80, category: 'technical', trending: true },
  ],

  jobMatches: [
    {
      jobTitle: 'Data Analyst',
      company: 'Google',
      matchScore: 91,
      location: 'Remote',
      salary: '$90k - $120k',
      missingSkills: ['BigQuery'],
      strongMatches: ['SQL', 'Power BI', 'Excel'],
      postedDate: '2 days ago',
    },
  ],
};

export const cloudAnalysis: AnalysisResult = {
  ...mockAnalysisResult,

  atsScore: 81,

  skills: [
    { name: 'AWS', level: 95, category: 'technical', trending: true },
    { name: 'Docker', level: 90, category: 'technical', trending: true },
    { name: 'Kubernetes', level: 85, category: 'technical', trending: true },
    { name: 'Terraform', level: 80, category: 'technical', trending: true },
  ],
};

export const aiMlAnalysis: AnalysisResult = {
  ...mockAnalysisResult,

  atsScore: 87,

  skills: [
    { name: 'Machine Learning', level: 95, category: 'technical', trending: true },
    { name: 'Deep Learning', level: 90, category: 'technical', trending: true },
    { name: 'TensorFlow', level: 88, category: 'technical', trending: true },
    { name: 'PyTorch', level: 85, category: 'technical', trending: true },
  ],
};
