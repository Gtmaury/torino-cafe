'use client';
// src/app/cursos/CoursesCarousel.tsx
import { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCarousel } from '@/hooks/useCarousel';
import { COURSES } from '@/data/courses';
import styles from './CoursesCatalog.module.css';

export function CoursesCarousel() {
  const visibleFn = useCallback(() => {
    if (typeof window === 'undefined') return 3;
    const w = window.innerWidth;
    if (w >= 1200) return 3;
    if (w >= 800) return 2;
    return 1;
  }, []);

  const { current, canPrev, canNext, prev, next, trackRef } = useCarousel({
    total: COURSES.length,
    visibleFn,
  });

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.trackOuter}>
        <div className={styles.track} ref={trackRef}>
          {COURSES.map((course) => (
            <article
              key={course.id}
              className={styles.card}
              id={`curso-${course.id}`}
              data-carousel-card
            >
              <Link href={course.href} className={styles.cardLinkWrapper}>
                <div className={styles.imageWrap}>
                  <Image
                    src={course.image}
                    alt={course.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className={styles.image}
                  />
                </div>
                <div className={styles.body}>
                  <div className={styles.meta}>
                    <span className={styles.level}>{course.level}</span>
                    {course.duration && <span className={styles.duration}>{course.duration}</span>}
                  </div>
                  
                  <h2 className={styles.title}>{course.title}</h2>
                  <p className={styles.desc}>{course.description}</p>
                  
                  <div className={styles.details}>
                    {course.modality && (
                      <div className={styles.detailItem}>
                        <strong>Modalidad:</strong> {course.modality}
                      </div>
                    )}
                    {course.price && (
                      <div className={styles.detailItem}>
                        <strong>Inversión:</strong> <span className={styles.price}>{course.price}</span>
                      </div>
                    )}
                  </div>

                  <div className={styles.cta}>
                    <div className={styles.ctaBtn}>
                      Ver Plan de Estudio
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
          id="courses-carousel-prev"
          onClick={prev}
          disabled={!canPrev}
          aria-label="Curso anterior"
          style={{ opacity: canPrev ? 1 : 0.3 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <button
          className={styles.navBtn}
          id="courses-carousel-next"
          onClick={next}
          disabled={!canNext}
          aria-label="Siguiente curso"
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
