'use client';
// src/app/maquinas/MachinesCatalogCarousel.tsx
import { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCarousel } from '@/hooks/useCarousel';
import { MACHINES } from '@/data/machines';
import styles from './Catalog.module.css';

export function MachinesCatalogCarousel() {
  const visibleFn = useCallback(() => {
    if (typeof window === 'undefined') return 3;
    const w = window.innerWidth;
    if (w >= 1200) return 3;
    if (w >= 800) return 2;
    return 1;
  }, []);

  const { current, canPrev, canNext, prev, next, trackRef } = useCarousel({
    total: MACHINES.length,
    visibleFn,
  });

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.trackOuter}>
        <div className={styles.track} ref={trackRef}>
          {MACHINES.map((machine) => (
            <article
              key={machine.id}
              className={styles.card}
              id={`maquina-${machine.id}`}
              data-carousel-card
            >
              <Link href={machine.href} className={styles.cardLinkWrapper}>
                <div className={styles.imageWrap}>
                  <Image
                    src={machine.image}
                    alt={machine.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className={styles.image}
                  />
                </div>
                <div className={styles.body}>
                  <p className={styles.brand}>{machine.brand}</p>
                  <h2 className={styles.model}>{machine.model}</h2>
                  <p className={styles.desc}>{machine.description}</p>
                  
                  {machine.specs && (
                    <div className={styles.specPreview}>
                      <span className={styles.specItem}><strong>Origen:</strong> {machine.specs.origen}</span>
                      <span className={styles.specItem}><strong>Presión:</strong> {machine.specs.presion}</span>
                    </div>
                  )}

                  <div className={styles.cta}>
                    <div className={styles.ctaBtn}>
                      Características Clave
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className={styles.controls}>
        <button
          className={styles.navBtn}
          id="machines-carousel-prev"
          onClick={prev}
          disabled={!canPrev}
          aria-label="Máquina anterior"
          style={{ opacity: canPrev ? 1 : 0.3 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <button
          className={styles.navBtn}
          id="machines-carousel-next"
          onClick={next}
          disabled={!canNext}
          aria-label="Siguiente máquina"
          style={{ opacity: canNext ? 1 : 0.3 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
