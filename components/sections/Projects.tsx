'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { projects, type ProjectCategory } from '@/data/projects';
import { cn } from '@/lib/utils';

const filters: ('Tous' | ProjectCategory)[] = [
  'Tous',
  'Frontend',
  'Fullstack',
  'Backend',
];

export function Projects() {
  const [active, setActive] = useState<'Tous' | ProjectCategory>('Tous');

  const filtered = useMemo(
    () =>
      active === 'Tous'
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <Section id="projets">
      <SectionHeader
        eyebrow="Projets"
        title="Une sélection de projets que je construis."
        description="Applications en cours de développement ou projets d'apprentissage, présentés honnêtement."
      />

      <div
        className="mb-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filtrer les projets par catégorie"
      >
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary',
              active === f
                ? 'border-accent-primary bg-accent-primary/10 text-fg-primary'
                : 'border-border text-fg-secondary hover:text-fg-primary'
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <Link
              href={`/projets/${p.slug}`}
              className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
            >
              <Card className="flex h-full flex-col">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <Badge>{p.category}</Badge>
                  <ArrowUpRight
                    size={16}
                    className="text-fg-secondary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-primary"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-fg-secondary">
                  {p.shortDescription}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.technologies.slice(0, 3).map((t) => (
                    <li key={t}>
                      <Badge>{t}</Badge>
                    </li>
                  ))}
                </ul>
                {p.status !== 'published' && (
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-fg-secondary">
                    {p.status === 'in-progress' ? 'En cours' : 'Brouillon'}
                  </p>
                )}
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}