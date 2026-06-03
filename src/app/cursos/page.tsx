// src/app/cursos/page.tsx
import { SubpageHeader } from '@/components/ui/SubpageHeader/SubpageHeader';
import { Button } from '@/components/ui/Button/Button';
import { CoursesCarousel } from './CoursesCarousel';
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

          <CoursesCarousel />
        </div>
      </section>

      {/* Calendario Académico Section */}
      <section id="calendarios" className={styles.calendarSection}>
        <div className="container">
          <div className={styles.calendarHeader}>
            <span className={styles.tag}>Calendario de Clases</span>
            <h2 className={styles.heading}>Próximas Fechas de Inicio</h2>
            <p className={styles.subheading}>
              Formaciones con cupo limitado (máximo 6 estudiantes por curso) para garantizar una práctica individual y personalizada en cada estación de espresso.
            </p>
          </div>

          <div className={styles.calendarContainer}>
            <div className={styles.calendarTable}>
              <div className={styles.tableHeader}>
                <div>Curso</div>
                <div>Fechas</div>
                <div>Horarios</div>
                <div>Cupos</div>
                <div>Acción</div>
              </div>
              
              {[
                {
                  course: 'Barista Básico — Calibración y Espresso',
                  dates: '15 al 18 de Junio, 2026',
                  hours: 'Matutino: 09:00 - 13:00',
                  spots: '2 cupos',
                  status: 'open'
                },
                {
                  course: 'Barista Intermedio — Texturización & Latte Art',
                  dates: '22 al 25 de Junio, 2026',
                  hours: 'Vespertino: 14:00 - 18:00',
                  spots: '3 cupos',
                  status: 'open'
                },
                {
                  course: 'Sensory & Cupping — Cata Profesional',
                  dates: '04 y 05 de Julio, 2026',
                  hours: 'Intensivo Fin de Semana: 08:30 - 17:30',
                  spots: 'Último cupo',
                  status: 'warning'
                },
                {
                  course: 'Barista Avanzado — Perfilado y Extracción',
                  dates: '13 al 17 de Julio, 2026',
                  hours: 'Matutino: 09:00 - 13:00',
                  spots: 'Agotado',
                  status: 'closed'
                }
              ].map((item, idx) => (
                <div key={idx} className={styles.tableRow}>
                  <div className={styles.courseCol}>
                    <strong>{item.course}</strong>
                  </div>
                  <div className={styles.dateCol}>{item.dates}</div>
                  <div className={styles.hoursCol}>{item.hours}</div>
                  <div className={styles.spotsCol}>
                    <span className={`${styles.spotBadge} ${styles[item.status]}`}>
                      {item.spots}
                    </span>
                  </div>
                  <div className={styles.actionCol}>
                    {item.status !== 'closed' ? (
                      <Button href="/#contacto" size="sm" variant="ghost">
                        Reservar
                      </Button>
                    ) : (
                      <span className={styles.soldOut}>Sin Cupos</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.calendarNote}>
              <p>
                * ¿Necesitas una fecha a medida o capacitación corporativa? Contáctanos para diseñar un calendario personalizado para tu cafetería o equipo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
