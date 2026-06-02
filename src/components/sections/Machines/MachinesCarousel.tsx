'use client';
// src/components/sections/Machines/MachinesCarousel.tsx
// Client Component — wraps carousel state and rendering

import Image from 'next/image';
import { useCarousel } from '@/hooks/useCarousel';
import { MACHINES } from '@/data/machines';
import styles from './Machines.module.css';

export function MachinesCarousel() {
  const { current, canPrev, canNext, prev, next, trackRef } = useCarousel({
    total: MACHINES.length,
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
              <div className={styles.cardImg}>
                <Image
                  src={machine.image}
                  alt={machine.alt}
                  fill
                  sizes="280px"
                  className={styles.cardImgEl}
                />
              </div>
              <div className={styles.cardInfo}>
                <p className={styles.cardBrand}>{machine.brand}</p>
                <p className={styles.cardModel}>{machine.model}</p>
                <a href={machine.href} className={styles.cardLink} aria-label={`Ver detalles de ${machine.brand} ${machine.model}`}>
                  Ver detalles
                  <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.nav}>
          <button
            className={styles.navBtn}
            id="carousel-prev"
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
            id="carousel-next"
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

        <p className={styles.footerText}>
          Explora todas las máquinas con las que practicarás y perfeccionarás la técnica.
        </p>

        <a href="#machines" className={styles.allLink} id="ver-todas-maquinas">
          Ver todas las máquinas
        </a>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}
