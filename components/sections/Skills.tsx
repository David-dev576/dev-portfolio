import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { skillCategories } from '@/data/skills';

export function Skills() {
  return (
    <Section id="competences" className="bg-bg-secondary">
      <SectionHeader
        eyebrow="Compétences"
        title="Les technologies avec lesquelles je travaille."
        description="Une sélection d'outils et de langages que j'utilise pour construire des applications web."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 0.05}>
            <Card className="h-full">
              <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
              <p className="mt-2 text-sm text-fg-secondary">
                {cat.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <li key={s.name}>
                    <Badge>{s.name}</Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}