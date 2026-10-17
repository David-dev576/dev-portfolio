import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { timeline } from '@/data/timeline';

export function Timeline() {
  return (
    <Section id="parcours" className="bg-bg-secondary">
      <SectionHeader
        eyebrow="Parcours"
        title="Mon chemin dans le développement web."
        description="Données de démonstration à remplacer par ton parcours réel."
      />

      <ol className="relative border-l border-border pl-6">
        {timeline.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <li className="mb-10 last:mb-0">
              <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary" />
              <p className="font-mono text-xs uppercase tracking-widest text-accent-primary">
                {item.year}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-fg-secondary">
                {item.description}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}