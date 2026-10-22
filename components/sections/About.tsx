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

export function About() {
  return (
    <Section id="a-propos">
      <SectionHeader
        eyebrow="ABOUT"
        title="A curious, creative and rigorous developer."
      />

      {/* La grille a été retirée pour laisser le texte prendre toute la largeur (max-w-3xl pour la lisibilité) */}
      <div className="max-w-3xl space-y-12 mt-12">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <h3 className="font-display text-2xl font-semibold mb-3">{p.title}</h3>
            <p className="text-lg text-fg-secondary leading-relaxed">{p.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}