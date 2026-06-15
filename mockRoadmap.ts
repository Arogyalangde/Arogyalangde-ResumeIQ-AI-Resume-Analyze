import type { RoadmapMilestone } from '../types';

export const mockRoadmapMilestones: RoadmapMilestone[] = [
  {
    id: 'rm-1',
    title: 'Master Microfrontend Architecture',
    description: 'Microfrontend patterns are expected in 89% of Staff+ frontend roles. This is your highest-ROI investment right now.',
    timeframe: '0 – 6 weeks',
    skills: ['Module Federation', 'Monorepo tooling', 'Nx/Turborepo', 'Cross-app communication'],
    status: 'in-progress',
    priority: 'high',
    resources: [
      { title: 'Micro Frontends in Action', type: 'book', provider: 'Manning', duration: '10h', free: false },
      { title: 'Module Federation Deep Dive', type: 'course', provider: 'Udemy', duration: '8h', free: false },
      { title: 'Build a Microfrontend Dashboard', type: 'project', provider: 'Personal', duration: '3 weeks', free: true },
    ],
  },
  {
    id: 'rm-2',
    title: 'Core Web Vitals Expertise',
    description: 'Document measurable LCP, CLS, and INP improvements. Performance benchmarks are a decisive differentiator at senior levels.',
    timeframe: '2 – 8 weeks',
    skills: ['LCP optimization', 'Layout shift elimination', 'INP profiling', 'Lighthouse CI'],
    status: 'in-progress',
    priority: 'high',
    resources: [
      { title: 'Web Performance Fundamentals', type: 'course', provider: 'web.dev', duration: '6h', free: true },
      { title: 'Chrome DevTools Performance Panel', type: 'course', provider: 'Google', duration: '3h', free: true },
      { title: 'Lighthouse CI Integration', type: 'project', provider: 'Personal', duration: '1 week', free: true },
    ],
  },
  {
    id: 'rm-3',
    title: 'Build and Document a Design System',
    description: 'A public design system on GitHub signals architectural thinking and leadership ability to hiring managers.',
    timeframe: '6 – 14 weeks',
    skills: ['Design tokens', 'Component API design', 'Storybook', 'Accessibility (WCAG 2.2)', 'Visual regression testing'],
    status: 'upcoming',
    priority: 'high',
    resources: [
      { title: 'Design Systems with Storybook', type: 'course', provider: 'Frontend Masters', duration: '5h', free: false },
      { title: 'Tokens Studio', type: 'project', provider: 'OSS', duration: 'Ongoing', free: true },
      { title: 'Inclusive Components', type: 'book', provider: 'Smashing Mag', duration: '8h', free: false },
    ],
  },
  {
    id: 'rm-4',
    title: 'AWS Certification Renewal + Kubernetes',
    description: 'Your 2020 AWS cert is aging out of relevance. Pair renewal with CKA to cover both cloud and orchestration.',
    timeframe: '8 – 16 weeks',
    skills: ['AWS SAA-C03', 'ECS/EKS', 'Kubernetes basics', 'IaC with Terraform'],
    status: 'upcoming',
    priority: 'medium',
    resources: [
      { title: 'AWS SAA-C03 Exam Prep', type: 'course', provider: 'A Cloud Guru', duration: '40h', free: false },
      { title: 'Certified Kubernetes Administrator', type: 'certification', provider: 'CNCF', duration: '60h', free: false },
      { title: 'Terraform Up & Running', type: 'book', provider: 'O\'Reilly', duration: '12h', free: false },
    ],
  },
  {
    id: 'rm-5',
    title: 'Open Source Contribution Streak',
    description: 'Consistent OSS contributions signal community engagement. Target React, Next.js, or Vite — repos hiring managers actively check.',
    timeframe: '12 weeks – ongoing',
    skills: ['OSS workflows', 'Issue triage', 'PR reviews', 'Technical writing'],
    status: 'upcoming',
    priority: 'medium',
    resources: [
      { title: 'First Contributions Guide', type: 'project', provider: 'GitHub', duration: '2h', free: true },
      { title: 'How to Contribute to React', type: 'project', provider: 'React Docs', duration: '4h', free: true },
    ],
  },
];
