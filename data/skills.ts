export type Skill = { name: string };
export type SkillCategory = {
  title: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    description: 'Interfaces modernes, accessibles et performantes.',
    skills: [
      // { name: 'HTML5' },
      // { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React' },
      // { name: 'Next.js' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend',
    description: 'APIs, logique métier et intégration.',
    skills: [
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'API REST' },
    ],
  },
  {
    title: 'Bases de données',
    description: 'Modélisation et persistance des données.',
    skills: [
      { name: 'MySQL' },
    ],
  },
  {
    title: 'Outils',
    description: 'Environnement de travail et collaboration.',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Figma' },
      // { name: 'Postman' },
    ],
  },
];