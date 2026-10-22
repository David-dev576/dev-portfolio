import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

const pillars = [
  {
    title: 'Who I am',
    text: "I'm David, a Congolese web developer based in Burundi. I build web applications focusing on clarity, accessibility, and performance.",
  },
  {
    title: 'What interests me',
    text: "Web development fascinates me because it allows turning an idea into a concrete, usable, and useful product. I love both frontend and backend.",
  },
  {
    title: 'How I work',
    text: "I start by understanding the need, then I design a simple, maintainable, and scalable solution. I prefer quality over quantity.",
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