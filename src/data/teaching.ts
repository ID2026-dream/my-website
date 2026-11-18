// Modules you teach. Add one entry per module.

export interface Module {
  title: string;
  level: string;
  summary: string;
  facts: string[];
  href?: string;
  linkLabel?: string;
}

export const MODULES: Module[] = [
  {
    title: 'AI Principles and Practice',
    level: 'Postgraduate',
    summary:
      'Foundations first: data, evaluation, ethics, safety and representations, then neural networks, transformers and diffusion. Weekly lectures are paired with hands-on labs in scikit-learn and PyTorch.',
    facts: ['12 weeks', 'Level 9, 10 credits', 'Co-taught'],
    href: 'https://tutors.dev/course/ai-principles-and-practice',
    linkLabel: 'Open the course on Tutors',
  },
];
