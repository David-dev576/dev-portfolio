export type ProjectCategory = 'Frontend' | 'Fullstack' | 'Backend';

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  technologies: string[];
  image: string;
  problem?: string;
  features?: string[];
  role?: string;
  github?: string;
  demo?: string;
  status: 'draft' | 'in-progress' | 'published';
};

export const projects: Project[] = [
  {
    slug: 'studio-photographie',
    title: 'Studio de Photographie Artistique',
    shortDescription:
      'Un site vitrine élégant pour un studio de photographie artistique, mettant en valeur les émotions et les instants capturés.',
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/images/projects/studio-photo.png',
    problem: "Créer une interface immersive et raffinée pour présenter le travail d'un photographe et permettre aux clients de réserver une séance facilement.",
    features: ['Galerie photos interactive', 'Formulaire de réservation', 'Design éditorial et minimaliste', 'Animations fluides'],
    role: 'Conception UI/UX et Développement Frontend',
    github: '',
    demo: '',
    status: 'published',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    shortDescription:
      'This very site — a lightweight SPA built with vanilla JavaScript, a custom router, and CSS custom properties.',
    category: 'Frontend',
    technologies: ['HTML', 'CSS', 'VANILLA JS'],
    image: '/images/projects/portfolio.jpg',
    github: 'https://github.com/david-dev576',
    demo: 'https://david-dev576.github.io/dev-portfolio/',
    status: 'published',
  },
  // {
  //   slug: 'gestion-restaurant',
  //   title: 'Application de gestion de restaurant',
  //   shortDescription:
  //     'Application permettant de gérer les commandes, les tables et le menu d’un restaurant.',
  //   category: 'Fullstack',
  //   technologies: ['Laravel', 'MySQL', 'Tailwind CSS'],
  //   image: '/images/projects/restaurant.jpg',
  //   problem: 'Centraliser la gestion des commandes et du menu dans un seul outil.',
  //   features: ['Gestion du menu', 'Suivi des commandes', 'Gestion des tables'],
  //   role: 'Conception et développement',
  //   github: 'https://github.com/david-dev576',
  //   demo: '',
  //   status: 'in-progress',
  // },
  // {
  //   slug: 'gestion-hoteliere',
  //   title: 'Système de gestion et de réservation hôtelière',
  //   shortDescription:
  //     'Plateforme de réservation de chambres et de suivi des séjours.',
  //   category: 'Fullstack',
  //   technologies: ['Laravel', 'MySQL', 'Tailwind CSS'],
  //   image: '/images/projects/hotel.jpg',
  //   problem: 'Simplifier la réservation et le suivi des chambres disponibles.',
  //   features: ['Réservation en ligne', 'Disponibilité des chambres', 'Tableau de bord admin'],
  //   role: 'Conception et développement',
  //   github: '',
  //   demo: '',
  //   status: 'in-progress',
  // },
];