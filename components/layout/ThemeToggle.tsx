'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Rendu "placeholder" identique au serveur et au client
  // pour éviter le mismatch d'hydratation
  if (!mounted) {
    return (
      <div
        className="h-9 w-9 rounded-full border border-border"
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-secondary transition-colors hover:border-accent-primary/50 hover:text-fg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}