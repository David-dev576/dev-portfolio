'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '/dev-portfolio/projets', label: 'Projets' }, // Lien vers la vraie page
  { href: '#parcours', label: 'Parcours' },
  { href: '#contact', label: 'Contact' },
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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-bg-primary/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="#accueil" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight" aria-label="Retour à l'accueil">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary text-sm font-bold text-white">
            D
          </span>
          <span className="hidden sm:inline">David</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              {/* On utilise <a> pour les ancres et <Link> pour la page /projets */}
              {link.href.startsWith('#') ? (
                <a
                  href={link.href}
                  className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden md:block">
            {/* Ici, on pointe vers l'ancre contact */}
            <Button href="#contact" variant="primary">
              Me contacter
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-secondary md:hidden"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg-primary md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                {link.href.startsWith('#') ? (
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-2">
              <Button href="#contact" variant="primary" className="w-full">
                Me contacter
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}