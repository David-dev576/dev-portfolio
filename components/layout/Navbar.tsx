'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

const links = [
  { href: '/dev-portfolio/#accueil', label: 'Home' },
  { href: '/dev-portfolio/#a-propos', label: 'About' },
  { href: '/dev-portfolio/#competences', label: 'Skills' },
  { href: '/dev-portfolio/projets', label: 'Projects' },
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
          ? 'bg-bg-primary/90 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-20 w-full max-w-5xl items-center justify-between px-6">
        {/* Logo simple */}
        <a href="/dev-portfolio/" className="text-xl font-bold tracking-tight">
          D.
        </a>

        {/* Liens centraux */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-fg-secondary transition-colors hover:text-fg-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions (Thème + Menu mobile) */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center md:hidden"
            aria-label={open ? 'Close' : 'Menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
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