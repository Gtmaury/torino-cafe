'use client';
// src/hooks/useCarousel.ts
// Encapsulates all carousel state and logic

import { useState, useCallback, useEffect, useRef } from 'react';
import { clamp } from '@/lib/utils';

interface UseCarouselOptions {
  total: number;
  visibleFn?: () => number;
}

interface UseCarouselReturn {
  current:   number;
  canPrev:   boolean;
  canNext:   boolean;
  goTo:      (index: number) => void;
  prev:      () => void;
  next:      () => void;
  trackRef:  React.RefObject<HTMLDivElement | null>;
}

export function useCarousel({ total, visibleFn }: UseCarouselOptions): UseCarouselReturn {
  const [current, setCurrent]     = useState(0);
  const [visible, setVisible]     = useState(5);
  const trackRef                  = useRef<HTMLDivElement>(null);

  // Update visible count on resize
  useEffect(() => {
    const update = () => {
      if (visibleFn) { setVisible(visibleFn()); return; }
      const w = window.innerWidth;
      if (w >= 1100) setVisible(5);
      else if (w >= 900) setVisible(3);
      else if (w >= 600) setVisible(2);
      else setVisible(1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [visibleFn]);

  const maxIndex = Math.max(0, total - visible);

  const goTo = useCallback((index: number) => {
    setCurrent(clamp(index, 0, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    if (current <= 0) {
      goTo(maxIndex);
    } else {
      goTo(current - 1);
    }
  }, [current, maxIndex, goTo]);

  const next = useCallback(() => {
    if (current >= maxIndex) {
      goTo(0);
    } else {
      goTo(current + 1);
    }
  }, [current, maxIndex, goTo]);

  // Translate the track
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('[data-carousel-card]');
    if (!card) return;
    const cardWidth = card.offsetWidth + 20; // card + gap
    track.style.transform = `translateX(-${current * cardWidth}px)`;
  }, [current]);

  // Touch / drag support
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let startX = 0;

    const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onTouchEnd   = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          next();
        } else {
          prev();
        }
      }
    };

    track.addEventListener('touchstart', onTouchStart, { passive: true });
    track.addEventListener('touchend',   onTouchEnd);
    return () => {
      track.removeEventListener('touchstart', onTouchStart);
      track.removeEventListener('touchend',   onTouchEnd);
    };
  }, [next, prev]);

  return {
    current,
    canPrev: maxIndex > 0,
    canNext: maxIndex > 0,
    goTo,
    prev,
    next,
    trackRef,
  };
}
