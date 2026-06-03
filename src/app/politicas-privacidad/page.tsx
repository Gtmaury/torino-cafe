// src/app/politicas-privacidad/page.tsx
import { SubpageHeader } from '@/components/ui/SubpageHeader/SubpageHeader';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Políticas de Privacidad — Torino Caffè Academy',
  description: 'Conoce cómo recopilamos, protegemos y utilizamos tus datos personales en Torino Caffè Academy.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SubpageHeader title="Políticas de Privacidad" breadcrumbs={[{ label: 'Privacidad' }]} />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <p>Última actualización: 1 de Junio de 2026</p>
              
              <p>
                En Torino Caffè Academy, accesible desde nuestro sitio web, una de nuestras principales prioridades es la privacidad de nuestros visitantes.
                Este documento de Política de Privacidad contiene tipos de información que recopila y registra Torino Caffè Academy y cómo la utilizamos.
              </p>

              <h2>1. Información que recopilamos</h2>
              <p>
                Si se comunica con nosotros directamente, es posible que recibamos información adicional sobre usted, como su nombre, dirección de correo electrónico,
                número de teléfono, el contenido del mensaje y/o los archivos adjuntos que pueda enviarnos, y cualquier otra información que decida proporcionar.
              </p>
              <p>
                Cuando se registra en uno de nuestros programas académicos de baristas o solicita una reserva, podemos solicitarle su información de contacto,
                incluidos elementos como el nombre, la dirección de la empresa, el número de teléfono y la dirección de correo electrónico.
              </p>

              <h2>2. Cómo utilizamos su información</h2>
              <p>Utilizamos la información que recopilamos de varias maneras, que incluyen:</p>
              <ul>
                <li>Proporcionar, operar y mantener nuestro sitio web y academia.</li>
                <li>Mejorar, personalizar y expandir nuestros cursos y servicios.</li>
                <li>Comprender y analizar cómo utiliza nuestro sitio web y academia.</li>
                <li>Desarrollar nuevos productos, servicios, características y funcionalidades.</li>
                <li>Comunicarnos con usted para reservas, facturación y soporte estudiantil.</li>
                <li>Enviarle correos electrónicos de actualización o boletines informativos relacionados con la cultura barista.</li>
              </ul>

              <h2>3. Protección de Datos y Seguridad</h2>
              <p>
                Nos tomamos muy en serio la seguridad de sus datos personales. Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger sus datos personales contra el procesamiento no autorizado o ilegal y contra la pérdida, destrucción o daño accidental.
              </p>

              <h2>4. Derechos de Privacidad del Usuario</h2>
              <p>De acuerdo con las normativas locales e internacionales de protección de datos, usted tiene derecho a:</p>
              <ul>
                <li>Acceder a los datos personales que conservamos sobre usted.</li>
                <li>Solicitar la rectificación de cualquier dato incorrecto o incompleto.</li>
                <li>Solicitar la eliminación (derecho al olvido) de sus datos personales de nuestros registros activos.</li>
                <li>Restringir u oponerse al tratamiento de su información.</li>
              </ul>

              <h2>5. Contacto</h2>
              <p>
                Si tiene preguntas adicionales o requiere más información sobre nuestra Política de Privacidad, no dude en ponerse en contacto con nuestro oficial de protección de datos a través del correo electrónico: <strong>info@torinocaffe.info</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
