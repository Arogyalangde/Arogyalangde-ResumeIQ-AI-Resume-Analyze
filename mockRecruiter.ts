import type { RecruiterMetric, CandidatePool, HiringTrend } from '../types';

export const recruiterMetrics: RecruiterMetric[] = [
  { label: 'Active Pipelines', value: 14, change: 2, unit: 'roles' },
  { label: 'Candidates Reviewed', value: 847, change: 12.4, unit: 'this month' },
  { label: 'Avg. ATS Score', value: 72, change: -3.1, unit: 'points' },
  { label: 'Time-to-Hire', value: '18d', change: -22, unit: 'vs last quarter' },
  { label: 'Offer Acceptance Rate', value: '84%', change: 6, unit: 'vs last quarter' },
  { label: 'Pipeline Health', value: '91%', change: 4, unit: 'score' },
];

export const candidatePool: CandidatePool[] = [
  { stage: 'Applied', count: 412, percentage: 100, color: '#6366f1' },
  { stage: 'Screened', count: 186, percentage: 45, color: '#8b5cf6' },
  { stage: 'Phone Screen', count: 94, percentage: 23, color: '#a78bfa' },
  { stage: 'Technical', count: 47, percentage: 11, color: '#7c3aed' },
  { stage: 'Final Round', count: 18, percentage: 4, color: '#5b21b6' },
  { stage: 'Offered', count: 8, percentage: 2, color: '#4c1d95' },
];

export const hiringTrends: HiringTrend[] = [
  { week: 'W1 Jun', applications: 89, interviews: 22, offers: 2 },
  { week: 'W2 Jun', applications: 112, interviews: 31, offers: 3 },
  { week: 'W3 Jun', applications: 97, interviews: 28, offers: 1 },
  { week: 'W4 Jun', applications: 114, interviews: 35, offers: 2 },
  { week: 'W1 Jul', applications: 88, interviews: 24, offers: 4 },
  { week: 'W2 Jul', applications: 130, interviews: 40, offers: 3 },
  { week: 'W3 Jul', applications: 105, interviews: 33, offers: 2 },
];

export const topSkillDemand = [
  { skill: 'React / Next.js', demand: 94, supply: 71 },
  { skill: 'TypeScript', demand: 91, supply: 68 },
  { skill: 'System Design', demand: 88, supply: 42 },
  { skill: 'GraphQL', demand: 76, supply: 55 },
  { skill: 'Kubernetes', demand: 72, supply: 38 },
  { skill: 'Microfrontends', demand: 68, supply: 29 },
  { skill: 'Web Performance', demand: 65, supply: 44 },
];

export const candidateScoreDistribution = [
  { range: '0–40', count: 52 },
  { range: '41–55', count: 98 },
  { range: '56–65', count: 134 },
  { range: '66–75', count: 87 },
  { range: '76–85', count: 61 },
  { range: '86–100', count: 28 },
];
