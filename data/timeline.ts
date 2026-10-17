export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

// ⚠️ DONNÉES DE DÉMONSTRATION À REMPLACER PAR TES INFORMATIONS RÉELLES
export const timeline: TimelineItem[] = [
  {
    year: '—',
    title: 'Découverte du développement web',
    description:
      'Premiers pas avec HTML, CSS et JavaScript. Construction de petites pages statiques.',
  },
  {
    year: '—',
    title: 'Apprentissage de React et Next.js',
    description:
      'Approfondissement du frontend moderne, des composants et des bonnes pratiques.',
  },
  {
    year: '—',
    title: 'Développement backend avec Laravel',
    description:
      'Conception d’APIs, modélisation de bases de données et logique métier.',
  },
  {
    year: '—',
    title: 'Projets personnels Fullstack',
    description:
      'Réalisation d’applications complètes pour consolider mes compétences.',
  },
];