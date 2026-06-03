// src/app/preguntas-frecuentes/page.tsx
import { SubpageHeader } from '@/components/ui/SubpageHeader/SubpageHeader';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Preguntas Frecuentes — Torino Caffè Academy',
  description: 'Respuestas a tus dudas sobre los programas de baristas, certificaciones internacionales y horarios de Torino Caffè Academy.',
};

const FAQS = [
  {
    q: '¿Necesito experiencia previa para inscribirme en el curso básico?',
    a: 'No, no necesitas absolutamente ninguna experiencia previa. Nuestro curso de "Fundamentos del Espresso" está diseñado desde cero para aficionados y personas que se inician en el mundo del café, abarcando desde la biología del grano hasta las primeras técnicas de calibración y texturizado de leche.',
  },
  {
    q: '¿Qué validez tienen las certificaciones INEI y SCA?',
    a: 'La certificación del Istituto Nazionale Espresso Italiano (INEI) y la Specialty Coffee Association (SCA) tienen reconocimiento mundial. Son las credenciales más prestigiosas en la industria del café de especialidad y te habilitan profesionalmente para trabajar como barista experto o consultor de café en cualquier país del mundo.',
  },
  {
    q: '¿Los cursos incluyen los insumos y materiales?',
    a: 'Sí, la tarifa de matrícula cubre todos los materiales necesarios para el aprendizaje práctico: granos de café de especialidad de diversos orígenes y procesos de tostión, leche fresca para latte art, delantal oficial de la academia y material de estudio teórico en formato digital.',
  },
  {
    q: '¿Cuál es la proporción de teoría y práctica en las clases?',
    a: 'Nuestra metodología de enseñanza es eminentemente práctica. Aproximadamente el 80% de la duración total de cada programa se realiza en estaciones de barista reales, operando molinos y máquinas profesionales de forma activa para desarrollar la memoria muscular e intuición sensorial. El 20% restante se enfoca en el marco teórico de la extracción, química del agua y origen de los granos.',
  },
  {
    q: '¿Tienen flexibilidad de horarios para personas que trabajan?',
    a: 'Sí, ofrecemos grupos de estudio en horarios diurnos, nocturnos y fines de semana (sábados intensivos) para adaptarnos a las responsabilidades profesionales o de estudio de nuestros estudiantes.',
  },
  {
    q: '¿Qué pasa si repruebo el examen de certificación?',
    a: 'Entendemos que los estándares técnicos internacionales son muy rigurosos. Si no apruebas el examen teórico o práctico en el primer intento, te brindamos retroalimentación detallada y acceso prioritario a una tutoría de repaso personalizada. Podrás reagendar una nueva presentación del examen por un costo administrativo mínimo de derechos de evaluación.',
  },
];

export default function FAQPage() {
  return (
    <>
      <SubpageHeader title="Preguntas Frecuentes" breadcrumbs={[{ label: 'Preguntas Frecuentes' }]} />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <p style={{ marginBottom: '48px', fontSize: '16px' }}>
                Encuentra respuestas rápidas a las inquietudes más comunes sobre el proceso de matrícula,
                el desarrollo de clases y la acreditación profesional en nuestra academia de baristas.
              </p>

              {FAQS.map((faq, idx) => (
                <div key={idx} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.q}</h3>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              ))}

              <div className={styles.divider} />

              <h2 style={{ marginTop: '20px' }}>¿Aún tienes dudas?</h2>
              <p>
                Si no encuentras la respuesta a tu inquietud específica, escríbenos directamente a través de
                nuestro formulario de contacto o al correo <strong>info@torinocaffe.info</strong> y nuestro equipo docente te responderá a la mayor brevedad posible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
