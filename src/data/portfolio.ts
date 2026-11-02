/*
 * Central portfolio data - tailored for Aritra
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Aritra',
  displayName: 'Aritra',
  firstName: 'ARITRA',
  seriesTag: 'THE SERIES',
  originalLabel: 'AN ARITRA ORIGINAL',
  role: 'Graphic Designer & UI/UX Specialist',
  tagline: ['Graphic Designer', 'UI/UX', 'Video Editor'],
  intro: 'A B.Tech CSE student at NSEC building cinematic brand identities, intuitive UI/UX, and highly-engaging digital content. Currently executing my Winter Arc to blend technical logic with visual branding.',
  location: 'West Bengal, India',
  email: 'your.email@gmail.com', // Edit this email
  links: {
    linkedin: 'https://www.linkedin.com/in/your-profile', // Edit this link
    github: 'https://github.com/Agx6',
  },
  resumePdf: '/assets/Aritra_Resume.pdf', // Ensure your resume is renamed to this in the assets folder
};

export const projects = [
  {
    id: 'shreem-brand-identity',
    title: 'Shreem: Brand Identity',
    category: 'Graphic Design & Branding',
    description: 'Designed a premium brand identity, logo, and 3D visual mockups for a handmade accessories and jewelry brand. The visual language utilizes rose gold and matte black filigree elements to communicate luxury and craftsmanship.',
    techStack: ['Canva', 'Figma', 'Graphic Design', '3D Mockups'],
    imageUrl: '/assets/pic1.jpeg', 
    link: '#', 
    matchPercentage: '99% Match',
    year: '2026',
    maturityRating: 'U/A 13+',
    duration: '1 Season',
  },
  {
    id: 'quantum-crew-animation',
    title: 'Quantum Crew Content',
    category: 'Video Editing & Content',
    description: 'Produced and edited 60-second animated shorts featuring original character lore for @CtrlAltChaosTV. Blended 2000s cartoon tropes with modern internet culture using DaVinci Resolve.',
    techStack: ['DaVinci Resolve', 'Storyboarding', 'Video Editing'],
    imageUrl: '/assets/pic1.jpeg', 
    link: 'https://youtube.com/@CtrlAltChaosTV',
    matchPercentage: '97% Match',
    year: '2026',
    maturityRating: 'U/A 7+',
    duration: '1 Season',
  },
  {
    id: 'sih-ballastic-2026',
    title: 'Smart India Hackathon 2026',
    category: 'UI/UX & Frontend',
    description: 'Collaborated with Team BALLASTIC to formulate and design a comprehensive 6-slide technical pitch presentation and conceptual UI for our hackathon solution.',
    techStack: ['Figma', 'Presentation Design', 'UI/UX', 'C++', 'Java'],
    imageUrl: '/assets/pic1.jpeg',
    link: '#',
    matchPercentage: '98% Match',
    year: '2026',
    maturityRating: 'U/A 13+',
    duration: '1 Season',
  }
];

export const topPicks = ['shreem-brand-identity', 'quantum-crew-animation', 'sih-ballastic-2026'];

export const skillCategories = [
  {
    name: 'Design & UI/UX',
    skills: ['Figma', 'Canva', 'Logo Design', 'Brand Identity', 'Wireframing']
  },
  {
    name: 'Video & Content',
    skills: ['DaVinci Resolve', 'Video Editing', 'Storyboarding', 'Content Strategy']
  },
  {
    name: 'Core Tech',
    skills: ['C++', 'Java', 'Linux / CentOS', 'Data Structures']
  }
];

export const skillEvidence = [
  { skill: 'Figma', where: 'Used in Smart India Hackathon UI/UX and Shreem Brand Identity.' },
  { skill: 'Canva', where: 'Extensively used for graphic design and freelance client work.' },
  { skill: 'DaVinci Resolve', where: 'Used for precise audio leveling and video editing for Quantum Crew.' },
  { skill: 'C++', where: 'Practicing DSA concepts and OOP fundamentals for placement readiness.' }
];

export const seasons = [
  {
    id: 's1',
    title: 'Season 1: The Foundation',
    year: '2024 - 2026',
    description: 'Mastering core computer science fundamentals, DSA in C++, and rigorous MAKAUT academics while building discipline through strict time-blocked routines and calisthenics.'
  },
  {
    id: 's2',
    title: 'Season 2: The Creative Pivot',
    year: '2026 - Present',
    description: 'Executing the Winter Arc to secure freelance graphic design and UI/UX clients, blending a technical engineering background with modern visual branding.'
  }
];

export const viewerProfiles = [
  { id: 'p1', name: 'Recruiters', role: 'Looking for Interns', avatar: '/assets/pic.png' },
  { id: 'p2', name: 'Clients', role: 'Looking for Design', avatar: '/assets/pic.png' },
  { id: 'p3', name: 'Creators', role: 'Looking to Collab', avatar: '/assets/pic.png' }
];

export const introSlides = [
  {
    title: 'Visual Identity',
    subtitle: 'Crafting brands that stand out.',
    image: '/assets/pic1.jpeg'
  },
  {
    title: 'Digital Experiences',
    subtitle: 'From code to canvas.',
    image: '/assets/pic1.jpeg'
  },
  {
    title: 'Winter Arc Protocol',
    subtitle: 'Discipline meets creativity.',
    image: '/assets/pic1.jpeg'
  }
];

// --- EXCLUDED SECTIONS ---
// I have left these empty exactly as you requested so Sushmita's data is removed, 
// but the arrays still exist so the website doesn't crash.
export const achievements = [];
export const certifications = [];
export const enterprises = []; 
export const experience = []; 
export const education = [];
