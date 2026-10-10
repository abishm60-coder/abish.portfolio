/**
 * Central portfolio data — generated from the source resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Abish',
  displayName: 'Abish',
  firstName: 'ABISH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'ABISH . M - PORTFOLIO',
  role: 'MERN Stack Developer',
  tagline: ['MERN Stack Developer', 'Full-Stack Web Development', 'JavaScript'],
  intro:
    'B.Tech Information Technology graduate and MERN stack developer building responsive web applications with MongoDB, Express.js, React, and Node.js.',
  location: 'Villukuri, Kanniyakumari, Tamilnadu, India',
  email: 'abishm60@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/abish-m',
    github: 'https://github.com/abishm60-coder',
  },
  resumePdf: '/assets/Abish_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Abish',
  },
  interests: ['Software Development', 'Frontend Developer'],
};

export const education = [
  {
    school: "St.Xavier's Catholic College Of Engineering",
    place: 'Kanniyakumari',
    degree: 'Bachelor of Technology — Information Technology',
    period: 'November 2022 – May 2026',
    score: 'Nov 2022 – May 2026',
  },
  {
    school: 'Adline Matric Higher Secondary School',
    place: 'Villukuri',
    degree: 'HSC & SSLC — Computer Science',
    period: '2020 – 2022',
    score: 'Score 86.6%',
  },
];

export const experience = [
  {
    company: 'Srishti Innovative',
    role: 'Internship Mern-Stack',
    place: 'India',
    period: 'Sept 2026 – Present',
    points: [
      'Developed responsive and functional web applications by implementing user interfaces, server-side logic, and database connectivity using the MERN stack.',

      'Deployed and managed web applications while applying version control, debugging, and end-to-end development practices.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  demo?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'jesus-store',
    title: 'The Jesus Store',
    year: '2026',
    genre: 'E-Commerce • Next.js • React',
    logline: 'A premier faith-based e-commerce store featuring custom apparel and products.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    build: [
      'Built a modern, responsive e-commerce platform offering premium groceries, apparel, and faith-based products.',
      'Implemented full shopping cart functionality, secure checkout, and performance optimizations using Next.js.',
    ],
    features: [
      'E-Commerce Storefront',
      'Shopping Cart & Checkout',
      'Responsive UI/UX',
      'Optimized Performance',
    ],
    metrics: [
      { value: '100%', label: 'responsive design' },
      { value: 'Fast', label: 'page load times' },
    ],
    github: 'https://github.com/abishm60-coder',
    demo: 'https://jesus-store.vercel.app/',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'shift-pattern-studio',
    title: 'Shift Pattern Studio',
    year: '2026',
    genre: 'Agency • Web Design • Development',
    logline: 'Professional website design and development agency platform.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    build: [
      'Developed a modern digital agency website showcasing professional web design, development services, and portfolios.',
      'Integrated smooth animations, responsive grids, and direct WhatsApp communication features.',
    ],
    features: [
      'Portfolio Showcase',
      'Service Offerings',
      'Custom Animations',
      'WhatsApp Integration',
    ],
    metrics: [
      { value: '100%', label: 'mobile friendly' },
      { value: 'Direct', label: 'customer communication' },
    ],
    github: 'https://github.com/abishm60-coder',
    demo: 'https://shift-pattern-studio-jtcn.vercel.app/',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'gym-website',
    title: 'Gymbold',
    year: '2026',
    genre: 'Landing Page • Fitness • UI/UX',
    logline: 'High-converting fitness and gym brand landing page.',
    stack: ['React', 'JavaScript', 'CSS', 'Vercel'],
    build: [
      'Designed and developed a high-converting landing page for a fitness and gym brand to attract new members.',
      'Focused on strong visual hierarchy, clear call-to-actions, and an energetic design system.',
    ],
    features: [
      'High-converting layout',
      'Membership pricing',
      'Class schedules',
      'Contact forms',
    ],
    metrics: [
      { value: 'High', label: 'conversion rate' },
      { value: 'Modern', label: 'aesthetic appeal' },
    ],
    github: 'https://github.com/abishm60-coder',
    demo: 'https://gym-website-blond-theta.vercel.app/',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Simplilearn', name: 'ChatGPT Advanced Course', link: '/assets/certificates/simplilearn-chatgpt.jpg' },
  { issuer: 'MongoDB', name: 'MongoDB Basics for Students', link: '/assets/certificates/mongodb-basics.jpg' },
  { issuer: 'AWS Academy', name: 'AWS Academy Graduate – Cloud Architecting', link: '/assets/certificates/aws-academy-cloud-architecting.png' },
  { issuer: 'ICT Academy', name: 'Cloud Solutions Architect – Associate (AWS)', link: '/assets/certificates/ict-academy-aws-architect.png' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'JavaScript and React are the primary languages',
    skills: [
      { name: 'JavaScript', mono: 'Js', note: 'Primary' },
      { name: 'React', mono: 'Re', note: 'Primary' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tools',
    subtitle: 'Shipping & architecture',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'MongoDB Atlas', mono: 'Ma' },
      { name: 'npm', mono: 'Np' },
      { name: 'Vercel', mono: 'Vc' },
      { name: 'Render', mono: 'Rn' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Indexing • Normalization',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },

  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'Software Development', mono: 'Sd' },
      { name: 'Frontend Developer', mono: 'Fd' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Oracle Java Certified Foundations Associate', 'HackerRank 5-star'],
  Python: ['Cisco Python Essentials 1', 'HackerRank 5-star'],
  C: ['HackerRank 5-star'],
  React: ['The Jesus Store', 'Gymbold'],
  HTML: ['Shift Pattern Studio', 'Pearson IT Specialist – HTML and CSS', 'Cisco HTML Essentials'],
  CSS: ['Shift Pattern Studio', 'Gymbold', 'Pearson IT Specialist – HTML and CSS', 'Cisco CSS Essentials'],
  JavaScript: ['Shift Pattern Studio', 'Gymbold', 'Cisco JavaScript Essentials 1 & 2'],
  'Node.js': ['MERN Stack Developer Internship'],
  'Express.js': ['MERN Stack Developer Internship'],
  Git: ['GitHub Foundations'],
  GitHub: ['GitHub Foundations'],
  'VS Code': ['IDE of choice'],
  Postman: ['API Testing'],
  'MongoDB Atlas': ['MERN Stack Developer Internship'],
  npm: ['Package Management'],
  Vercel: ['The Jesus Store', 'Shift Pattern Studio', 'Gymbold'],
  Render: ['Backend Deployment'],
  PostgreSQL: ['Database Knowledge'],
  MongoDB: ['MongoDB Basics for Students'],
  'Cloud Computing (AWS)': ['AWS Academy Cloud Architecting', 'Cloud Solutions Architect – Associate (AWS)'],
  'Machine Learning': ['B.Tech IT'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021 – 2023',
    synopsis: '2021-2022 Adline Matric Higher Secondary School, Villukuri — Computer Science.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Computer Science at Adline Matric Higher Secondary School, Villukuri.',
        tags: ['Computer Science'],
        runtime: 'Jun 2021 – May 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: IT',
    period: '2022 – 2026',
    synopsis: "B.Tech in Information Technology at St.Xavier's Catholic College Of Engineering, Kanniyakumari.",
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Information Technology.',
        tags: ['B.Tech', 'IT'],
        runtime: 'Oct 2022 – Present',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Freelancer',
    period: '2025 – 2026',
    synopsis: 'Freelancer in Full-stack web development, Frontend and Backend.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Freelancer',
        description: 'Freelancer in Full-stack web development, Frontend and Backend.',
        tags: ['Full-stack', 'Frontend', 'Backend'],
        runtime: 'Freelance',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2026',
    synopsis: 'Building real projects in website.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Real Projects',
        description: 'Building real projects in website.',
        tags: ['Real Projects', 'Website'],
        runtime: '2026',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Internship as a MERN-Stack Developer.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Internship',
        description: 'MERN - Stack Developer.',
        tags: ['Internship', 'MERN Stack'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'JavaScript', detail: 'Listed as primary on the resume', palette: amber },
  { label: 'Primary framework', title: 'React', detail: 'Frontend development', palette: crimson },
  { label: 'Internship', title: 'Internship', detail: 'MERN-Stack · Srishti Innovative', palette: ocean },
  { label: 'Database credential', title: 'MongoDB', detail: 'Basics for Students', palette: jade },
  { label: 'Current focus', title: 'Software Development', detail: 'Frontend Developer', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · IT',
    lines: ["St.Xavier's Catholic College Of Engineering", 'November 2022 – May 2026'],
    chips: ['B.Tech IT'],
  },
  {
    kicker: 'Skills',
    title: 'JavaScript & React.',
    lines: ['Frontend Development · Backend Development', 'MERN Stack · MongoDB, Express, React, Node.js'],
    chips: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    kicker: 'Internship',
    title: 'MERN-Stack',
    lines: ['Internship at Srishti Innovative', 'Sept 2026 – Present'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['The Jesus Store — E-Commerce Platform', 'Shift Pattern Studio — Agency Website', 'Gymbold — Fitness Landing Page'],
  },
  {
    kicker: 'Certified',
    title: '4 Credentials',
    lines: ['AWS Academy · ICT Academy', 'MongoDB · Simplilearn'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Software Development · Frontend Developer'],
  },
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Abish',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, certifications & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 5 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Certs', card: 'Certifications', meta: `${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
