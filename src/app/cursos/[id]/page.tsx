// src/app/cursos/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { SubpageHeader } from '@/components/ui/SubpageHeader/SubpageHeader';
import { Button } from '@/components/ui/Button/Button';
import { COURSES } from '@/data/courses';
import styles from './CourseDetail.module.css';

interface CourseDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return COURSES.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: CourseDetailPageProps) {
  const { id } = await params;
  const course = COURSES.find((c) => c.id === id);
  if (!course) return {};

  return {
    title: `Curso de ${course.title} — Plan de Estudios`,
    description: `Detalles e inscripción al programa ${course.title}. Duración: ${course.duration}. Certificación avalada Torino Caffè Academy.`,
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { id } = await params;
  const course = COURSES.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  return (
    <>
      <SubpageHeader
        title={course.title}
        breadcrumbs={[
          { label: 'Cursos', href: '/cursos' },
          { label: course.title },
        ]}
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            
            {/* Left: General Info and Syllabus */}
            <div className={styles.leftCol}>
              
              {/* Introduction */}
              <div className={styles.introBox}>
                <p className={styles.levelTag}>{course.level}</p>
                <h2 className={styles.heading}>Plan de Estudios Detallado</h2>
                <p className={styles.introText}>{course.description}</p>
              </div>

              {/* Syllabus (Temario) */}
              {course.syllabus && course.syllabus.length > 0 && (
                <div className={styles.syllabus}>
                  {course.syllabus.map((module, mIdx) => (
                    <div key={mIdx} className={styles.moduleCard}>
                      <h3 className={styles.moduleTitle}>
                        {module.moduleTitle}
                      </h3>
                      <ul className={styles.topicsList}>
                        {module.topics.map((topic, tIdx) => (
                          <li key={tIdx} className={styles.topicItem}>
                            <svg className={styles.dotIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Right: Technical Details Panel & Call to action */}
            <div className={styles.rightCol}>
              
              {/* Image banner */}
              <div className={styles.imageWrap}>
                <Image
                  src={course.image}
                  alt={course.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 450px"
                  priority
                  className={styles.image}
                />
              </div>

              {/* Course Specifications Panel */}
              <div className={styles.detailsPanel}>
                <h3 className={styles.panelTitle}>Información del Programa</h3>
                <div className={styles.panelItems}>
                  <div className={styles.panelItem}>
                    <strong>Duración:</strong>
                    <span>{course.duration}</span>
                  </div>
                  <div className={styles.panelItem}>
                    <strong>Modalidad:</strong>
                    <span>{course.modality}</span>
                  </div>
                  <div className={styles.panelItem}>
                    <strong>Inversión:</strong>
                    <span className={styles.priceHighlight}>{course.price}</span>
                  </div>
                  <div className={styles.panelItem}>
                    <strong>Certificado:</strong>
                    <span>{course.certification}</span>
                  </div>
                </div>
              </div>

              {/* Contact / Registration */}
              <div className={styles.ctaBox}>
                <h3 className={styles.ctaTitle}>¿Listo para iniciar?</h3>
                <p className={styles.ctaText}>
                  Reserva tu cupo para la próxima sesión de <strong>{course.title}</strong> o ponte en contacto con nuestros coordinadores para recibir más información.
                </p>
                <div className={styles.ctaButtons}>
                  <Button href="mailto:hola@torinocaffeacademy.com" size="lg">
                    Inscribirme Ahora
                  </Button>
                  <Button href="tel:+573001234567" variant="outline" size="lg">
                    Preguntar por WhatsApp
                  </Button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
