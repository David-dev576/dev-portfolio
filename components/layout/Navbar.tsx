'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

const links = [
  { href: '/dev-portfolio/#accueil', label: 'Accueil' },
  { href: '/dev-portfolio/#a-propos', label: 'À propos' },
  { href: '/dev-portfolio/#competences', label: 'Compétences' },
  { href: '/dev-portfolio/projets', label: 'Projets' }, // Lien de page
  { href: '/dev-portfolio/#parcours', label: 'Parcours' },
  { href: '/dev-portfolio/#contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-bg-primary/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <a href="/dev-portfolio/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          D.
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              {/* On utilise <a> pour TOUT, car c'est le plus sûr sur GitHub Pages */}
              <a
                href={link.href}
                className="text-sm font-medium text-fg-secondary transition-colors hover:text-fg-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <ThemeToggle />
          <a
            href="/dev-portfolio/#contact"
            className="hidden md:inline-flex text-sm font-medium hover:text-accent-primary transition-colors"
          >
            Me contacter
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center md:hidden"
            aria-label={open ? 'Fermer' : 'Ouvrir'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg-primary md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-base font-medium text-fg-secondary hover:text-fg-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}