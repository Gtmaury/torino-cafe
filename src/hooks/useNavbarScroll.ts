'use client';
// src/hooks/useNavbarScroll.ts
// Tracks scroll position to toggle the sticky navbar style

import { useState, useEffect } from 'react';

export function useNavbarScroll(threshold = 60): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
