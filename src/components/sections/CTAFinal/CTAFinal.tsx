// src/components/sections/CTAFinal/CTAFinal.tsx
import { Button } from '@/components/ui/Button/Button';
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll/RevealOnScroll';
import styles from './CTAFinal.module.css';

export function CTAFinal() {
  return (
    <section id="contacto" className={styles.section} aria-labelledby="cta-title">
      <div className="container">
        <RevealOnScroll className={styles.inner}>
          <SectionLabel centered>Comienza tu camino</SectionLabel>
          <h2 className={styles.title} id="cta-title">
            Comienza tu camino en<br />
            el mundo del <em>espresso.</em>
          </h2>
          <p className={styles.text}>
            Descubre programas diseñados para transformar la pasión por el café
            en conocimiento real y habilidades profesionales.
          </p>
          <div className={styles.buttons}>
            <Button
              href="mailto:info@torinocaffe.info"
              size="lg"
              id="cta-solicitar"
            >
              Solicitar Información
            </Button>
            <Button
              href="https://wa.me/584123000970"
              variant="outline"
              size="lg"
              id="cta-agendar"
            >
              Agendar Visita
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
