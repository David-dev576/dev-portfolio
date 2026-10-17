import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projets',
  description: 'Tous mes projets de développement web.',
};

export default function ProjectsPage() {
  return (
    <Section className="pt-32">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-fg-secondary transition-colors hover:text-fg-primary"
      >
        <ArrowLeft size={14} /> Retour à l'accueil
      </Link>

      <SectionHeader
        eyebrow="Projets"
        title="Tous mes projets."
        description="Applications web, outils et expérimentations."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projets/${p.slug}`}
            className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
          >
            <Card className="h-full">
              <Badge>{p.category}</Badge>
              <h3 className="mt-3 font-display text-lg font-semibold">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-fg-secondary">
                {p.shortDescription}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.technologies.map((t) => (
                  <li key={t}>
                    <Badge>{t}</Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}