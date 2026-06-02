// src/app/academia/page.tsx
import Image from 'next/image';
import { SubpageHeader } from '@/components/ui/SubpageHeader/SubpageHeader';
import { Button } from '@/components/ui/Button/Button';
import styles from './AcademiaPage.module.css';

export const metadata = {
  title: 'Nuestra Academia de Baristas',
  description: 'Conoce la historia, el método práctico "by Nisi" y la filosofía detrás de Torino Caffè Academy, escuela líder de baristas.',
};

export default function AcademiaPage() {
  return (
    <>
      <SubpageHeader title="La Academia" breadcrumbs={[{ label: 'La Academia' }]} />

      <section className={styles.section}>
        <div className="container">
          
          {/* Main Story Grid */}
          <div className={styles.storyGrid}>
            <div className={styles.textCol}>
              <span className={styles.tag}>Nuestra Filosofía</span>
              <h2 className={styles.heading}>El café es ciencia, arte y tradición.</h2>
              <p className={styles.paragraph}>
                Torino Caffè Academy nació de la convicción de que preparar un espresso perfecto no es una coincidencia,
                sino el resultado de la fusión exacta entre ciencia, técnica y pasión. Inspirada en las cafeterías tradicionales
                de Turín y Milán, nuestra academia busca preservar la rica cultura del espresso italiano mientras formamos
                con las metodologías de análisis técnico y sensorial más avanzadas del panorama internacional.
              </p>
              <p className={styles.paragraph}>
                Bajo la dirección técnica de <strong>Nisi</strong>, master barista con amplia trayectoria internacional,
                hemos desarrollado un método práctico único en el cual cada estudiante practica en su propia estación de espresso
                profesional, enfrentando los retos de una barra real desde el primer día.
              </p>
            </div>
            <div className={styles.imageCol}>
              <div className={styles.imageWrap}>
                <Image
                  src="/images/academy_interior.png"
                  alt="Interior moderno de la academia con estudiantes calibrando máquinas"
                  fill
                  sizes="(max-width: 900px) 100vw, 500px"
                  className={styles.image}
                />
              </div>
            </div>
          </div>

          {/* Pillars Section */}
          <div className={styles.pillarsSection}>
            <h3 className={styles.pillarsHeading}>Nuestros Pilares</h3>
            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <span className={styles.pillarNum}>01</span>
                <h4 className={styles.pillarTitle}>Estándares Internacionales</h4>
                <p className={styles.pillarText}>
                  Alineamos nuestros temarios bajo las directrices del Istituto Nazionale Espresso Italiano (INEI) y la Speciality Coffee Association (SCA).
                </p>
              </div>
              <div className={styles.pillarCard}>
                <span className={styles.pillarNum}>02</span>
                <h4 className={styles.pillarTitle}>100% Práctico</h4>
                <p className={styles.pillarText}>
                  Creemos en el aprendizaje a través del tacto, el olfato y la repetición. Limitamos nuestras clases para garantizar el uso individual de máquinas.
                </p>
              </div>
              <div className={styles.pillarCard}>
                <span className={styles.pillarNum}>03</span>
                <h4 className={styles.pillarTitle}>Equipos de Nivel Mundial</h4>
                <p className={styles.pillarText}>
                  Calibramos diariamente máquinas como La Marzocco Linea PB y Victoria Arduino Eagle One, preparando a nuestros alumnos para barras exigentes.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Banner */}
          <div className={styles.banner}>
            <div className={styles.bannerContent}>
              <h3 className={styles.bannerHeading}>¿Quieres conocer nuestras instalaciones?</h3>
              <p className={styles.bannerText}>
                Te invitamos a agendar una visita personalizada a nuestros talleres en Bogotá y conversar con nuestros instructores sobre tus metas profesionales.
              </p>
              <div className={styles.bannerCtas}>
                <Button href="#contacto" size="lg">
                  Agendar una Visita
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
