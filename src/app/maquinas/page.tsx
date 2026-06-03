// src/app/maquinas/page.tsx
import { SubpageHeader } from '@/components/ui/SubpageHeader/SubpageHeader';
import { MachinesCatalogCarousel } from './MachinesCatalogCarousel';
import styles from './Catalog.module.css';

export const metadata = {
  title: 'Equipamiento y Máquinas Espresso',
  description: 'Explora las máquinas espresso profesionales de nuestra academia: La Marzocco, Victoria Arduino, Sanremo y más.',
};

export default function MachinesCatalogPage() {
  return (
    <>
      <SubpageHeader title="Nuestros Equipos" breadcrumbs={[{ label: 'Máquinas' }]} />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.intro}>
            <p>
              En Torino Caffè Academy creemos que la excelencia técnica requiere herramientas profesionales.
              Por eso, equipamos nuestros talleres con las máquinas de café más respetadas del mundo de la hostelería
              y el café de especialidad. Conoce los equipos con los que entrenarás para perfeccionar tus extracciones.
            </p>
          </div>

          <MachinesCatalogCarousel />
        </div>
      </section>
    </>
  );
}
