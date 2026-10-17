import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn('relative px-6 py-20 md:py-28', className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-fg-secondary">{description}</p>
      )}
    </div>
  );
}