// src/app/maquinas/page.tsx
import Image from 'next/image';
import { SubpageHeader } from '@/components/ui/SubpageHeader/SubpageHeader';
import { Button } from '@/components/ui/Button/Button';
import { MACHINES } from '@/data/machines';
import styles from './Catalog.module.css';

export const metadata = {
  title: 'Equipamiento y Máquinas Espresso',
  description: 'Explora las máquinas espresso profesionales de nuestra academia: La Marzocco, Victoria Arduino, Sanremo y más.',
};

export default function MachinesCatalogPage() {
  return (
    <>
      <SubpageHeader title="Nuestras Máquinas" breadcrumbs={[{ label: 'Máquinas' }]} />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.intro}>
            <p>
              En Torino Caffè Academy creemos que la excelencia técnica requiere herramientas profesionales.
              Por eso, equipamos nuestros talleres con las máquinas de café más respetadas del mundo de la hostelería
              y el café de especialidad. Conoce los equipos con los que entrenarás para perfeccionar tus extracciones.
            </p>
          </div>

          <div className={styles.grid}>
            {MACHINES.map((machine) => (
              <article key={machine.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={machine.image}
                    alt={machine.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className={styles.image}
                  />
                </div>
                <div className={styles.body}>
                  <p className={styles.brand}>{machine.brand}</p>
                  <h2 className={styles.model}>{machine.model}</h2>
                  <p className={styles.desc}>{machine.description}</p>
                  
                  {machine.specs && (
                    <div className={styles.specPreview}>
                      <span className={styles.specItem}><strong>Origen:</strong> {machine.specs.origen}</span>
                      <span className={styles.specItem}><strong>Presión:</strong> {machine.specs.presion}</span>
                    </div>
                  )}

                  <div className={styles.cta}>
                    <Button href={machine.href} size="md">
                      Ver Ficha Técnica
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
