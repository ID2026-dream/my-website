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
  {
    title: 'The Evolution of Machine Learning and AI',
    level: 'Higher Diploma',
    summary:
      'How AI grew from symbolic reasoning to today’s generative systems. One week of history, then current directions: responsible AI as a design constraint, science-inspired models, transformers, scale-free and lean LLMs, and LLMs in software engineering. Part of the Certificate in AI and Machine Learning Engineering within the Higher Diploma in Computer Science.',
    facts: ['12 weeks', 'Level 8, 5 credits', 'Fully online', 'Assessment lead'],
    href: 'https://tutors.dev/course/aiml-evolution',
    linkLabel: 'Open the course on Tutors',
  },
];
