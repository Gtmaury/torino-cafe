// src/components/sections/Machines/Machines.tsx
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll/RevealOnScroll';
import { MachinesCarousel } from './MachinesCarousel';
import styles from './Machines.module.css';

export function Machines() {
  return (
    <section id="machines" className={styles.section} aria-labelledby="machines-title">
      <div className="container">
        <RevealOnScroll className={styles.header}>
          <SectionLabel centered>Nuestras Máquinas</SectionLabel>
          <h2 className={styles.title} id="machines-title">
            Tecnología al servicio del aprendizaje.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <MachinesCarousel />
        </RevealOnScroll>
      </div>
    </section>
  );
}
