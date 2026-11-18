// Career, education and service for the Biography page.
// Years left as '' are shown without a date. Fill them in when you can.

export interface Entry {
  when: string;
  what: string;
  where: string;
}

export const CAREER: Entry[] = [
  {
    when: '',
    what: 'Head of Division, Programmable Autonomous Systems',
    where: 'Walton Institute, South East Technological University, Waterford',
  },
  {
    when: '',
    what: 'Assistant Professor, Department of Electronic Engineering',
    where: 'Maynooth University; Adjunct Assistant Professor, Trinity College Dublin',
  },
  { when: '2017–2019', what: 'Marie Skłodowska-Curie Fellow', where: 'Trinity College Dublin' },
  {
    when: '2016–2017',
    what: 'Research Fellow, Department of Electronics and Telecommunications',
    where: 'Norwegian University of Science and Technology (NTNU), Trondheim',
  },
  {
    when: '2015–2016',
    what: 'Postdoctoral Research Fellow, Ultra-Maritime Digital Communication Centre',
    where: 'Dalhousie University, Canada',
  },
];

export const EDUCATION: Entry[] = [
  { when: '2015', what: 'PhD in Electrical Engineering', where: 'University of Calgary, Canada' },
  { when: '2010', what: 'MSc in Wireless Communications', where: 'University of Southampton, UK' },
];

export const SERVICE: string[] = [
  'Senior Member, IEEE',
  'Board Member, IEEE UK and Ireland Future Networks Group',
  'Funded Investigator, CONNECT Centre for Future Networks',
  'Expert Reviewer, Horizon Europe Marie Skłodowska-Curie Actions',
];
