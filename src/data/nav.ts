import { SITE } from '../site.config';

// Site menu. `primary: true` items also appear in the top bar on wide screens;
// every item appears in the full menu panel, grouped by heading.

export interface NavItem {
  label: string;
  path: string;
  primary?: boolean;
  feature?: boolean; // shown as a highlighted pill with the lab emblem
}

export const NAV_GROUPS: { heading: string; items: NavItem[] }[] = [
  {
    heading: 'About',
    items: [
      { label: 'Biography', path: '/biography/', primary: true },
      { label: 'Career and qualifications', path: '/career/' },
      { label: 'Awards and distinctions', path: '/awards/' },
    ],
  },
  {
    heading: 'Research',
    items: [
      { label: 'Research', path: '/research/', primary: true },
      { label: 'Publications', path: '/publications/', primary: true },
      { label: SITE.lab.name, path: '/lab/', primary: true, feature: true },
      { label: 'Supervision', path: '/supervision/' },
    ],
  },
  {
    heading: 'Teaching and engagement',
    items: [
      { label: 'Teaching', path: '/teaching/', primary: true },
      { label: 'Reading courses', path: '/courses/' },
      { label: 'Outreach', path: '/outreach/' },
    ],
  },
  {
    heading: 'Service',
    items: [
      { label: 'Service to SETU', path: '/service/#institution' },
      { label: 'Service to the discipline', path: '/service/#discipline' },
      { label: 'Service to society', path: '/service/#society' },
    ],
  },
];
