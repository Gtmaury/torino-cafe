// src/app/terminos-condiciones/page.tsx
import { SubpageHeader } from '@/components/ui/SubpageHeader/SubpageHeader';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Términos y Condiciones — Torino Caffè Academy',
  description: 'Términos de servicio, políticas de matrícula y condiciones de reserva en Torino Caffè Academy.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <SubpageHeader title="Términos y Condiciones" breadcrumbs={[{ label: 'Términos' }]} />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <p>Última actualización: 1 de Junio de 2026</p>
              
              <p>
                Le rogamos que lea detenidamente las presentes Condiciones de Servicio antes de utilizar nuestro sitio web o matricularse en nuestros programas formativos de baristas.
                Al acceder o utilizar cualquier parte del sitio web o al confirmar una reserva, usted acepta quedar vinculado por estos Términos y Condiciones.
              </p>

              <h2>1. Políticas de Reserva y Matrícula</h2>
              <p>
                Para garantizar una experiencia de aprendizaje personalizada de alto estándar, los cupos para nuestros cursos prácticos (básico, intermedio, avanzado y análisis sensorial) son estrictamente limitados.
              </p>
              <p>
                Una reserva se considera formalmente confirmada únicamente una vez recibido el pago del depósito correspondiente (o pago total) y enviado el comprobante oficial de matrícula por correo electrónico.
              </p>

              <h2>2. Cancelaciones y Reprogramaciones</h2>
              <ul>
                <li><strong>Cancelación por parte del estudiante:</strong> Las cancelaciones realizadas con más de 7 días calendario de antelación al inicio del curso tendrán derecho a una devolución del 100% del importe abonado o la reprogramación a una nueva fecha sin cargo adicional.</li>
                <li>Las cancelaciones notificadas con menos de 7 días pero más de 48 horas antes del curso tendrán una penalización del 30% del costo del curso en concepto de gastos administrativos.</li>
                <li>Las cancelaciones con menos de 48 horas de antelación no tendrán derecho a devolución ni crédito para futuros cursos.</li>
                <li><strong>Cancelación por parte de la Academia:</strong> Nos reservamos el derecho de cancelar o reprogramar un curso debido a fuerza mayor o si no se alcanza el cupo mínimo. En este caso, se reembolsará el 100% de la matrícula o se ofrecerá prioridad para la nueva fecha elegida.</li>
              </ul>

              <h2>3. Certificaciones Internacionales (INEI y SCA)</h2>
              <p>
                Los exámenes prácticos y teóricos para la obtención de certificaciones del Instituto Nacional de Espresso Italiano (INEI) y la Specialty Coffee Association (SCA) se rigen bajo los protocolos estrictos de estas entidades.
              </p>
              <p>
                La matrícula en el curso otorga el derecho a la instrucción y al material de estudio, pero la emisión del certificado oficial internacional está supeditada a que el estudiante apruebe los estándares mínimos exigidos por los certificadores autorizados.
              </p>

              <h2>4. Uso de las Instalaciones y Equipamientos</h2>
              <p>
                Nuestros estudiantes practican con estaciones de espresso profesionales de última generación (La Marzocco, Sanremo, Faema).
                Los estudiantes deben seguir rigurosamente las instrucciones de seguridad indicadas por los docentes instructores.
                Cualquier daño causado a las máquinas o materiales por negligencia directa o mal uso deliberado podrá ser facturado al estudiante responsable.
              </p>

              <h2>5. Modificaciones de Servicio y Tarifas</h2>
              <p>
                Las tarifas de nuestros programas formativos están sujetas a cambios sin previo aviso. Nos reservamos el derecho de modificar o discontinuar cualquier curso o especificación de módulo en cualquier momento.
              </p>

              <h2>6. Preguntas e Información de Contacto</h2>
              <p>
                Cualquier duda o comentario referente a los presentes términos de uso puede dirigirse a: <strong>hola@torinocaffeacademy.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
