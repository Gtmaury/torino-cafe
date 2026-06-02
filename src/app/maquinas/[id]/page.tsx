// src/app/maquinas/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { SubpageHeader } from '@/components/ui/SubpageHeader/SubpageHeader';
import { Button } from '@/components/ui/Button/Button';
import { MACHINES } from '@/data/machines';
import styles from './MachineDetail.module.css';

interface MachineDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return MACHINES.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: MachineDetailPageProps) {
  const { id } = await params;
  const machine = MACHINES.find((m) => m.id === id);
  if (!machine) return {};

  return {
    title: `${machine.brand} ${machine.model} — Ficha Técnica`,
    description: `Conoce las especificaciones, historia y características de la máquina espresso profesional ${machine.brand} ${machine.model}.`,
  };
}

export default async function MachineDetailPage({ params }: MachineDetailPageProps) {
  const { id } = await params;
  const machine = MACHINES.find((m) => m.id === id);

  if (!machine) {
    notFound();
  }

  return (
    <>
      <SubpageHeader
        title={`${machine.brand} ${machine.model}`}
        breadcrumbs={[
          { label: 'Máquinas', href: '/maquinas' },
          { label: machine.model },
        ]}
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            
            {/* Left: Image and Key Features */}
            <div className={styles.leftCol}>
              <div className={styles.imageWrap}>
                <Image
                  src={machine.image}
                  alt={machine.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 600px"
                  priority
                  className={styles.image}
                />
              </div>

              {machine.features && machine.features.length > 0 && (
                <div className={styles.featuresBox}>
                  <h3 className={styles.subtitle}>Características Clave</h3>
                  <ul className={styles.featuresList}>
                    {machine.features.map((feat, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right: Technical Specs and History */}
            <div className={styles.rightCol}>
              
              {/* History/Role in Academy */}
              <div className={styles.box}>
                <h3 className={styles.title}>Historia y Rol en la Academia</h3>
                <p className={styles.historyText}>{machine.history}</p>
              </div>

              {/* Specs Table */}
              {machine.specs && (
                <div className={styles.box}>
                  <h3 className={styles.title}>Especificaciones Técnicas</h3>
                  <table className={styles.table}>
                    <tbody>
                      <tr>
                        <th>Marca</th>
                        <td>{machine.brand}</td>
                      </tr>
                      <tr>
                        <th>Modelo</th>
                        <td>{machine.model}</td>
                      </tr>
                      <tr>
                        <th>Caldera</th>
                        <td>{machine.specs.caldera}</td>
                      </tr>
                      <tr>
                        <th>Presión de agua</th>
                        <td>{machine.specs.presion}</td>
                      </tr>
                      <tr>
                        <th>Consumo eléctrico</th>
                        <td>{machine.specs.potencia}</td>
                      </tr>
                      <tr>
                        <th>Origen</th>
                        <td>{machine.specs.origen}</td>
                      </tr>
                      <tr>
                        <th>Dimensiones</th>
                        <td>{machine.specs.dimensiones}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* CTA */}
              <div className={styles.ctaBox}>
                <p className={styles.ctaText}>
                  ¿Quieres practicar y perfeccionar tu técnica de calibración barista usando la <strong>{machine.brand} {machine.model}</strong>?
                </p>
                <div className={styles.ctaButtons}>
                  <Button href="#contacto" size="lg">
                    Inscribirme a Cursos
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
