import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-bg-card p-6 transition-all duration-300',
        'hover:border-accent-primary/40 hover:shadow-lg hover:shadow-accent-primary/5',
        className
      )}
    >
      {children}
    </div>
  );
}