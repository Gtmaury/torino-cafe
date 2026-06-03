// src/app/academia/page.tsx
import Image from 'next/image';
import { SubpageHeader } from '@/components/ui/SubpageHeader/SubpageHeader';
import { Button } from '@/components/ui/Button/Button';
import styles from './AcademiaPage.module.css';

export const metadata = {
  title: 'Nuestra Academia de Baristas',
  description: 'Conoce la historia, el método práctico y la filosofía detrás de Torino Caffè Academy, escuela líder de baristas.',
};

export default function AcademiaPage() {
  return (
    <>
      <SubpageHeader title="La Academia" breadcrumbs={[{ label: 'La Academia' }]} />

      {/* Filosofía Section */}
      <section id="filosofia" className={styles.section}>
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
                  src="/images/academy_philosophy_v3.png"
                  alt="Interior moderno de la academia con estudiantes calibrando máquinas"
                  fill
                  sizes="(max-width: 900px) 100vw, 500px"
                  className={styles.image}
                  priority
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

        </div>
      </section>

      {/* Instalaciones & Espacio Section */}
      <section id="instalaciones" className={`${styles.section} ${styles.sectionBorder}`}>
        <div id="espacio" className={styles.anchorOffset} />
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.imageCol}>
              <div className={styles.imageWrap}>
                <Image
                  src="/images/academy_instalaciones_v3.png"
                  alt="Estación de Barista con La Marzocco Linea PB"
                  fill
                  sizes="(max-width: 900px) 100vw, 500px"
                  className={styles.image}
                />
              </div>
            </div>
            <div className={styles.textCol}>
              <span className={styles.tag}>Las Instalaciones / El Espacio</span>
              <h2 className={styles.heading}>Un Taller Barista Diseñado para la Excelencia</h2>
              <p className={styles.paragraph}>
                Nuestras instalaciones en Valencia, Venezuela están diseñadas para simular el entorno de trabajo real de una cafetería de especialidad de alto volumen. Cada alumno dispone de una <strong>estación individual de barista</strong>, evitando tiempos de espera y maximizando la práctica real con la máquina.
              </p>
              <p className={styles.paragraph}>
                Contamos con maquinaria icónica calibrada diariamente: máquinas multiboiler de marcas referentes como <strong>La Marzocco Linea PB</strong>, <strong>Victoria Arduino Eagle One</strong>, <strong>Sanremo</strong>, y molinos de molienda micrométrica de alta precisión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones Section */}
      <section id="certificaciones" className={`${styles.section} ${styles.sectionBorder}`}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.tag}>Acreditación Internacional</span>
            <h2 className={styles.headingCentered}>Rutas y Protocolos de Certificación</h2>
            <p className={styles.subheadingCentered}>
              Nuestros temarios de formación están estructurados siguiendo los estándares internacionales más reconocidos de la industria del café.
            </p>
          </div>

          <div className={styles.certsGrid}>
            <div className={styles.certCard}>
              <div className={styles.certHeader}>
                <span className={styles.certBadge}>SCA</span>
                <h3 className={styles.certTitle}>Specialty Coffee Association</h3>
              </div>
              <p className={styles.certText}>
                Te preparamos bajo la metodología del <strong>Coffee Skills Program (CSP)</strong> de la SCA. Cubrimos los aspectos esenciales en los módulos de Barista Skills, Brewing y Sensory Skills, facilitando tu camino hacia los exámenes de certificación internacional.
              </p>
            </div>

            <div className={styles.certCard}>
              <div className={styles.certHeader}>
                <span className={styles.certBadge}>INEI</span>
                <h3 className={styles.certTitle}>Istituto Nazionale Espresso Italiano</h3>
              </div>
              <p className={styles.certText}>
                Enseñamos las reglas técnicas de oro para la elaboración del auténtico <strong>Espresso Italiano Certificado</strong> y Cappuccino Italiano. Domina el análisis sensorial (módulo de Cata) y la calibración mecánica bajo los protocolos de Italia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria" className={`${styles.section} ${styles.sectionBorder}`}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.tag}>Galería de Fotos</span>
            <h2 className={styles.headingCentered}>Nuestra Academia en Acción</h2>
            <p className={styles.subheadingCentered}>
              Descubre el día a día de nuestros alumnos y las sesiones prácticas en nuestras estaciones de espresso.
            </p>
          </div>

          <div className={styles.galleryGrid}>
            {[
              { src: '/images/gallery_1_v3.png', alt: 'Sesión teórica y calibración de baristas' },
              { src: '/images/gallery_2_v3.png', alt: 'Extracción de espresso en La Marzocco' },
              { src: '/images/gallery_3_v3.png', alt: 'Sesión de cata de café especial (cupping)' },
              { src: '/images/gallery_4_v3.png', alt: 'Victoria Arduino Eagle One de la academia' },
              { src: '/images/gallery_5_v3.png', alt: 'Calibración de molienda y análisis sensorial' },
              { src: '/images/gallery_6_v3.png', alt: 'Sanremo Cafe Racer en barra de práctica' }
            ].map((img, index) => (
              <div key={index} className={styles.galleryItem}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  className={styles.galleryImage}
                />
                <div className={styles.galleryOverlay}>
                  <p className={styles.galleryText}>{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.banner}>
            <div className={styles.bannerContent}>
              <h3 className={styles.bannerHeading}>¿Quieres conocer nuestras instalaciones?</h3>
              <p className={styles.bannerText}>
                Te invitamos a agendar una visita personalizada a nuestros talleres en Valencia, Venezuela y conversar con nuestros instructores sobre tus metas profesionales.
              </p>
              <div className={styles.bannerCtas}>
                <Button href="/#contacto" size="lg">
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
