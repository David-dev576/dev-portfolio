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
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    shortDescription:
      'This very site — a lightweight SPA built with vanilla JavaScript, a custom router, and CSS custom properties.',
    category: 'Frontend',
    technologies: ['HTML', 'CSS', 'VANILLA JS'],
    image: '/dev-portfolio/images/projects/portfolio.jpg', // Ajoute une image ici
    github: 'https://github.com/david-dev576',
    demo: 'https://david-dev576.github.io/dev-portfolio/',
    status: 'published',
  },
  {
    slug: 'psag-parish-management',
    title: 'PSAG Parish Management',
    shortDescription:
      'Web application for managing parish activities, users, catechumens, and administration with authentication and role-based access control.',
    category: 'Fullstack',
    technologies: ['PHP', 'MYSQL', 'JAVASCRIPT', 'AJAX'],
    image: '/dev-portfolio/images/projects/psag.jpg', // Ajoute une image ici
    github: '',
    demo: '',
    status: 'in-progress',
  },
  {
    slug: 'gestion-restaurant',
    title: 'Application de gestion de restaurant',
    shortDescription:
      'Application permettant de gérer les commandes, les tables et le menu d’un restaurant.',
    category: 'Fullstack',
    technologies: ['Laravel', 'MySQL', 'Tailwind CSS'],
    image: '/dev-portfolio/images/projects/restaurant.jpg',
    problem: 'Centraliser la gestion des commandes et du menu dans un seul outil.',
    features: ['Gestion du menu', 'Suivi des commandes', 'Gestion des tables'],
    role: 'Conception et développement',
    github: 'https://github.com/david-dev576',
    demo: '',
    status: 'in-progress',
  },
  {
    slug: 'gestion-hoteliere',
    title: 'Système de gestion et de réservation hôtelière',
    shortDescription:
      'Plateforme de réservation de chambres et de suivi des séjours.',
    category: 'Fullstack',
    technologies: ['Laravel', 'MySQL', 'Tailwind CSS'],
    image: '/dev-portfolio/images/projects/hotel.jpg',
    problem: 'Simplifier la réservation et le suivi des chambres disponibles.',
    features: ['Réservation en ligne', 'Disponibilité des chambres', 'Tableau de bord admin'],
    role: 'Conception et développement',
    github: '',
    demo: '',
    status: 'in-progress',
  },
];