// src/components/sections/Courses/CourseCard.tsx
import Image from 'next/image';
import type { Course } from '@/types';
import styles from './Courses.module.css';

interface CourseCardProps {
  course: Course;
  delay?: 0 | 1 | 2 | 3 | 4;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className={styles.card} id={`curso-${course.id}`}>
      <div className={styles.cardImg}>
        <Image
          src={course.image}
          alt={course.alt}
          fill
          sizes="(max-width: 600px) 100vw, 400px"
          className={styles.cardImgEl}
        />
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardTag}>{course.level}</p>
        <h3 className={styles.cardTitle}>{course.title}</h3>
        <p className={styles.cardDesc}>{course.description}</p>
        <a href={course.href} className={styles.cardLink} aria-label={`Ver más sobre ${course.title}`}>
          Ver más
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </article>
  );
}
