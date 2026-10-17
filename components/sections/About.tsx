import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

const pillars = [
  {
    title: 'Qui je suis',
    text: "Je m'appelle David, développeur web congolais basé au Burundi. Je construis des applications web en mettant l'accent sur la clarté, l'accessibilité et la performance.",
  },
  {
    title: "Ce qui m'intéresse",
    text: "Le développement web me passionne parce qu'il permet de transformer une idée en un produit concret, utilisable et utile. J'aime autant le frontend que le backend.",
  },
  {
    title: 'Comment je travaille',
    text: "Je commence par comprendre le besoin, puis je conçois une solution simple, maintenable et évolutive. Je préfère la qualité à la quantité.",
  },
];

// 📸 Photo professionnelle de David
const hasPhoto = true;
// On ajoute le nom du dépôt (/dev-portfolio) pour que GitHub Pages trouve l'image
const photoSrc = '/dev-portfolio/images/david.webp';

export function About() {
  return (
    <Section id="a-propos">
      <SectionHeader
        eyebrow="À propos"
        title="Un développeur curieux, créatif et rigoureux."
      />

      <div className="grid gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-bg-card">
            {hasPhoto ? (
              // Utilisation d'une balise <img> classique pour GitHub Pages
              <img
                src={photoSrc}
                alt="Photo de David, développeur web"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <>
                <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-7xl font-bold gradient-text">
                    D.
                  </span>
                </div>
              </>
            )}
          </div>
          <p className="mt-4 text-xs text-fg-secondary">
            David — Développeur Web
          </p>
        </Reveal>

        <div className="space-y-8 md:col-span-8">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-fg-secondary">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}