// Research themes. Each publication in publications.ts is tagged with one
// or more of these ids, which is how the counts and filters work.

export type ThemeId = 'quantum' | 'networks' | 'iot' | 'edge' | 'health' | 'foundations';

export interface Theme {
  id: ThemeId;
  title: string;
  summary: string; // one line, shown on cards
  description: string; // a short paragraph, shown on the Research page
  color: string;
  icon: string; // an icon name from src/components/icon-data.ts, e.g. 'atom'
}

export const THEMES: Theme[] = [
  {
    id: 'quantum',
    title: 'Quantum networks and post-quantum security',
    summary: 'Quantum game theory, hybrid quantum channels and quantum-safe cryptography.',
    description:
      'Quantum game theory for network topology, the capacity of hybrid classical–quantum channels under joint Gaussian–Poisson noise, entanglement distribution and quantum network tomography. On the security side: Engel p-adic isogeny cryptography that runs on an ESP32, a category-theoretic framework for quantum-resistant zero-trust AI, and chaos-lifted S-boxes for physical-layer security in 6G.',
    color: '#6a4bc4',
    icon: 'atom',
  },
  {
    id: 'networks',
    title: 'Resilient, sustainable 6G networks',
    summary: 'Degeneracy as an engineerable resource, and the energy cost of wireless access.',
    description:
      'The first attempt to quantify degeneracy, the ability of structurally different elements to perform the same function, across protocol layers, giving the Degeneracy-Weighted Path Robustness and Multi-Layer Degeneracy Index. Also drift and anomaly detection for virtualised networks, distributed synchronisation in ultra-dense networks, and the energy deficits of the wireless access layer.',
    color: '#1f6bc2',
    icon: 'cell-tower',
  },
  {
    id: 'iot',
    title: 'Internet of Things and game-theoretic resource allocation',
    summary: 'Bayesian games, auctions and medium access for dense IoT.',
    description:
      'Bayesian games and epistemology-inspired decision-making under incomplete information, auction-based resource allocation for dense and heterogeneous IoT, interference minimisation by spreading across space, time and frequency, graph-based localisation and topology control, and medium access control for time-critical industrial traffic.',
    color: '#0b8783',
    icon: 'circuitry',
  },
  {
    id: 'edge',
    title: 'Trustworthy, efficient AI and agent-based models',
    summary: 'Edge intelligence, Koopman analysis and agent-based simulation.',
    description:
      'Application-adaptive light-weight deep learning for edge intelligence, Koopman-operator analysis that certifies collective reasoning in multi-agent AI systems, agent-based models of farm decarbonisation calibrated on empirical data, and edge-to-cloud computing for software-defined energy networks.',
    color: '#3f8a2e',
    icon: 'brain',
  },
  {
    id: 'health',
    title: 'AI platforms for health',
    summary: 'Health-risk prediction that starts from the right data.',
    description:
      'AI-driven risk prediction for non-communicable disease in the ENACT project; X-DASH, an IoT dashboard that classifies anxiety risk from heart rate, blood pressure and oxygen saturation, validated on about 500 cardiac-clinic patients with more than 90% agreement with their physicians; and federated learning with the Internet of Medical Things.',
    color: '#c2456b',
    icon: 'heartbeat',
  },
  {
    id: 'foundations',
    title: 'Wireless propagation and signal processing',
    summary: 'Propagation models, massive MIMO sensing and ambient noise as a resource.',
    description:
      'From doctoral work that challenged rigid stochastic propagation models, through waveform-level security for underwater acoustic channels and wideband collaborative spectrum sensing with massive MIMO decision fusion, to treating ambient radio noise as a computable resource and bringing p-adic number theory to wireless signal processing.',
    color: '#b86e0b',
    icon: 'wave-sine',
  },
];
