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
    slug: 'gestion-restaurant',
    title: 'Site web pour un studio de photographie',
    shortDescription:
      'Application permettant de gérer les rendez-vous des clients',
    category: 'Fullstack',
    technologies: ['Laravel', 'MySQL', 'Tailwind CSS'],
    image: '/images/projects/restaurant.jpg',
    problem: 'Centraliser la gestion des commandes et du menu dans un seul outil.',
    features: ['Gestion du menu', 'Suivi des commandes', 'Gestion des tables'],
    role: 'Conception et développement',
    
    // 👇 MODIFICATIONS ICI
    github: 'https://github.com/david-dev576', // Mets le lien de ton profil ou de ton dépôt de code ici
    demo: 'https://david-dev576.github.io/Photographie_site/', // Mets ton lien GitHub Pages ici
    status: 'in-progress',
  },
  {
    slug: 'gestion-hoteliere',
    title: 'Système de gestion et de réservation hôtelière',
    shortDescription:
      'Plateforme de réservation de chambres et de suivi des séjours.',
    category: 'Fullstack',
    technologies: ['Laravel', 'MySQL', 'Tailwind CSS'],
    image: '/images/projects/hotel.jpg',
    problem: 'Simplifier la réservation et le suivi des chambres disponibles.',
    features: ['Réservation en ligne', 'Disponibilité des chambres', 'Tableau de bord admin'],
    role: 'Conception et développement',
    github: '',
    demo: '',
    status: 'in-progress',
  },
  {
    slug: 'gestion-bibliotheque',
    title: 'Application de gestion de bibliothèque',
    shortDescription:
      'Gestion des livres, des emprunts et des retours pour une bibliothèque.',
    category: 'Fullstack',
    technologies: ['Laravel', 'MySQL'],
    image: '/images/projects/library.jpg',
    problem: 'Automatiser le suivi des emprunts et des retours.',
    features: ['Catalogue de livres', 'Gestion des emprunts', 'Recherche avancée'],
    role: 'Conception et développement',
    github: '',
    demo: '',
    status: 'in-progress',
  },
  {
    slug: 'photographie',
    title: 'Projet de photographie / gestion de données',
    shortDescription:
      'Application pour organiser, taguer et explorer une collection de photos.',
    category: 'Frontend',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/images/projects/photography.jpg',
    problem: 'Organiser et retrouver facilement des photos par mots-clés.',
    features: ['Galerie filtrable', 'Tags personnalisés', 'Recherche rapide'],
    role: 'Conception et développement',
    github: '',
    demo: '',
    status: 'draft',
  },
];