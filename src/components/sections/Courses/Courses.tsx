// src/components/sections/Courses/Courses.tsx
import { Button } from '@/components/ui/Button/Button';
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll/RevealOnScroll';
import { CourseCard } from './CourseCard';
import { COURSES } from '@/data/courses';
import styles from './Courses.module.css';

export function Courses() {
  return (
    <section id="cursos" className={styles.section} aria-labelledby="cursos-title">
      <div className="container">
        <div className={styles.layout}>

          <RevealOnScroll className={styles.sidebar}>
            <SectionLabel>Formación</SectionLabel>
            <div className={styles.line} aria-hidden="true" />
            <h2 className={styles.title} id="cursos-title">
              Cursos diseñados para cada nivel.
            </h2>
            <Button href="/cursos" variant="ghost" className={styles.sidebarCta} id="ver-todos-cursos">
              Ver todos los cursos
            </Button>
          </RevealOnScroll>

          <div className={styles.grid}>
            {COURSES.map((course, i) => (
              <RevealOnScroll key={course.id} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <CourseCard course={course} />
              </RevealOnScroll>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
