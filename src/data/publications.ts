import type { ThemeId } from './themes';

// The full publication list, newest first.
// Sources: Dr Dey's CV and DBLP (via csauthors.net), November 2026.
// This is a selected list; the complete record is on Google Scholar and SETU Pure.
// To add a paper, copy an entry and edit it. `type` controls the filter buttons;
// `themes` connects it to the research themes in themes.ts.
// Optional: add `url: 'https://doi.org/...'` to make the title a link.

export type PubType = 'journal' | 'conference' | 'chapter' | 'preprint' | 'thesis';

export interface Publication {
  year: number;
  title: string;
  authors: string[];
  venue: string;
  details?: string; // volume, issue, pages, location
  type: PubType;
  themes: ThemeId[];
  url?: string;
}

const ME = 'Indrakshi Dey';
const NM = 'Nicola Marchetti';
const GM = 'Geoffrey G. Messier';
const SM = 'Sebastian Magierowski';
const SS = 'Shama Siddiqui';
const AK = 'Anwar Ahmed Khan';
const FN = 'Farid Naït-Abdesselam';
const IC = 'Ilias Cherkaoui';
const MH = 'Mohamed Khalafalla Hassan';
const DAIRY = ['Surya Jayakumar', 'Kieran Sullivan', 'John McLaughlin', "Christine O'Meara", ME];

export const PUBLICATIONS: Publication[] = [
  // 2026
  { year: 2026, type: 'journal', themes: ['quantum', 'edge'], authors: [IC, 'Ciaran Clarke', 'Jerry Horgan', ME],
    title: 'Categorical Framework for Quantum-Resistant Zero-Trust AI Security',
    venue: 'Scientific Reports', details: 'vol. 16, art. 7030',
    url: 'https://arxiv.org/abs/2511.21768' },
  { year: 2026, type: 'journal', themes: ['iot'], authors: [ME, NM],
    title: 'Optimized Topology Control for Large-Scale IoT Networks using Graph-Based Localization',
    venue: 'Scientific Reports', details: 'vol. 16, art. 13810',
    url: 'https://doi.org/10.1038/s41598-026-43621-6' },
  { year: 2026, type: 'journal', themes: ['edge'], authors: DAIRY,
    title: 'Spatio-temporal graph neural networks for dairy farm sustainability forecasting and strategic scenario analysis',
    venue: 'Discover Artificial Intelligence' },
  { year: 2026, type: 'journal', themes: ['networks'], authors: [ME, MH, 'Sayanti Ghosh', NM],
    title: 'Degeneracy-Aware Robustness Metrics for Heterogeneous Wireless Networks',
    venue: 'IEEE Wireless Communications Letters', details: 'accepted',
    url: 'https://arxiv.org/abs/2506.19974' },
  { year: 2026, type: 'journal', themes: ['networks'], authors: ['Debjani Goswami', ME, NM, 'Suvra Sekhar Das'],
    title: 'Distributed Time Synchronization in NOMA-Assisted Ultra-Dense Networks',
    venue: 'IEEE Transactions on Emerging Topics in Computing', details: 'vol. 14, no. 1, pp. 222–239',
    url: 'https://arxiv.org/abs/2504.04195' },
  { year: 2026, type: 'journal', themes: ['foundations'], authors: ['Yan Zhang', ME, NM],
    title: 'Blockage-Aware Hierarchical Codebook Design for RIS-Assisted Movable Antenna Systems',
    venue: 'IEEE Open Journal of the Communications Society', details: 'vol. 7, pp. 3094–3112',
    url: 'https://ieeexplore.ieee.org/document/11450412' },
  { year: 2026, type: 'journal', themes: ['networks'], authors: [MH, IC, 'Ibrahim Y. Alshareef', 'Habib Hamam', ME],
    title: 'RSDD: Resilient Statistical Drift Detection for vSDN Hypervisors',
    venue: 'IEEE Networking Letters' },
  { year: 2026, type: 'conference', themes: ['iot'], authors: ['Nirmal D. Wickramasinghe', ME, 'Dirk Pesch', 'John Dooley'],
    title: 'Epistemology-Inspired Bayesian Games for Distributed IoT Uplink Power Control',
    venue: 'IEEE International Conference on Communications (ICC)' },
  { year: 2026, type: 'conference', themes: ['quantum'],
    authors: ['Athira Kalavampara Raghunadhan', 'Matheus Guedes de Andrade', 'Don Towsley', ME, 'Daniel C. Kilper', NM],
    title: 'Measurement Strategies and Estimation Precision in Quantum Network Tomography',
    venue: 'IEEE International Conference on Communications (ICC)' },
  { year: 2026, type: 'conference', themes: ['quantum', 'networks'], authors: [IC, ME],
    title: 'Dyadic-Chaotic Lifting S-Boxes for Enhanced Physical-Layer Security within 6G Networks',
    venue: 'IEEE International Conference on Communications (ICC)', details: 'Glasgow, UK',
    url: 'https://arxiv.org/abs/2511.12325' },
  { year: 2026, type: 'preprint', themes: ['networks'], authors: ['Priyalakshmi Sheela', ME],
    title: 'Drift-Aware RL-based Wavelet Denoising for Network-Traffic Anomaly Detection',
    venue: 'arXiv preprint' },
  { year: 2026, type: 'preprint', themes: ['edge'], authors: ['Rahul Umesh Mhapsekar', IC, 'Lizy Abraham', ME],
    title: 'Adaptive Utility driven Resource Orchestration for Resilient AI (AURORA-AI)',
    venue: 'arXiv preprint' },
  { year: 2026, type: 'preprint', themes: ['edge'], authors: DAIRY,
    title: 'Agent-Based Modeling of Low-Emission Fertilizer Adoption for Dairy Farm Decarbonisation using Empirical Farm Data',
    venue: 'arXiv preprint' },
  { year: 2026, type: 'preprint', themes: ['networks'], authors: [MH, ME],
    title: 'Degeneracy-Aware Functional and Algorithmic Resilience in Virtualized 6G Networks Under Correlated Failures',
    venue: 'arXiv preprint' },

  // 2025
  { year: 2025, type: 'journal', themes: ['iot'], authors: ['Nirmal D. Wickramasinghe', 'John Dooley', 'Dirk Pesch', ME],
    title: 'Auction-Based Adaptive Resource Allocation Optimization in Dense and Heterogeneous IoT Networks',
    venue: 'IEEE Internet of Things Journal', details: 'vol. 12, no. 24, pp. 55436–55456',
    url: 'https://doi.org/10.1109/JIOT.2025.3624456' },
  { year: 2025, type: 'journal', themes: ['iot'], authors: [AK, SS, 'Ahmad Sami Al-Shamayleh', 'Adnan Akhunzada', ME],
    title: 'DFROG-MAC: A Dynamic Fragmentation-Based MAC for Prioritised Emergency Data Management in Vehicular Networks',
    venue: 'IET Wireless Sensor Systems' },
  { year: 2025, type: 'journal', themes: ['quantum'], authors: [ME, NM],
    title: 'Quantum teleportation in higher dimension and entanglement distribution via quantum switches',
    venue: 'IET Quantum Communication' },
  // The three 2025 conference venues below were cut short in the source. Check and complete them.
  { year: 2025, type: 'conference', themes: ['health'], authors: [AK, SS, 'Mehar Ullah', ME],
    title: 'IoT-Enabled Sleep Monitoring and Cognitive Assessment for Evaluating Teacher Well-Being',
    venue: 'International Conference on Networking…' },
  { year: 2025, type: 'conference', themes: ['foundations'], authors: ['Yan Zhang', ME, NM],
    title: 'RIS-Aided Wireless Communication With Movable Elements: Geometry Impact on Performance',
    venue: '5th International Conference on Electrical…' },
  { year: 2025, type: 'conference', themes: ['health'], authors: [SS, ME],
    title: 'Optimizing Next Generation Wireless BAN with Prioritized Access for Heterogeneous Traffic',
    venue: 'International Conference on Computer…' },
  { year: 2025, type: 'conference', themes: ['iot'], authors: [AK, FN, ME],
    title: 'Next-Generation MAC Technique for Priority Handling in Industrial Cyber-Physical Systems',
    venue: 'International Conference on Computer…' },
  { year: 2025, type: 'preprint', themes: ['edge'], authors: DAIRY,
    title: 'Spatio-Temporal Graph Neural Networks for Dairy Farm Sustainability Forecasting and Counterfactual Policy Analysis',
    venue: 'arXiv preprint' },
  { year: 2025, type: 'preprint', themes: ['networks'], authors: [ME, IC, MH],
    title: 'Wavelet-Packet-based Noise Signatures With Higher-Order Statistics for Anomaly Prediction',
    venue: 'arXiv preprint', url: 'https://arxiv.org/abs/2512.12528' },
  { year: 2025, type: 'preprint', themes: ['quantum'], authors: [IC, ME],
    title: 'Engel p-adic Isogeny-based Cryptography over Laurent Series: Foundations, Security, and an ESP32 Implementation',
    venue: 'arXiv preprint', url: 'https://arxiv.org/abs/2511.20533' },
  { year: 2025, type: 'preprint', themes: ['quantum'], authors: [IC, ME],
    title: 'QMA Complete Quantum-Enhanced Kyber: Provable Security Through CHSH Nonlocality',
    venue: 'arXiv preprint', url: 'https://arxiv.org/abs/2511.12318' },
  { year: 2025, type: 'preprint', themes: ['iot'], authors: [AK, SS, ME],
    title: 'Traffic Prioritization Mechanisms for Mission and Time Critical Applications in Industrial Internet of Things',
    venue: 'arXiv preprint' },
  { year: 2025, type: 'preprint', themes: ['edge'], authors: ['Jack Jackman', 'David Ryan', 'Arun Narayanan', 'Pedro H. J. Nardelli', ME],
    title: 'Edge-to-Cloud Computations-as-a-Service in Software-Defined Energy Networks for Smart Grids',
    venue: 'arXiv preprint', details: 'under revision, IEEE Transactions on Parallel and Distributed Systems',
    url: 'https://arxiv.org/abs/2510.11286' },
  { year: 2025, type: 'preprint', themes: ['networks'], authors: ['Sihem Bakri', ME, 'Harun Siljak', 'Marco Ruffini', NM],
    title: 'Mitigating xApp conflicts for efficient network slicing in 6G O-RAN: a graph convolutional-based attention network approach',
    venue: 'arXiv preprint' },
  { year: 2025, type: 'preprint', themes: ['quantum'], authors: [IC, 'S. Belabssir', 'Jerry Horgan', ME],
    title: 'Quasi-cyclic Linear Error-Block Code-based Post-quantum Signature',
    venue: 'arXiv preprint' },
  { year: 2025, type: 'preprint', themes: ['quantum'], authors: [IC, 'Ciaran Clarke', 'Jerry Horgan', ME],
    title: 'Zero-Trust Post-quantum Cryptography Implementation Using Category Theory',
    venue: 'IACR Cryptology ePrint Archive' },
  { year: 2025, type: 'preprint', themes: ['quantum'], authors: [IC, 'Ciaran Clarke', ME],
    title: 'Engel p-adic Supersingular Isogeny-based Cryptography over Laurent series',
    venue: 'IACR Cryptology ePrint Archive' },

  // 2024
  { year: 2024, type: 'journal', themes: ['edge'], authors: ['Rahul Umesh Mhapsekar', 'Steven Davy', 'Lizy Abraham', ME],
    title: 'Application Adaptive Light-Weight Deep Learning (AppAdapt-LWDL) Framework for Enabling Edge Intelligence in Dairy Processing',
    venue: 'IEEE Transactions on Mobile Computing', url: 'https://doi.org/10.1109/TMC.2024.3475634' },
  { year: 2024, type: 'journal', themes: ['quantum'], authors: [ME, NM, 'Marcello Caleffi', 'Angela Sara Cacciapuoti'],
    title: 'Quantum Game Theory Meets Quantum Networks',
    venue: 'IEEE Wireless Communications', details: 'vol. 31, no. 4, pp. 90–96',
    url: 'https://doi.org/10.1109/MWC.001.2300288' },
  { year: 2024, type: 'journal', themes: ['health'], authors: [AK, SS, ME],
    title: 'Enhancing Health Risk Prediction in Internet of Medical Things: Leveraging Association Rule Mining',
    venue: 'Journal of Universal Computer Science' },
  { year: 2024, type: 'journal', themes: ['health'], authors: [SS, AK, 'Muhammad Shoaib Siddiqui', ME],
    title: 'Enhanced Accuracy and Real-Time Monitoring: A Hybrid Communication Architecture for Fertility Monitoring',
    venue: 'Journal of Computer Networks and Communications' },
  { year: 2024, type: 'journal', themes: ['health'], authors: [SS, AK, FN, 'Shamsul Arfeen Qasmi', 'Adnan Akhundzada', ME],
    title: 'Towards assessing reliability of next-generation Internet of Things dashboard for anxiety risk classification',
    venue: 'IET Wireless Sensor Systems', details: 'vol. 14, no. 6, pp. 396–409',
    url: 'https://doi.org/10.1049/wss2.12090' },
  { year: 2024, type: 'conference', themes: ['quantum'],
    authors: ['Athira Kalavampara Raghunadhan', 'Matheus Guedes de Andrade', 'Don Towsley', ME, 'Daniel C. Kilper', NM],
    title: 'Optimal Monitor Placement in Quantum Network Tomography',
    venue: 'IEEE International Conference on Quantum Computing and Engineering (QCE)' },
  { year: 2024, type: 'preprint', themes: ['health'], authors: ['Malik Faizan', 'P. J. White', ME],
    title: 'Automated Music Therapy for Anxiety and Depression Management in Older People (AMITY)',
    venue: 'arXiv preprint' },
  { year: 2024, type: 'preprint', themes: ['edge'], authors: ['Darren Leniston', 'David Ryan', 'Ciaran Malone', ME],
    title: 'A Distributed Edge FLISR Solution & Network Simulation Test Platform',
    venue: 'arXiv preprint' },

  // 2023
  { year: 2023, type: 'journal', themes: ['iot'], authors: [ME, NM],
    title: 'Space-Time- and Frequency- Spreading for Interference Minimization in Dense IoT',
    venue: 'IEEE Internet of Things Magazine', details: 'vol. 6, no. 1, pp. 148–153',
    url: 'https://doi.org/10.1109/IOTM.001.2200174' },
  { year: 2023, type: 'journal', themes: ['foundations'], authors: [ME, NM],
    title: 'Channel Emulator Framework for Underwater Acoustic Communications',
    venue: 'Applied Sciences', details: 'vol. 13, no. 9, 5818' },
  { year: 2023, type: 'conference', themes: ['quantum'], authors: [ME, 'Harun Siljak', NM],
    title: 'Classical Capacity of Arbitrarily Distributed Noisy Quantum Channels',
    venue: 'IEEE International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC)', details: 'Toronto, Canada' },
  { year: 2023, type: 'conference', themes: ['iot'], authors: [ME, NM],
    title: 'IoT Localization and Optimized Topology Extraction Using Eigenvector Synchronization',
    venue: 'IEEE International Conference on Industrial and Information Systems (ICIIS)', details: 'Peradeniya, Sri Lanka, pp. 424–429' },
  { year: 2023, type: 'conference', themes: ['iot'], authors: ['Nirmal D. Wickramasinghe', ME],
    title: 'Transmit Power Optimization of IoT Devices over Incomplete Channel Information',
    venue: 'IEEE Global Communications Conference (GLOBECOM)', details: 'Kuala Lumpur, Malaysia, pp. 6213–6218',
    url: 'https://doi.org/10.1109/GLOBECOM54140.2023.10437180' },
  { year: 2023, type: 'preprint', themes: ['quantum'], authors: [ME, NM],
    title: 'Entanglement Distribution and Quantum Teleportation in Higher Dimension over the Superposition of Causal Orders of Quantum Channels',
    venue: 'arXiv preprint' },

  // 2022
  { year: 2022, type: 'conference', themes: ['iot'], authors: [ME, NM],
    title: 'Wavelet Packet Division Multiplexing (WPDM)-Aided Industrial WSNs',
    venue: 'IEEE International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC)', details: 'Tokyo, Japan' },
  { year: 2022, type: 'chapter', themes: ['health'], authors: [SS, AK, ME],
    title: 'Body sensor networks: recent advances and challenges',
    venue: 'Wireless Mesh Networks for IoT and Smart Cities: Technologies and Applications' },
  { year: 2022, type: 'chapter', themes: ['iot'], authors: [ME, 'George A. Ropokis', NM],
    title: 'Artificial intelligence-aided resource sharing for wireless mesh networks',
    venue: 'Wireless Mesh Networks for IoT and Smart Cities: Technologies and Applications' },
  { year: 2022, type: 'preprint', themes: ['quantum'], authors: ['Mouli Chakraborty', 'Harun Siljak', ME, NM],
    title: 'Joint Modelling of Quantum and Classical Noise over Unity Quantum Channel',
    venue: 'arXiv preprint' },
  { year: 2022, type: 'preprint', themes: ['health'], authors: [SS, AK, 'Qammer H. Abbasi', 'Muhammad Ali Imran', ME],
    title: 'A Nano-Architecture for Fertility Monitoring via Intra-body Communication',
    venue: 'arXiv preprint' },

  // 2021
  { year: 2021, type: 'journal', themes: ['foundations'], authors: [ME, 'Hem Dutt Joshi', NM],
    title: 'Space-Time Spreading Aided Distributed MIMO-WSNs',
    venue: 'IEEE Communications Letters', details: 'vol. 25, no. 4, pp. 1338–1342' },
  { year: 2021, type: 'journal', themes: ['health'], authors: [SS, 'Muhammad Zeeshan Shakir', AK, ME],
    title: 'Internet of Things (IoT) Enabled Architecture for Social Distancing During Pandemic',
    venue: 'Frontiers in Communications and Networks' },
  { year: 2021, type: 'journal', themes: ['foundations'], authors: [ME],
    title: 'Air-to-Water Network for Emergency Response in Coastal Communities',
    venue: 'Academia Letters', details: 'Article 908' },
  { year: 2021, type: 'conference', themes: ['health'], authors: [SS, AK, 'Kapal Dev', ME],
    title: 'Integrating federated learning with IoMT for managing obesity in smart city',
    venue: '1st Workshop on AI and Blockchain Technologies for Smart Cities with 6G (6G-ABS), ACM MobiCom',
    details: 'New Orleans, USA, pp. 7–12', url: 'https://doi.org/10.1145/3477084.3484950' },
  { year: 2021, type: 'conference', themes: ['health'], authors: [AK, SS, 'Shahid Munir Shah', FN, ME],
    title: 'Comparing ANN and SVM Algorithms for Predicting Exercise Routines of Diabetic Patients',
    venue: 'International Wireless Communications and Mobile Computing Conference (IWCMC)' },
  { year: 2021, type: 'conference', themes: ['health'], authors: [SS, AK, FN, ME],
    title: 'Anxiety and Depression Management for Elderly Using Internet of Things and Symphonic Melodies',
    venue: 'IEEE International Conference on Communications (ICC)', details: 'Montreal, Canada' },
  { year: 2021, type: 'conference', themes: ['health'], authors: [SS, FN, AK, ME],
    title: 'Enabling Real-Time Dashboards for Anxiety Risk Classification Using the Internet of Things',
    venue: 'IEEE Global Communications Conference (GLOBECOM)', details: 'Madrid, Spain' },
  { year: 2021, type: 'conference', themes: ['iot'], authors: [SS, AK, FN, ME],
    title: 'A Bayesian Game Model for Dynamic Channel Sensing Intervals in Internet of Things',
    venue: 'IEEE Global Communications Conference (GLOBECOM)', details: 'Madrid, Spain' },

  // 2020
  { year: 2020, type: 'journal', themes: ['foundations'], authors: [ME, 'Domenico Ciuonzo', 'Pierluigi Salvo Rossi'],
    title: 'Wideband Collaborative Spectrum Sensing Using Massive MIMO Decision Fusion',
    venue: 'IEEE Transactions on Wireless Communications', details: 'vol. 19, no. 8, pp. 5246–5260',
    url: 'https://doi.org/10.1109/TWC.2020.2991113' },
  { year: 2020, type: 'journal', themes: ['foundations'], authors: [ME, 'Pierluigi Salvo Rossi', 'Muhammad Majid Butt', NM],
    title: 'Experimental Analysis of Wideband Spectrum Sensing Networks Using Massive MIMO Testbed',
    venue: 'IEEE Transactions on Communications', details: 'vol. 68, no. 9, pp. 5390–5405',
    url: 'https://doi.org/10.1109/TCOMM.2020.2998544' },
  { year: 2020, type: 'journal', themes: ['iot'],
    authors: ['Muhammad Majid Butt', ME, 'Merim Dzaferagic', 'Maria Murphy', 'Nicholas J. Kaminski', NM],
    title: 'Agent-Based Modeling for Distributed Decision Support in an IoT Network',
    venue: 'IEEE Internet of Things Journal', details: 'vol. 7, no. 8, pp. 6919–6931' },
  { year: 2020, type: 'preprint', themes: ['foundations'], authors: [ME, 'Hem Dutt Joshi', NM],
    title: 'Decision Fusion in Space-Time Spreading aided Distributed MIMO WSNs',
    venue: 'arXiv preprint' },

  // 2019
  { year: 2019, type: 'journal', themes: ['foundations'], authors: [ME, 'Muhammad Majid Butt', NM],
    title: 'Throughput Analysis for Virtual MIMO WSNs Over Measured MIMO Channels',
    venue: 'IEEE Transactions on Instrumentation and Measurement' },

  // 2018
  { year: 2018, type: 'conference', themes: ['foundations'], authors: [ME, 'Zhixing Zhao', 'Muhammad Majid Butt', NM],
    title: 'Compact Full-Duplex Amplify-and-Forward Relay Design for 5G Applications',
    venue: 'IEEE International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC)' },
  { year: 2018, type: 'conference', themes: ['foundations'], authors: [ME, GM, SM],
    title: 'On Combined Rate and Power Adaptation for Indoor Wireless Environments',
    venue: 'IEEE International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC)' },

  // 2017
  { year: 2017, type: 'journal', themes: ['foundations'], authors: [ME, GM, SM],
    title: 'Average Error Rates and Achievable Capacity in Large Office Indoor Wireless Environments',
    venue: 'IEEE Transactions on Communications' },
  { year: 2017, type: 'journal', themes: ['foundations'], authors: [ME, 'Pierluigi Salvo Rossi'],
    title: 'Probability of Outage Due to Self-Interference in Indoor Wireless Environments',
    venue: 'IEEE Communications Letters' },
  { year: 2017, type: 'preprint', themes: ['foundations'], authors: [ME, GM, SM],
    title: 'Adaptive M-QAM for Indoor Wireless Environments: Rate & Power Adaptation',
    venue: 'arXiv preprint' },

  // 2016
  { year: 2016, type: 'journal', themes: ['foundations'], authors: [ME, 'Theodoros A. Tsiftsis', 'Corbett Rowell'],
    title: 'Achievable Channel Cutoff Rate and Bandwidth Efficiency in Indoor Wireless Environments',
    venue: 'IEEE Transactions on Vehicular Technology' },
  { year: 2016, type: 'journal', themes: ['foundations'], authors: [ME, GM, SM],
    title: 'On the Capacity of Joint Fading and Two-Path Shadowing Channels',
    venue: 'IEEE Transactions on Vehicular Technology' },
  { year: 2016, type: 'conference', themes: ['foundations'], authors: [ME, GM, SM],
    title: 'Adaptive Modulation and Coding for Large Open Office Indoor Wireless Environments',
    venue: 'IEEE 84th Vehicular Technology Conference (VTC)' },
  { year: 2016, type: 'conference', themes: ['foundations'], authors: [ME, 'Ronald Y. Chang'],
    title: 'Adaptive coded modulation for mobility constrained indoor wireless environments',
    venue: 'IEEE International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC)' },

  // 2015
  { year: 2015, type: 'thesis', themes: ['foundations'], authors: [ME],
    title: 'Propagation Model and Performance Analysis for Mobility Constrained Indoor Wireless Environments',
    venue: 'PhD thesis, University of Calgary' },

  // 2014
  { year: 2014, type: 'journal', themes: ['foundations'], authors: [ME, GM, SM],
    title: 'Fading Statistics for the Joint Fading and Two Path Shadowing Channel',
    venue: 'IEEE Wireless Communications Letters' },
  { year: 2014, type: 'conference', themes: ['foundations'], authors: [ME, GM, SM],
    title: 'Performance Analysis of BPSK over Joint Fading and Two-Path Shadowing Channels',
    venue: 'IEEE 80th Vehicular Technology Conference (VTC)' },
  { year: 2014, type: 'conference', themes: ['foundations'], authors: [ME, GM, SM],
    title: 'The Cumulative Distribution Function for the Joint Fading and Two Path Shadowing Channel: Expression and Application',
    venue: 'IEEE 80th Vehicular Technology Conference (VTC)' },
  { year: 2014, type: 'conference', themes: ['foundations'], authors: [ME, GM, SM],
    title: 'Pairwise error probability of turbo codes over joint fading and two-path shadowing channels',
    venue: 'IEEE Global Communications Conference (GLOBECOM)' },

  // 2011
  { year: 2011, type: 'conference', themes: ['foundations'], authors: ['Peichang Zhang', ME, 'Shinya Sugiura', 'Sheng Chen'],
    title: 'Semi-Blind Adaptive Space-Time Shift Keying Systems Based on Iterative Channel Estimation and Data Detection',
    venue: 'IEEE 73rd Vehicular Technology Conference (VTC)' },
];

export const TYPE_LABELS: Record<PubType, string> = {
  journal: 'Journal articles',
  conference: 'Conference papers',
  chapter: 'Book chapters',
  preprint: 'Preprints',
  thesis: 'Thesis',
};

export const SELF = ME;

// Totals from Dr Dey's CV (November 2026), shown on the Publications page.
export const PUB_STATS = [
  { value: 45, label: 'journal papers', note: '26 as first author' },
  { value: 36, label: 'conference papers', note: '16 as first author' },
  { value: 4, label: 'research monographs' },
  { value: 7, label: 'book chapters' },
  { value: 2, label: 'contracted single-author books' },
];
