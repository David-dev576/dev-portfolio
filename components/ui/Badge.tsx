import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-bg-secondary px-3 py-1 font-mono text-xs text-fg-secondary',
        className
      )}
    >
      {children}
    </span>
  );
}