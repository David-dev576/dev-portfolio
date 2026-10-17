'use client';

import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { socials } from '@/data/socials';
import { site } from '@/data/site';

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary text-sm font-bold text-white">
                D
              </span>
              David
            </div>
            <p className="mt-3 max-w-xs text-sm text-fg-secondary">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent-primary">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#accueil" className="text-fg-secondary hover:text-fg-primary">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#a-propos" className="text-fg-secondary hover:text-fg-primary">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/projets" className="text-fg-secondary hover:text-fg-primary">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-fg-secondary hover:text-fg-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent-primary">
              Réseaux
            </p>
            <ul className="space-y-2 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-fg-secondary hover:text-fg-primary"
                  >
                    <s.icon size={14} />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-fg-secondary">
            © {year} David. Tous droits réservés.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs text-fg-secondary transition-colors hover:text-fg-primary"
            aria-label="Retour en haut de la page"
          >
            Retour en haut <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}