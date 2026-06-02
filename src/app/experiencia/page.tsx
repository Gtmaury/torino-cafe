// src/app/experiencia/page.tsx
import { SubpageHeader } from '@/components/ui/SubpageHeader/SubpageHeader';
import { Button } from '@/components/ui/Button/Button';
import styles from './ExperienciaPage.module.css';

export const metadata = {
  title: 'Experiencia Torino — Talleres y Catas de Café',
  description: 'Vive la cultura del café a través de nuestras catas de especialidad, talleres prácticos de barista por un día y eventos corporativos personalizados.',
};

const EXPERIENCIAS = [
  {
    id: 'barista-dia',
    tag: 'Ideal para aficionados y entusiastas',
    title: 'Barista por un Día',
    desc: 'Sumérgete en la rutina real de un barista profesional. Aprende a calibrar la molienda, extraer un espresso perfecto y texturizar leche para tus primeras creaciones de Latte Art utilizando nuestras estaciones y máquinas profesionales de nivel de competencia.',
    details: [
      { label: 'Duración', value: '4 horas' },
      { label: 'Modalidad', value: 'Presencial (Máximo 6 cupos)' },
      { label: 'Inversión', value: '$180,000 COP' },
      { label: 'Incluye', value: 'Materia prima, certificado y degustación' },
    ],
    icon: 'coffee-machine',
  },
  {
    id: 'cata-sensorial',
    tag: 'Entrenamiento sensorial único',
    title: 'Cata de Orígenes & Cupping',
    desc: 'Despierta tus sentidos aprendiendo a catar bajo los protocolos oficiales de la SCA (Specialty Coffee Association). Aprenderás a identificar perfiles de sabor, notas de cata, acidez, cuerpo y a reconocer la calidad de diferentes cafés de especialidad de Colombia.',
    details: [
      { label: 'Duración', value: '3 horas' },
      { label: 'Modalidad', value: 'Presencial - Teórico / Práctico' },
      { label: 'Inversión', value: '$150,000 COP' },
      { label: 'Incluye', value: 'Guía sensorial de descriptores y cata de 4 orígenes' },
    ],
    icon: 'spoon',
  },
  {
    id: 'metodos-filtrado',
    tag: 'Química y precisión en taza',
    title: 'Taller de Métodos de Filtrado',
    desc: 'Aprende a preparar café con métodos de extracción manual. Descubre cómo controlar variables clave como la temperatura del agua, el ratio, la molienda y la turbulencia para extraer el mejor perfil en la V60, Chemex, Aeropress y Prensa Francesa.',
    details: [
      { label: 'Duración', value: '3.5 horas' },
      { label: 'Modalidad', value: 'Presencial' },
      { label: 'Inversión', value: '$140,000 COP' },
      { label: 'Incluye', value: 'Recetario digital y práctica con 4 métodos' },
    ],
    icon: 'droplet',
  },
  {
    id: 'eventos-corporativos',
    tag: 'Eventos corporativos y team building',
    title: 'Café & Team Building para Empresas',
    desc: 'Diseñamos experiencias interactivas y retos sensoriales para equipos de trabajo. Fomenta la integración de tu equipo a través de catas de café privadas, talleres express de barismo y dinámicas colaborativas dirigidas por nuestros instructores.',
    details: [
      { label: 'Duración', value: 'A convenir (Segun necesidades)' },
      { label: 'Modalidad', value: 'Grupos privados / Presencial u Oficina' },
      { label: 'Inversión', value: 'Cotización personalizada' },
      { label: 'Incluye', value: 'Materiales completos y barra de café ilimitada' },
    ],
    icon: 'users',
  },
];

export default function ExperienciaPage() {
  return (
    <>
      <SubpageHeader title="Experiencia Torino" breadcrumbs={[{ label: 'Experiencia' }]} />

      <section className={styles.section}>
        <div className="container">
          
          {/* Intro Section */}
          <div className={styles.intro}>
            <span className={styles.topTag}>Imersión Cafetera</span>
            <h1 className={styles.mainHeading}>Más que aprender café, es vivir el café.</h1>
            <p className={styles.subHeading}>
              Nuestras experiencias están diseñadas para conectar a los apasionados, entusiastas y equipos empresariales con la verdadera cultura del café de especialidad a través de dinámicas 100% prácticas, guiadas por baristas certificados.
            </p>
          </div>

          {/* Grid of Experiences */}
          <div className={styles.grid}>
            {EXPERIENCIAS.map((exp) => (
              <article key={exp.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrap}>
                    <ExperienceIcon type={exp.icon} />
                  </div>
                  <div>
                    <span className={styles.tag}>{exp.tag}</span>
                    <h2 className={styles.title}>{exp.title}</h2>
                  </div>
                </div>
                
                <p className={styles.desc}>{exp.desc}</p>
                
                <div className={styles.detailsList}>
                  {exp.details.map((detail, idx) => (
                    <div key={idx} className={styles.detailItem}>
                      <span className={styles.detailLabel}>{detail.label}:</span>
                      <span className={styles.detailValue}>{detail.value}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.cardAction}>
                  <Button href="/#contacto" size="md" variant="outline">
                    Reservar Experiencia
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Banner */}
          <div className={styles.banner}>
            <div className={styles.bannerContent}>
              <h3 className={styles.bannerHeading}>¿Quieres regalar una experiencia?</h3>
              <p className={styles.bannerText}>
                Sorprende a esa persona especial con una tarjeta de regalo física o digital para cualquiera de nuestros talleres y catas sensoriales de café.
              </p>
              <div className={styles.bannerCtas}>
                <Button href="/#contacto" size="lg">
                  Adquirir Gift Card
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

function ExperienceIcon({ type }: { type: string }) {
  if (type === 'coffee-machine') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M12 2v20M17 5H7a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z"/>
      <path d="M8 9h8M8 13h8M5 17h14"/>
    </svg>
  );
  if (type === 'spoon') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M7 11c0 2.21 1.79 4 4 4s4-1.79 4-4V3H7v8z"/>
      <path d="M11 15v6M9 21h4"/>
    </svg>
  );
  if (type === 'droplet') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M12 22a7 7 0 007-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 007 7z"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
    </svg>
  );
}
