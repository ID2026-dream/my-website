// Funded projects and fellowships. Sources: Dr Dey's CVs (2026), the CORDIS
// records of the Horizon Europe projects, and the project websites.

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
  tier?: 'major' | 'other'; // 'other' projects are shown in a compact list
}

/** Anchor for a project on the Research page, e.g. 'q-fence'. */
export const projectId = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Shown above the project list.
export const PORTFOLIO =
  'Dr Dey is currently Coordinator or Principal Investigator on Horizon Europe grants (including MSCA Doctoral Networks and an MSCA Staff Exchange), Research Ireland grants, Enterprise Ireland grants and Higher Education Authority grants.';

export const PROJECTS: Project[] = [
  {
    name: 'QUESTING',
    fullName: 'Designing, Managing and Debugging Quantum Networks',
    icon: 'cap',
    color: '#6a4bc4',
    funder: 'Horizon Europe, MSCA Doctoral Network (grant 101227218, EU contribution €4.55M)',
    role: 'Coordinator',
    period: 'December 2025 to November 2029',
    summary:
      'Trains 15 doctoral candidates as innovators in quantum networks, hybrid classical–quantum systems and co-design, with eight other universities and 11 associated partners including Airbus Defence and Space, BT and Telecom Italia. Research covers entanglement optimisation, fault-tolerant design and resource-efficient hybrid systems, using small-world network models, Bayesian optimisation and quantum game theory.',
    links: [
      { label: 'Project website', href: 'https://questing-project.eu/' },
      { label: 'CORDIS record', href: 'https://cordis.europa.eu/project/id/101227218' },
    ],
  },
  {
    name: 'Q-FENCE',
    fullName: 'Securing Tomorrow’s Digital Infrastructure with Quantum-Resistant Cryptography',
    icon: 'lock',
    color: '#1f6bc2',
    funder: 'Horizon Europe, Cluster 3 Cybersecurity (grant 101225708, EU contribution €5.31M)',
    role: 'Coordinator',
    period: 'November 2025 to October 2028',
    summary:
      'Builds a dual-layer framework that combines classical encryption with post-quantum cryptography, so that finance, healthcare, smart cities, satellite and enterprise networks can migrate in phases without breaking legacy systems. Partners include Politecnico di Torino, the University of Luxembourg, Toshiba Europe, Red Hat, Fraunhofer and Telespazio.',
    links: [
      { label: 'Project website', href: 'https://www.qfence-project.eu/' },
      { label: 'CORDIS record', href: 'https://cordis.europa.eu/project/id/101225708' },
    ],
  },
  {
    name: 'BRAINET',
    fullName: 'Networked Distributed Neural Interfaces for Interference-Based Brain Stimulation',
    icon: 'pulse',
    color: '#9b3d8f',
    funder: 'Horizon Europe, MSCA Doctoral Network (grant 101225775, EU contribution €4.36M)',
    role: 'Principal Investigator at SETU',
    period: 'January 2026 to December 2029',
    summary:
      'Develops skull-implantable stimulation hubs that form a self-organising wireless network, as a less invasive alternative to deep brain stimulation. SETU contributes the wireless architectures and cross-layer optimisation, and hosts the doctoral project on self-optimising and self-healing implant networks. Coordinated by the Medical Center – University of Freiburg.',
    links: [
      { label: 'Project website', href: 'https://www.brainet-dn.eu/' },
      { label: 'CORDIS record', href: 'https://cordis.europa.eu/project/id/101225775' },
    ],
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
    links: [{ label: 'CORDIS record', href: 'https://cordis.europa.eu/project/id/101157151' }],
  },
  {
    name: 'COALESCE',
    fullName: 'Joint Optimization of Data and Energy Networks for Digitizing Sustainable Communities',
    icon: 'bolt',
    color: '#b86e0b',
    funder: 'Horizon Europe, MSCA Staff Exchanges (grant 101130739, EU contribution €1.59M)',
    role: 'Coordinator',
    period: 'December 2023 to November 2027',
    summary:
      'Jointly optimises energy grids and telecommunication networks, which depend on each other, with partners in Ireland, Cyprus, Finland and Portugal. It produced the first quantification of the energy deficits of the wireless access layer: 20–40% of airtime is spent on pilots and synchronisation overhead, roughly 100 TWh of lost energy a year.',
    links: [{ label: 'CORDIS record', href: 'https://cordis.europa.eu/project/id/101130739' }],
  },
  {
    name: 'PlastG',
    fullName: 'Plasticity and Autonomous Adaptation of Wireless Networks in Support of Trustworthy 6G',
    icon: 'network',
    color: '#0a6a83',
    funder: 'Research Ireland, US–Ireland R&D Partnership Programme (€348,288)',
    role: 'Coordinator',
    period: 'From November 2024',
    summary:
      'Designs 6G networks that keep working under severe resource constraints and unexpected disruption, with metrics that quantify resilience and the interchangeability (fungibility) of network resources.',
  },
  {
    name: 'CoQREATE',
    fullName: 'Convergent Quantum Research Alliance in Telecommunications',
    icon: 'quantum',
    color: '#5a3fa0',
    funder: 'Research Ireland, US–Ireland Centre-to-Centre programme (€200,000)',
    period: 'From August 2022',
    summary: 'A US–Ireland research alliance on quantum networks, including quantum network tomography.',
  },
  {
    name: 'AIQ-Shield',
    fullName: 'Quantum-Proofing AI: A Zero Trust Approach',
    icon: 'shield',
    color: '#2e5d9f',
    funder: 'TU RISE Postdoctoral Fellowship (€123,373)',
    period: 'From October 2024',
    summary: 'A postdoctoral fellowship on protecting AI systems against quantum-era attacks with zero-trust, post-quantum cryptography.',
  },
  {
    name: 'ANODE',
    fullName: 'AI-aided Wavelet Transform for Denoising Signals',
    icon: 'wave',
    color: '#0b8783',
    funder: 'Research Ireland platform funding through CONNECT (€176,000)',
    period: 'From July 2024',
    summary: 'Uses AI-aided wavelet transforms to separate signal from noise, with applications to anomaly detection in network traffic.',
  },
  {
    name: 'MARSDEN',
    fullName: 'Adaptive Maritime Guardianship through Advanced Noise Processing',
    icon: 'sensor',
    color: '#1d5f7a',
    funder: 'Research Ireland Future Innovator Prize programme (€193,689)',
    period: 'From December 2024',
    summary: 'Treats noise as a resource: advanced noise processing for maritime situational awareness.',
  },
  {
    name: 'AgNav',
    fullName:
      'Industry-level data integration and development of a digital sustainability platform and decision support tool for agricultural production systems in Ireland',
    icon: 'globe',
    color: '#3f8a2e',
    funder: 'Department of Agriculture, Food and the Marine, 2023 Thematic Research Call',
    period: 'From March 2024',
    summary:
      'Extends AgNav, the national farm sustainability platform developed by Teagasc, Bord Bia and the Irish Cattle Breeding Federation, with industry-level data integration and decision support. Coordinated by Teagasc.',
    links: [{ label: 'About AgNav (Teagasc)', href: 'https://teagasc.ie/news--events/daily/funding-awarded-to-increase-agnav-scope/' }],
  },
  {
    name: 'GreenSphere',
    fullName: 'Sustainable AI Evolution for Social Media Management',
    icon: 'globe',
    color: '#3f8a2e',
    funder: 'Enterprise Ireland Innovation Partnership (€120,830)',
    period: '2025',
    summary: 'With Feedalpha, a replicable model for small and medium-sized enterprises adopting energy-efficient AI.',
  },
  {
    name: 'CONNECT',
    icon: 'nodes',
    color: '#0b8783',
    fullName: 'Taighde Éireann – Research Ireland Centre for Future Networks and Communications',
    funder: 'Research Ireland',
    role: 'Funded Investigator',
    period: '2022 to present',
    summary: 'National partnerships in future networks and communications, including the SETU–Trinity College Dublin collaboration.',
    links: [{ label: 'CONNECT profile', href: 'https://connectcentre.ie/people/indrakshi-dey' }],
  },

  // Other funded projects
  {
    name: 'SAtComm',
    fullName: 'Sustainable Atlantic Communities',
    icon: 'bolt',
    color: '#b86e0b',
    funder: 'Interreg Atlantic Area, European Regional Development Fund (€3.2M total)',
    period: '2023 to 2026',
    summary: 'Digital and legal tools that let energy communities in Ireland, France, Spain and Portugal manage their own energy profiles.',
    tier: 'other',
  },
  {
    name: 'SmartValveAI',
    icon: 'sensor',
    color: '#1d5f7a',
    funder: 'Enterprise Ireland Innovation Partnership (€290,000)',
    period: 'From August 2024',
    summary: 'With Carten Controls, a real-time condition-monitoring platform for predictive maintenance of valves.',
    tier: 'other',
  },
  {
    name: 'INTERFACING',
    fullName: 'Integrating Sensing and Communication (ISAC) for Advanced Applications',
    icon: 'building',
    color: '#566176',
    funder: 'Higher Education Authority, 2024 HEARG Capital Equipment Call (€217,250)',
    period: 'From October 2024',
    summary: 'Research equipment for integrated sensing and communication.',
    tier: 'other',
  },
  {
    name: 'ABM QuantumNet',
    icon: 'quantum',
    color: '#5a3fa0',
    funder: 'European Open Science Cloud (€3M)',
    period: 'From February 2024',
    summary: 'Agent-based modelling for quantum networks.',
    tier: 'other',
  },
];
