'use client';
// src/components/ui/RevealOnScroll/RevealOnScroll.tsx
// Wraps children in a div that fades-up when it enters the viewport.

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

interface RevealOnScrollProps {
  children:    React.ReactNode;
  className?:  string;
  delay?:      0 | 1 | 2 | 3 | 4;
  tag?:        keyof React.JSX.IntrinsicElements;
}

const delayClass: Record<number, string> = {
  0: 'reveal',
  1: 'reveal reveal-delay-1',
  2: 'reveal reveal-delay-2',
  3: 'reveal reveal-delay-3',
  4: 'reveal reveal-delay-4',
};

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  tag: Tag = 'div',
}: RevealOnScrollProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    // @ts-expect-error — dynamic tag with ref is valid
    <Tag ref={ref} className={cn(delayClass[delay], className)}>
      {children}
    </Tag>
  );
}
