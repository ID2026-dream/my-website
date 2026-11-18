// Research themes. Each publication in publications.ts is tagged with one
// or more of these ids, which is how the counts and filters work.

export type ThemeId = 'quantum' | 'networks' | 'iot' | 'edge' | 'health' | 'foundations';

export interface Theme {
  id: ThemeId;
  title: string;
  summary: string; // one line, shown on cards
  description: string; // a short paragraph, shown on the Research page
  color: string;
  icon: string; // name of an icon in src/components/Icon.astro
}

export const THEMES: Theme[] = [
  {
    id: 'quantum',
    title: 'Quantum networks and secure communication',
    summary: 'Quantum channels, entanglement distribution and post-quantum cryptography.',
    description:
      'Capacity of noisy quantum channels, entanglement distribution and teleportation in higher dimensions, quantum network tomography and quantum game theory, alongside post-quantum and physical-layer security for the networks that will carry quantum and classical traffic side by side.',
    color: '#6a4bc4',
    icon: 'quantum',
  },
  {
    id: 'networks',
    title: 'Resilient, programmable 6G networks',
    summary: 'Robustness, self-healing and anomaly detection for softwarised networks.',
    description:
      'Degeneracy-aware robustness metrics, resilience under correlated failures, drift and anomaly detection for virtualised and software-defined networks, conflict mitigation in O-RAN, and synchronisation in ultra-dense deployments.',
    color: '#1f6bc2',
    icon: 'network',
  },
  {
    id: 'iot',
    title: 'Internet of Things and cyber-physical systems',
    summary: 'Dense IoT, game-theoretic resource allocation and industrial MAC design.',
    description:
      'Interference management, power control and resource allocation in dense IoT using game theory and auctions; localisation and topology control; and medium access designs that prioritise time-critical traffic in industrial and vehicular networks.',
    color: '#0b8783',
    icon: 'sensor',
  },
  {
    id: 'edge',
    title: 'Edge AI and digital twins',
    summary: 'Lightweight learning and forecasting for agriculture, food and energy.',
    description:
      'Light-weight deep learning for edge intelligence in dairy processing, graph neural networks and agent-based models for farm sustainability and decarbonisation, and edge-to-cloud computing for smart grids.',
    color: '#3f8a2e',
    icon: 'leaf',
  },
  {
    id: 'health',
    title: 'Connected health',
    summary: 'Internet of Medical Things, body-area networks and environmental health.',
    description:
      'Internet of Medical Things architectures for monitoring anxiety, fertility and chronic conditions, body-area and intra-body communication, and the links between environmental stressors and non-communicable disease.',
    color: '#c2456b',
    icon: 'pulse',
  },
  {
    id: 'foundations',
    title: 'Wireless propagation and signal processing',
    summary: 'Channel models, MIMO and spectrum sensing: the foundations of the work.',
    description:
      'Propagation models and performance bounds for indoor, underwater and full-duplex links, adaptive modulation, massive MIMO spectrum sensing and distributed MIMO sensor networks, and reconfigurable intelligent surfaces.',
    color: '#b86e0b',
    icon: 'wave',
  },
];
