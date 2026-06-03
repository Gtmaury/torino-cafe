// src/components/sections/Courses/CourseCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Course } from '@/types';
import styles from './Courses.module.css';

interface CourseCardProps {
  course: Course;
  delay?: 0 | 1 | 2 | 3 | 4;
}

export function CourseCard({ course }: CourseCardProps) {
  const parts = course.title.split(' ');
  const firstLine = parts[0];
  const secondLine = parts.slice(1).join(' ');
  const shortDesc = course.description.split('.')[0] + '.';

  return (
    <Link href={course.href} className={styles.cardLinkWrapper}>
      <article className={styles.card} id={`curso-${course.id}`}>
        <div className={styles.cardImg}>
          <Image
            src={course.image}
            alt={course.alt}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 250px"
            className={styles.cardImgEl}
          />
        </div>
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>
            <span className={styles.titleLine1}>{firstLine}</span>
            <span className={styles.titleLine2}>{secondLine}</span>
          </h3>
          <p className={styles.cardDesc}>{shortDesc}</p>
          <div className={styles.cardLink} aria-label={`Ver más sobre ${course.title}`}>
            Ver más
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden="true" className={styles.linkArrow}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
