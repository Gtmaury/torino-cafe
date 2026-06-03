// src/app/metodos-pago/page.tsx
import { SubpageHeader } from '@/components/ui/SubpageHeader/SubpageHeader';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Métodos de Pago — Torino Caffè Academy',
  description: 'Conoce los medios de pago, facilidades de financiación y políticas de facturación para tu formación como barista.',
};

export default function PaymentMethodsPage() {
  return (
    <>
      <SubpageHeader title="Métodos de Pago" breadcrumbs={[{ label: 'Métodos de Pago' }]} />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <p>
                En Torino Caffè Academy queremos facilitar tu ingreso a la industria del café de especialidad.
                Ofrecemos múltiples alternativas de pago y planes de financiamiento para que elijas la opción que mejor se adapte a tus necesidades.
              </p>

              <h2>1. Medios de Pago Aceptados</h2>
              
              <h3>Tarjetas de Crédito y Débito</h3>
              <p>
                Aceptamos todas las tarjetas de crédito y débito de las franquicias nacionales e internacionales más importantes, incluyendo:
              </p>
              <ul>
                <li>Visa</li>
                <li>Mastercard</li>
                <li>American Express</li>
                <li>Diners Club</li>
              </ul>
              <p>
                Los pagos presenciales pueden realizarse directamente en las oficinas de nuestra sede de Baristas en Valencia, Venezuela,
                y los pagos virtuales se procesan a través de una pasarela de pago segura con cifrado SSL de 256 bits para proteger tu información.
              </p>

              <h3>Transferencias Bancarias</h3>
              <p>
                Puedes realizar transferencia electrónica directa a nuestras cuentas de ahorros corporativas.
                Una vez realizada la transferencia, deberás enviar una copia del comprobante digital a nuestro correo
                <strong>info@torinocaffe.info</strong> con tu nombre completo y el nombre del curso de barista elegido para confirmar la matrícula.
              </p>

              <h2>2. Pago en Cuotas y Financiamiento</h2>
              <p>
                Para nuestros programas avanzados y diplomados profesionales de larga duración (como el ciclo completo de Barista Profesional),
                ofrecemos facilidades de pago diferido:
              </p>
              <ul>
                <li><strong>Matrícula fraccionada:</strong> Paga un 40% de depósito inicial para reservar tu cupo y el 60% restante diferido en dos cuotas iguales a pagarse a lo largo del desarrollo de las clases prácticas.</li>
                <li><strong>Convenios de Financiamiento:</strong> Contamos con alianzas estratégicas con entidades financieras del sector educativo que te permiten diferir el valor de la formación hasta en 12 cuotas mensuales con tasas de interés preferenciales.</li>
              </ul>

              <h2>3. Políticas de Facturación</h2>
              <p>
                Si requieres una factura de tipo corporativa (con NIT de empresa o detalles específicos de facturación de marca),
                por favor remite la solicitud adjuntando tu documento tributario (RUT o equivalente) al departamento de contabilidad antes del inicio formal del programa.
              </p>

              <h2>4. Dudas y Consultas de Pago</h2>
              <p>
                Si tienes preguntas sobre la facturación de matrículas, cuentas bancarias autorizadas o necesitas estructurar un plan de financiamiento a tu medida, no dudes en escribirnos a <strong>info@torinocaffe.info</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
