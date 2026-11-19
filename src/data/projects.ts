// Funded projects and fellowships. Source: Dr Dey's CV, November 2026.

export interface Project {
  name: string;
  fullName?: string;
  funder: string;
  role?: string;
  icon: string; // an icon name from src/components/Icon.astro
  color: string;
  period?: string;
  summary: string;
  links?: { label: string; href: string }[];
}

// Shown above the project list.
export const PORTFOLIO =
  'Dr Dey currently leads or co-leads 6 Horizon Europe grants (including an MSCA Doctoral Network and an MSCA Staff Exchange), 6 Research Ireland grants, 2 Enterprise Ireland grants and 3 Higher Education Authority grants.';

export const PROJECTS: Project[] = [
  {
    name: 'QUESTING',
    icon: 'cap',
    color: '#6a4bc4',
    funder: 'Horizon Europe, MSCA Doctoral Network',
    role: 'Coordinator',
    summary:
      'Trains 15 PhD researchers with nine universities and 13 industry partners, including Airbus Defence and Space, BT and Telecom Italia, and aims to set a European standard for doctoral training.',
  },
  {
    name: 'Q-FENCE',
    icon: 'lock',
    color: '#1f6bc2',
    funder: 'Horizon Europe',
    role: 'Coordinator',
    summary:
      'Delivers quantum-safe encryption for financial institutions, healthcare providers and government agencies ahead of the EU 2030 deadline, with 12 academic and industry partners.',
  },
  {
    name: 'ENACT',
    icon: 'sun',
    color: '#c2456b',
    fullName: 'Environmental Effect on Health Care and Wellbeing and Active Interventions',
    funder: 'Horizon Europe (HORIZON-HLTH-2024-ENVHLTH-02-06, grant 101157151)',
    role: 'Leads SETU’s contribution',
    period: '42 months',
    summary:
      'Builds an AI-driven risk score and platform to predict, monitor and prevent non-communicable diseases. The SETU team studies how prolonged exposure to air and light pollution accelerates oxidative stress and inflammation, using Bayesian modelling and transfer learning on space-time graph neural networks.',
    links: [{ label: 'Project record on CORDIS', href: 'https://cordis.europa.eu/project/id/101157151' }],
  },
  {
    name: 'COALESCE',
    icon: 'bolt',
    color: '#b86e0b',
    funder: 'Horizon Europe (€1.6M)',
    role: 'Coordinator',
    summary:
      'Produced the first quantification of the energy deficits of the wireless access layer: 20–40% of airtime is spent on pilots and synchronisation overhead, roughly 100 TWh of lost energy a year.',
  },
  {
    name: 'GreenSphere',
    icon: 'globe',
    color: '#3f8a2e',
    funder: 'Enterprise Ireland Innovation Partnership',
    period: '2025',
    summary: 'A replicable model for small and medium-sized enterprises adopting energy-efficient AI.',
  },
  {
    name: 'CONNECT',
    icon: 'nodes',
    color: '#0b8783',
    fullName: 'Research Ireland Centre for Future Networks',
    funder: 'Research Ireland',
    role: 'Funded Investigator',
    period: '2022 to present',
    summary: 'National partnerships in future networks and communications, including the SETU–Trinity College Dublin collaboration.',
    links: [{ label: 'CONNECT profile', href: 'https://connectcentre.ie/people/indrakshi-dey' }],
  },
];
