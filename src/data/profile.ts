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
    when: '2023–present',
    what: 'Lecturer in Computer Science',
    where: 'Department of Computing and Mathematics, School of Science, South East Technological University',
  },
  {
    when: '2022–present',
    what: 'Funded Investigator',
    where: 'CONNECT, Research Ireland Centre for Future Networks',
  },
  {
    when: '2019–present',
    what: 'Adjunct Assistant Professor',
    where: 'Trinity College Dublin',
  },
  {
    when: '2019–2022',
    what: 'Lecturer (Assistant Professor)',
    where: 'Maynooth University',
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
    when: '2017–2019',
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

export const PATENTS = {
  count: 3,
  areas: 'full-duplexing, quantum AI and edge computing',
};

// ---- Service ------------------------------------------------------------
export const SERVICE_INSTITUTION: Entry[] = [
  {
    when: '',
    what: 'Coordinator of SETU-led European consortia',
    where: 'QUESTING (MSCA Doctoral Network), Q-FENCE and COALESCE (Horizon Europe)',
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
];

// ---- Outreach and media (newest first) ----------------------------------
export const OUTREACH: Entry[] = [
  {
    when: 'June 2025',
    what: 'CodeGirl and the Conversation: Women in Computing',
    where: 'Panel discussion, The Machine podcast, SETU',
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

// ---- Supervision ---------------------------------------------------------
export const SUPERVISION_SUMMARY = {
  currentPhd: 7,
  currentPostdocs: 5,
  graduatedPhd: 2,
  note: 'A third PhD completes in November 2026. The postdoctoral fellows include a TU RISE Fellow.',
  topics:
    'Topics range from quantum network tomography to game-theoretic resource sharing and medium access control.',
};

export interface Student {
  name: string;
  degree: string;
  institution?: string;
  topic: string;
  role: string; // e.g. 'Supervisor' or 'Co-supervisor with ...'
  status?: string; // e.g. 'Completing November 2026'
  note?: string;
  href?: string;
}

export const SUPERVISION: Student[] = [
  {
    name: 'Nirmal D. Wickramasinghe',
    degree: 'PhD',
    topic: 'Bayesian-game and auction-based resource allocation for dense IoT networks',
    role: 'Supervisor',
    status: 'Completing November 2026',
  },
  {
    name: 'Athira Kalavampara Raghunadhan',
    degree: 'PhD',
    institution: 'CONNECT, Trinity College Dublin',
    topic: 'Quantum network tomography',
    role: 'Co-supervisor, with Prof. Nicola Marchetti',
    note: 'Part of CoQREATE, the Convergent Quantum Research Alliance in Telecommunications.',
    href: 'https://connectcentre.ie/people/athira-kalavampara-raghunadhan',
  },
];
