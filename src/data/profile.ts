// Career, qualifications, honours, service, outreach and supervision.
// Source: Dr Dey's CV, November 2026. Years left as '' are shown without a date.

export interface Entry {
  when: string;
  what: string;
  where: string;
  note?: string;
  href?: string;
}

// ---- Career to date (newest first) -------------------------------------
export const CAREER: Entry[] = [
  {
    when: '2026–present',
    what: 'Lecturer in Computer Science',
    where: 'Department of Computing and Mathematics, School of Science, South East Technological University',
  },
  {
    when: '2023–2026',
    what: 'Head of the Programmable Autonomous Systems (PAS) Division',
    where: 'Walton Institute, South East Technological University',
  },
  {
    when: '2022–present',
    what: 'Funded Investigator',
    where: 'CONNECT, the Taighde Éireann – Research Ireland Centre for Future Networks and Communications',
  },
  {
    when: '2019–present',
    what: 'Adjunct Assistant Professor',
    where: 'Trinity College Dublin',
  },
  {
    when: '2019–2022',
    what: 'Lecturer / Assistant Professor',
    where: 'National University of Ireland, Maynooth',
  },
  {
    when: '2017–2019',
    what: 'Marie Skłodowska-Curie (MSCA EDGE) Fellow',
    where: 'Trinity College Dublin',
  },
  {
    when: '2016–2017',
    what: 'ERCIM Postdoctoral Research Fellow',
    where: 'Norwegian University of Science and Technology (NTNU), Trondheim, Norway',
  },
  {
    when: '2015–2016',
    what: 'Research Fellow',
    where: 'Defence Research and Development Canada (DRDC), Halifax, Canada',
  },
];

// ---- Qualifications ----------------------------------------------------
export const EDUCATION: Entry[] = [
  {
    when: '2015',
    what: 'PhD in Electrical Engineering and Computer Science',
    where: 'University of Calgary, Canada',
    note: 'Thesis: Propagation Model and Performance Analysis for Mobility Constrained Indoor Wireless Environments',
  },
  { when: '2010', what: 'MSc in Wireless Communications', where: 'University of Southampton, UK' },
];

export const MEMBERSHIPS: Entry[] = [
  { when: '', what: 'Senior Member', where: 'IEEE' },
  { when: '', what: 'Elected Committee Member', where: 'IEEE Future Networks UK and Ireland Local Group' },
];

// ---- Awards, prizes and distinctions (newest first) ---------------------
export const AWARDS: Entry[] = [
  {
    when: '2026',
    what: 'Best Paper Award',
    where: 'IEEE International Conference on Communications (ICC), Glasgow, UK',
  },
  { when: '2020–2021', what: 'SSHN Grant', where: 'CentraleSupélec, Rennes, France' },
  {
    when: '2017–2020',
    what: 'Marie Skłodowska-Curie EDGE Fellowship',
    where: 'Trinity College Dublin, Ireland',
  },
  { when: '2016–2017', what: 'ERCIM Postdoctoral Fellowship', where: 'NTNU, Norway' },
  { when: '2015–2016', what: 'Academia Sinica Research Fellowship', where: 'Academia Sinica, Taiwan' },
  {
    when: '2012, 2013, 2014',
    what: 'Best Postgraduate Publication Award',
    where: 'University of Calgary, Canada',
  },
  {
    when: '2011–2015',
    what: 'TRTech Research Scholarship and Fellowships',
    where: 'University of Calgary, Canada',
  },
  {
    when: '2011–2014',
    what: 'NSERC Industrial Postgraduate Scholarships',
    where: 'University of Calgary, Canada',
  },
  { when: '2008–2010', what: 'MSc Student Scholarship', where: 'University of Southampton, UK' },
];

export const PATENTS = { count: 1 };

// ---- Service ------------------------------------------------------------
export const SERVICE_INSTITUTION: Entry[] = [
  {
    when: '2023–2026',
    what: 'Head of the Programmable Autonomous Systems (PAS) Division',
    where: 'Walton Institute, South East Technological University',
    note: 'Built and led a team of 21 technical leads, senior research fellows, postdoctoral fellows and PhD candidates, with a research agenda spanning data spaces, edge–cloud computing and network tomography.',
  },
  {
    when: '',
    what: 'Coordinator and Principal Investigator of European projects',
    where: 'Coordinator of QUESTING (MSCA Doctoral Network) and COALESCE; Principal Investigator on Q-FENCE (Horizon Europe)',
  },
];

export const SERVICE_DISCIPLINE: Entry[] = [
  {
    when: '',
    what: 'Expert Reviewer, Horizon Europe Excellence Pillar',
    where: 'European Research Council (ERC) and Marie Skłodowska-Curie Actions proposals',
  },
  {
    when: '',
    what: 'Elected Committee Member',
    where: 'IEEE Future Networks UK and Ireland Local Group',
  },
  {
    when: '',
    what: 'Journal reviewer',
    where: 'Nature portfolio (npj Quantum Information, Scientific Reports), Springer Discover Oceans and IEEE Transactions',
    note: 'Reviewing guided by DORA principles: rigour, reproducibility and community benefit rather than venue-level metrics.',
  },
];

export const SERVICE_SOCIETY: Entry[] = [
  {
    when: 'Since 2018',
    what: 'Senior Mentor, TeenTurn',
    where: 'Two-week summer work placements that encourage high-school girls into technology careers',
  },
  {
    when: '',
    what: 'Lead Judge, All-Ireland SciFest',
    where: 'Promoting participation of girls in science and technology',
  },
  { when: '', what: 'Academic Champion', where: 'Trinity Walton Club' },
  {
    when: '',
    what: 'Supporter of girls’ education and women’s empowerment',
    where: 'Plan Canada and United Way programmes in India, the Republic of Benin and Burkina Faso',
  },
];

// ---- Invited talks and guest lectures (newest first) ---------------------
export const TALKS: Entry[] = [
  {
    when: 'December 2025',
    what: 'Distinguished Speaker, EC 6G4Society Final Workshop',
    where: 'Geneva, Switzerland',
    note: 'Interconnection between the three sustainability dimensions: a holistic approach to sustainability.',
  },
  {
    when: 'October 2025',
    what: 'Distinguished Speaker, Sustainable Places 2025',
    where: 'Milan, Italy',
    note: 'Workshop: Towards Sustainable 6G, integrating environmental considerations in next-generation mobile networks.',
  },
  {
    when: 'June 2024',
    what: 'Distinguished Speaker, Sustainable Places 2024',
    where: 'Luxembourg City, Luxembourg',
    note: 'Workshop: Towards Sustainable 6G, integrating environmental considerations in next-generation mobile networks.',
  },
  {
    when: 'April 2021',
    what: 'Guest lecture, Emerging Topics in Computing',
    where: 'University of the West of Scotland, UK',
    note: 'IoT-based infrastructures for anxiety management during the pandemic.',
  },
  {
    when: 'March 2021',
    what: 'Guest lecture, Fundamentals of Engineering Design',
    where: 'Simon Fraser University, Canada',
    note: 'Fundamentals of electronic design.',
  },
  {
    when: 'November 2018',
    what: 'Guest lecture, Information and Communication Theory',
    where: 'Trinity College Dublin',
    note: 'Error control coding: a bird’s-eye view.',
  },
  {
    when: 'September 2018',
    what: 'Conference presentations, IEEE PIMRC 2018',
    where: 'IEEE International Symposium on Personal, Indoor and Mobile Radio Communications',
    note: 'Compact full-duplex amplify-and-forward relay design for 5G applications; combined rate and power adaptation for indoor wireless environments.',
  },
];

// ---- Outreach and media (newest first) ----------------------------------
export const OUTREACH: Entry[] = [
  {
    when: 'June 2025',
    what: 'CodeGirl and the Conversation: Women in Computing',
    where: 'CodeGirl panel series, The Machine podcast, SETU',
    note: 'A live-recorded panel after a screening of the CodeGirl documentary at SETU Waterford, for secondary school students exploring pathways into computing.',
    href: 'https://podcasts.setu.ie/?p=4912',
  },
  {
    when: 'November 2024',
    what: '“AI can only solve real-world problems with the right data”',
    where: 'Profile, Silicon Republic',
    note: 'Why reliable health AI depends on representative data and careful training to limit bias and protect privacy.',
    href: 'https://siliconrepublic.com/?p=1099171',
  },
  {
    when: 'March 2024',
    what: 'Autonomous Systems and Artificial Intelligence',
    where: 'Guest, The Machine podcast, SETU',
    note: 'How research in autonomous systems is progressing, why people tend to anthropomorphise AI, and her career to date.',
    href: 'https://setu.ie/news/podcast-9plus-autonomous-systems-amp-ai-with-dr-indrakshi-dey',
  },
  {
    when: '',
    what: 'Recurring features in Silicon Republic',
    where: 'Ireland’s technology news site',
    note: 'On US–Ireland research collaboration, the resilience future wireless networks will need, and leadership in defining next-generation standards.',
  },
  {
    when: '',
    what: 'Designing for the Unknown',
    where: 'Collaboration with Artists-in-Residence teams',
    note: 'A trans-disciplinary programme bridging abstract science and public understanding.',
  },
  {
    when: '',
    what: 'Recognition from Enterprise Ireland',
    where: 'Brief by Kevin Burke, National Director for Horizon Europe: “Ireland steps up to protect Europe’s digital activity”',
    note: 'Cites the team’s work on next-generation encryption for critical digital infrastructure as important to Ireland’s deep-tech strategy.',
  },
];

// ---- Team (PhD, Masters by Research and postdoctoral) ----------------------
// From the team return of November 2026. Only names, roles, institutions and
// dates are published; nothing personal from the return goes on the site.
export type TeamGroup = 'phd' | 'masters' | 'postdoc';

export interface Link {
  label: string; // e.g. 'ORCID', 'CONNECT profile', 'LinkedIn'
  href: string;
}

export interface Member {
  name: string;
  group: TeamGroup;
  start?: string; // YYYY-MM-DD, joined the team (may be unknown for graduates)
  end?: string; // YYYY-MM-DD, expected completion (students only)
  institution?: string; // only when it is not SETU
  topic?: string;
  role?: string; // e.g. 'Co-supervised with ...'
  note?: string;
  links?: Link[]; // the first link is also used on the person's name
  projects?: string[]; // project names from src/data/projects.ts
  funding?: string; // how the post is funded, if not by a listed project
  graduated?: string | true; // year the PhD thesis was defended, or true if the year isn't listed
  departed?: { date: string; destination: string };
}

export const TEAM_GROUPS: { id: TeamGroup; label: string; one: string }[] = [
  { id: 'phd', label: 'PhD students', one: 'PhD student' },
  { id: 'masters', label: 'Masters by Research students', one: 'Masters by Research student' },
  { id: 'postdoc', label: 'Postdoctoral fellows', one: 'Postdoctoral fellow' },
];

const orcid = (id: string): Link => ({ label: 'ORCID', href: `https://orcid.org/${id}` });
const scholar = (id: string): Link => ({ label: 'Google Scholar', href: `https://scholar.google.com/citations?user=${id}` });
const linkedin = (slug: string): Link => ({ label: 'LinkedIn', href: `https://www.linkedin.com/in/${slug}/` });

// Thesis and project titles come from Dr Dey's CV; other details from each
// person's public profile, the project websites or their papers with Dr Dey.
// Links are only given where the profile is clearly the same person.
export const TEAM: Member[] = [
  // PhD students
  {
    name: 'Nirmal D. Wickramasinghe',
    group: 'phd',
    start: '2023-01-01',
    end: '2026-12-31',
    institution: 'Maynooth University',
    topic: 'Bayesian game theory-based protocols for resource sharing among massive numbers of IoT devices',
    funding: 'Research Ireland platform funding through CONNECT',
    links: [
      { label: 'CONNECT profile', href: 'https://connectcentre.ie/people/nirmal-wickramasinghe' },
      scholar('qx-i8RMAAAAJ'),
      linkedin('nirmal-wickramasinghe'),
    ],
  },
  {
    name: 'Athira Kalavampara Raghunadhan',
    group: 'phd',
    start: '2023-01-15',
    end: '2026-12-15',
    institution: 'CONNECT, Trinity College Dublin',
    topic: 'Agent-based modelling for quantum network tomography',
    role: 'Co-supervised with Prof. Nicola Marchetti',
    projects: ['CoQREATE'],
    links: [
      { label: 'CONNECT profile', href: 'https://connectcentre.ie/people/athira-kalavampara-raghunadhan' },
      scholar('lgz807oAAAAJ'),
    ],
  },
  {
    name: 'Malik Faizan',
    group: 'phd',
    start: '2024-01-01',
    end: '2028-12-31',
    topic: 'Automated music therapy for anxiety and depression management in older people',
    note: 'MTech in Control and Instrumentation Systems, Jamia Millia Islamia, New Delhi.',
    links: [scholar('1rU30VYAAAAJ'), orcid('0009-0009-6602-3815'), linkedin('malik-faizan-a828a816b')],
  },
  {
    name: 'Yibin Xie',
    group: 'phd',
    start: '2024-09-01',
    end: '2028-08-31',
    institution: 'Trinity College Dublin',
    topic: 'AI-based communication systems for smart grid networks',
  },
  {
    name: 'Zainab Safdar',
    group: 'phd',
    start: '2025-01-01',
    end: '2029-12-31',
    topic:
      'AI-powered in-vitro and in-cell (IVIC) correlation model for drug/product efficacy testing of anticancer drugs: a digital and greener route',
    links: [{ label: 'LinkedIn', href: 'https://ie.linkedin.com/in/zainab-s-b63807278' }],
  },
  {
    name: 'Claumar Koukouta',
    group: 'phd',
    start: '2026-10-01',
    end: '2029-09-30',
    topic: 'Distributed decision making for complex quantum networks',
    role: 'Co-supervised with Dr Ilias Cherkaoui and Dr Brenda Murphy',
    note: 'MSc in Embedded Electronic Systems, ESIGELEC, Rouen; previously worked in machine-learning engineering.',
    projects: ['QUESTING'],
    links: [{ label: 'QUESTING profile', href: 'https://questing-project.eu/dt_team/claumar-bienvenu-koukouta/' }],
  },
  {
    name: 'Orla Kavanagh',
    group: 'phd',
    start: '2026-10-01',
    end: '2030-09-30',
    topic:
      'Category-theoretic and AI-enabled forensic analysis of obfuscation relay boxes (ORBs) in classical backbone networks (CYBERION)',
    role: 'Principal supervisor Dr John Sheppard (ForSec@SETU), co-supervised by Dr Dey',
    note: 'Detects and tracks the relay networks that state-sponsored attackers use to hide their traffic, combining TLS fingerprinting, category theory and physics-informed neural networks. MSc in Data Analytics, CCT College Dublin.',
    funding: 'a SETU PhD Scholarship',
    links: [linkedin('orla-kavanagh-8284bb78')],
  },
  {
    name: 'Davide Fallara',
    group: 'phd',
    start: '2026-11-01',
    end: '2029-10-31',
    topic: 'Capacity bounds of realistic co-existing classical–quantum networks',
    role: 'Co-supervised with Dr Ilias Cherkaoui and Dr Brenda Murphy',
    note: 'MSc in Physics of Complex Systems, University of Turin.',
    projects: ['QUESTING'],
    links: [{ label: 'QUESTING profile', href: 'https://questing-project.eu/dt_team/davide-fallara/' }],
  },
  {
    name: 'Mostafa Ragab',
    group: 'phd',
    start: '2026-12-01',
    end: '2029-11-30',
    topic: 'Self-optimizing and self-healing implanted communication network',
    role: 'Co-supervised with Dr Priyalakshmi Sheela',
    projects: ['BRAINET'],
  },

  // Masters by Research
  {
    name: 'Surya Jayakumar',
    group: 'masters',
    start: '2025-07-01',
    end: '2027-06-30',
    topic:
      'Industry-level data integration and development of a digital sustainability platform and decision support tool for agricultural production systems in Ireland',
    projects: ['AgNav'],
  },

  // Postdoctoral fellows
  {
    name: 'Ilias Cherkaoui',
    group: 'postdoc',
    start: '2025-01-01',
    topic: 'Quantum-proofing AI (AIQ-Shield): a zero-trust approach',
    role: 'TU RISE Postdoctoral Fellow; co-supervises QUESTING doctoral candidates',
    note: 'PhD in chaos theory and cryptography, Mohammed V University, Rabat (2023).',
    projects: ['AIQ-Shield', 'QUESTING'],
    links: [scholar('bA0j7UcAAAAJ')],
  },
  {
    name: 'Priyalakshmi Sheela',
    group: 'postdoc',
    start: '2025-08-01',
    topic: 'AI-aided wavelet transform for denoising signals (ANODE)',
    role: 'Co-supervises a BRAINET doctoral candidate',
    note: 'PhD in biomedical signal processing, National Institute of Technology Calicut.',
    projects: ['ANODE', 'BRAINET'],
    links: [linkedin('dr-priyalakshmi-sheela-363536159')],
  },
  {
    name: 'Mohamed Khalafalla Hassan',
    group: 'postdoc',
    start: '2025-09-01',
    topic: 'Resilience of virtualised and software-defined 6G networks',
    role: 'Collaborator, and also a Lecturer at National College of Ireland',
    projects: ['PlastG'],
    links: [scholar('QWpKug4AAAAJ'), orcid('0000-0002-6238-8915')],
  },
  {
    name: 'Sayanti Ghosh',
    group: 'postdoc',
    start: '2025-09-01',
    institution: 'Trinity College Dublin',
    topic: 'Robustness of heterogeneous wireless networks',
    note: 'Earlier work on UAV- and RIS-assisted networks for disaster response.',
    projects: ['PlastG'],
    links: [scholar('GNHNK9EAAAAJ'), orcid('0000-0001-5824-3687'), linkedin('dr-sayanti-ghosh-994227214')],
  },
  {
    name: 'Tamás Grósz',
    group: 'postdoc',
    start: '2026-01-02',
    topic: 'Sensor placement optimisation and AI models of how environmental pollution affects human health',
    role: 'Collaborator, and also a Lecturer at SETU',
    note: 'PhD in Informatics, University of Szeged; previously a postdoctoral researcher at Aalto University (2019–2025) and a visiting research fellow at Trinity College Dublin.',
    projects: ['ENACT'],
    links: [
      { label: 'SETU profile', href: 'https://research.setu.ie/en/persons/tam%C3%A1s-gr%C3%B3sz/' },
      scholar('RCUa8MAAAAAJ'),
      orcid('0000-0001-7918-9579'),
      linkedin('tam%C3%A1s-gr%C3%B3sz-950a049a'),
    ],
  },
  {
    name: 'Peter Phelan',
    group: 'postdoc',
    start: '2026-09-01',
    topic: 'Mathematician with a PhD in commutative algebra',
    projects: ['PlastG'],
    links: [{ label: 'LinkedIn', href: 'https://ie.linkedin.com/in/peterphelanalgebra' }],
  },

  // Graduates and former members
  {
    name: 'Yan Zhang',
    group: 'phd',
    start: '2022-10-01',
    institution: 'Trinity College Dublin',
    topic: 'Movable antenna-enhanced reconfigurable intelligent surfaces for next-generation wireless networks',
    role: 'Co-supervised with Prof. Nicola Marchetti',
    funding: 'China Scholarship Council, with support from CONNECT and COALESCE',
    graduated: '2026',
  },
  {
    name: 'Rahul Umesh Mhapsekar',
    group: 'phd',
    topic: 'IoT platform for milk quality monitoring',
    note: 'Built edge-AI methods for real-time milk-quality analysis and adulteration detection, including the AppAdapt-LWDL framework (IEEE Transactions on Mobile Computing). Now a postdoctoral researcher at SETU.',
    funding: 'the VistaMilk Research Centre',
    links: [scholar('vO6uxQwAAAAJ'), orcid('0000-0002-3420-3231'), linkedin('rahul-mhapsekar-334018129')],
    graduated: true,
  },
  {
    name: 'Omer Ali',
    group: 'postdoc',
    start: '2025-01-01',
    topic: 'Lightweight machine learning and energy-efficient IoT devices',
    links: [scholar('G0qC3yEAAAAJ'), orcid('0000-0002-0114-0457'), linkedin('omerali')],
    departed: { date: '2025-04-30', destination: 'Now a lecturer and researcher in higher education in Ireland.' },
  },
];

// Status is worked out when the site is built, so someone due to join moves
// into the current team at the next rebuild after their start date.
const today = new Date().toISOString().slice(0, 10);
export const isIncoming = (m: Member) => Boolean(m.start && m.start > today);
export const isFormer = (m: Member) => Boolean(m.graduated || (m.departed && m.departed.date <= today));
export const isCurrent = (m: Member) => !isIncoming(m) && !isFormer(m);

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const year = (d: string) => d.slice(0, 4);
const monthYear = (d: string) => `${MONTHS[Number(d.slice(5, 7)) - 1]} ${year(d)}`;

/** Initials for the placeholder portrait, e.g. 'NW'. */
export const initials = (name: string) => {
  const parts = name.replace(/\./g, '').split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
};

/** File name for a member's photo in src/assets/team, e.g. 'yan-zhang'. */
export const photoSlug = (name: string) =>
  name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** A short line such as "2023 to 2026" or "Joining December 2026". */
export function tenure(m: Member): string {
  if (isIncoming(m)) return `Joining ${monthYear(m.start!)}`;
  const a = m.start ? year(m.start) : undefined;
  if (isFormer(m)) {
    const b = typeof m.graduated === 'string' ? m.graduated : m.departed ? year(m.departed.date) : undefined;
    if (a && b) return a === b ? a : `${a} to ${b}`;
    return b ?? a ?? '';
  }
  if (!a) return '';
  if (m.end) return `${a} to ${year(m.end)}`;
  return `Since ${a}`;
}

const count = (g: TeamGroup) => TEAM.filter((m) => m.group === g && isCurrent(m)).length;

export const SUPERVISION_SUMMARY = {
  currentPhd: count('phd'),
  currentMasters: count('masters'),
  currentPostdocs: count('postdoc'),
  // One earlier graduate (from the CV, not listed by name) plus those above.
  graduatedPhd: 1 + TEAM.filter((m) => m.graduated).length,
  note: 'The group includes a TU RISE Postdoctoral Fellow and doctoral candidates in the MSCA QUESTING network.',
  topics:
    'Topics range from quantum network tomography and post-quantum cryptography to resilient 6G networks, AI for health and AI for dairy-farm sustainability.',
};
