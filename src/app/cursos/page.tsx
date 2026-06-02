// src/app/cursos/page.tsx
import Image from 'next/image';
import { SubpageHeader } from '@/components/ui/SubpageHeader/SubpageHeader';
import { Button } from '@/components/ui/Button/Button';
import { COURSES } from '@/data/courses';
import styles from './CoursesCatalog.module.css';

export const metadata = {
  title: 'Programas de Formación Barista',
  description: 'Conoce nuestros cursos de formación barista profesional: Nivel Básico, Intermedio, Avanzado y Sensory & Cupping.',
};

export default function CoursesCatalogPage() {
  return (
    <>
      <SubpageHeader title="Nuestros Cursos" breadcrumbs={[{ label: 'Cursos' }]} />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.intro}>
            <p>
              Diseñamos programas educativos rigurosos pensados para acompañarte en tu carrera cafetera,
              desde tus primeros contactos con la extracción de espresso hasta las técnicas más avanzadas
              de perfilado químico y cata profesional bajo estándares SCA e INEI.
            </p>
          </div>

          <div className={styles.grid}>
            {COURSES.map((course) => (
              <article key={course.id} className={styles.card}>
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
                    <Button href={course.href} size="md">
                      Ver Plan de Estudio
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
