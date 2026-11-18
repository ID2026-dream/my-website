// Funded projects and fellowships, newest first.

export interface Project {
  name: string;
  fullName?: string;
  funder: string;
  period: string;
  summary: string;
  links?: { label: string; href: string }[];
}

export const PROJECTS: Project[] = [
  {
    name: 'ENACT',
    funder: 'Horizon Europe',
    period: 'From 2024, 42 months',
    summary:
      'Investigates how air and light pollution affect pre-clinical markers of non-communicable ocular and dermatological diseases, and how prolonged exposure accelerates oxidative stress and inflammation.',
    links: [
      {
        label: 'Interview with Silicon Republic',
        href: 'https://waltoninstitute.ie/news-and-events/news/indrakshi-dey-discusses-the-link-between-her-research-and-societal-benefits-with-silicon-republic',
      },
    ],
  },
  {
    name: 'CONNECT',
    fullName: 'Centre for Future Networks and Communications',
    funder: 'Science Foundation Ireland',
    period: 'Funded Investigator',
    summary:
      'Propagation link models for intra-body and inter-body communication, a theoretical framework for probabilistic quantum communication networks, and upper bounds on throughput over superactivated quantum channels carrying classical information.',
    links: [{ label: 'CONNECT profile', href: 'https://connectcentre.ie/people/indrakshi-dey' }],
  },
  {
    name: 'Marie Skłodowska-Curie Fellowship',
    funder: 'European Commission',
    period: '2017 to 2019',
    summary: 'Individual fellowship hosted by Trinity College Dublin.',
  },
];
