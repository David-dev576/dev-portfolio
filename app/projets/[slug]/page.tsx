import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// 👇 1. On ajoute "async" et on await params
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Projet introuvable' };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

// 👇 2. On ajoute "async" et on await params
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const sections = [
    { label: 'Problème à résoudre', value: project.problem },
    { label: 'Mon rôle', value: project.role },
  ];

  return (
    <Section className="pt-32">
      <Link
        href="/projets"
        className="mb-8 inline-flex items-center gap-2 text-sm text-fg-secondary transition-colors hover:text-fg-primary"
      >
        <ArrowLeft size={14} /> Tous les projets
      </Link>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <Badge>{project.category}</Badge>
        {project.status !== 'published' && (
          <Badge>
            {project.status === 'in-progress' ? 'En cours' : 'Brouillon'}
          </Badge>
        )}
      </div>

      <h1 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-fg-secondary">
        {project.shortDescription}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {/* 👇 J'ai ajouté target blank pour que le lien GitHub s'ouvre dans un nouvel onglet */}
        {project.github ? (
          <Button href={project.github} variant="outline">
            <Code2 size={16} /> Code source
          </Button>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-border px-5 py-2.5 text-sm text-fg-secondary">
            <Code2 size={16} /> Dépôt à venir
          </span>
        )}
        {project.demo ? (
          <Button href={project.demo} variant="outline">
            <ExternalLink size={16} /> Démo en ligne
          </Button>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-border px-5 py-2.5 text-sm text-fg-secondary">
            <ExternalLink size={16} /> Démo à venir
          </span>
        )}
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-3">
        <div className="space-y-8 md:col-span-2">
          {sections.map(
            (s) =>
              s.value && (
                <div key={s.label}>
                  <h2 className="font-display text-xl font-semibold">
                    {s.label}
                  </h2>
                  <p className="mt-2 text-fg-secondary">{s.value}</p>
                </div>
              )
          )}

          {project.features && project.features.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-semibold">
                Fonctionnalités principales
              </h2>
              <ul className="mt-2 list-inside list-disc space-y-1 text-fg-secondary">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="font-display text-xl font-semibold">
              Captures d'écran
            </h2>
            <p className="mt-2 text-sm text-fg-secondary">
              Les visuels de ce projet seront ajoutés prochainement.
            </p>
          </div>
        </div>

        <aside className="md:col-span-1">
          <div className="rounded-2xl border border-border bg-bg-card p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent-primary">
              Technologies
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <li key={t}>
                  <Badge>{t}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}