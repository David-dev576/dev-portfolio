'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'ghost';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  ariaLabel?: string;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:opacity-90 hover:shadow-lg hover:shadow-accent-primary/20',
  outline:
    'border border-border text-fg-primary hover:bg-bg-card hover:border-accent-primary/50',
  ghost: 'text-fg-secondary hover:text-fg-primary hover:bg-bg-card',
};

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  type = 'button',
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}