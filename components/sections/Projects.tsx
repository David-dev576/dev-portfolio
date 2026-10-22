'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <section id="projets" className="bg-[#0a0a0a] py-24 px-6 text-white border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Header avec Titre et Bouton "All Projects" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Selected Work
          </h2>
          <Link
            href="/projets"
            className="group inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-white hover:border-white transition-colors"
          >
            All Projects
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Filtres (Optionnel, on les garde discrets) */}
        <div className="mb-10 flex flex-wrap gap-4">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-xs font-mono uppercase tracking-widest pb-1 border-b transition-colors ${
                active === f
                  ? 'border-white text-white'
                  : 'border-transparent text-white/40 hover:text-white/80'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grille de Projets */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <div className="group flex flex-col border border-white/10 bg-[#111] transition-colors hover:border-white/30">
                
                {/* Image du projet (ou placeholder sombre) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/50 border-b border-white/10">
                   {/* Si tu as une image, décommente les lignes ci-dessous */}
                   <Image
                     src={p.image}
                     alt={p.title}
                     fill
                     className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                   />
                </div>

                {/* Contenu texte */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-6">
                      {p.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Badges Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Liens Live / Code */}
                    <div className="flex items-center gap-6 mt-auto">
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors">
                          <ExternalLink size={14} /> Live
                        </a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors">
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