// Your research team. The "Team" page appears in the menu as soon as
// this list has at least one person in it.
//
// Copy this example, remove the // at the start of each line, and edit:
//
//   {
//     name: 'Full Name',
//     role: 'PhD researcher',          // must match one of GROUPS below
//     topic: 'One line on their research topic',
//     bio: 'Two or three sentences: background, what they work on, funding.',
//     href: 'https://scholar.google.com/...',   // optional profile link
//     photo: 'team/full-name.jpg',              // optional, put the file in public/team/
//   },

export const GROUPS = ['Postdoctoral researchers', 'PhD researchers', 'Research staff', 'Alumni'] as const;

export interface Member {
  name: string;
  role: (typeof GROUPS)[number];
  topic?: string;
  bio?: string;
  href?: string;
  photo?: string;
}

export const TEAM: Member[] = [];
