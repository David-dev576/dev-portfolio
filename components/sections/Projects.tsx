'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Code2, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { projects, type ProjectCategory } from '@/data/projects';

const filters: ('All' | ProjectCategory)[] = [
  'All',
  'Frontend',
  'Fullstack',
  'Backend',
];

export function Projects() {
  const [active, setActive] = useState<'All' | ProjectCategory>('All');

  const filtered = useMemo(
    () =>
      active === 'All'
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="projets" className="bg-bg-primary py-24 px-6 border-t border-border">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Selected Work
          </h2>
          <Link
            href="/projets"
            className="group inline-flex items-center gap-2 border border-border px-5 py-3 text-xs font-mono uppercase tracking-widest text-fg-secondary hover:text-fg-primary hover:border-fg-primary transition-colors"
          >
            All Projects
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Filtres */}
        <div className="mb-10 flex flex-wrap gap-4">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-xs font-mono uppercase tracking-widest pb-1 border-b transition-colors ${
                active === f
                  ? 'border-fg-primary text-fg-primary'
                  : 'border-transparent text-fg-secondary hover:text-fg-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className="grid gap-8 md:grid-cols-2">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <div className="group flex flex-col border border-border bg-bg-secondary transition-colors hover:border-fg-secondary">
                
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-card border-b border-border">
                   <img
                     src={p.image}
                     alt={p.title}
                     className="object-cover w-full h-full opacity-80 transition-opacity group-hover:opacity-100"
                   />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-fg-secondary leading-relaxed mb-6">
                      {p.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-fg-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6 mt-auto">
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-fg-secondary hover:text-fg-primary transition-colors">
                          <ExternalLink size={14} /> Live
                        </a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-fg-secondary hover:text-fg-primary transition-colors">
                          <Code2 size={14} /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}