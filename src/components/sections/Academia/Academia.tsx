// src/components/sections/Academia/Academia.tsx
import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll/RevealOnScroll';
import styles from './Academia.module.css';

export function Academia() {
  return (
    <section id="academia" className={styles.section} aria-labelledby="academia-title">
      <div className={styles.grid}>

        <div className={styles.content}>
          <SectionLabel>La Academia</SectionLabel>
          <div className={styles.line} aria-hidden="true" />
          <h2 className={styles.title} id="academia-title">
            Un espacio donde<br />
            el café cuenta<br />
            su <em>historia.</em>
          </h2>
          <p className={styles.text}>
            En Torino Caffè Academy, la tradición italiana, el conocimiento y la práctica
            se unen para formar baristas capaces de llevar el espresso a otro nivel.
            No es solo aprender, es vivir la cultura del café.
          </p>
          <p className={styles.text}>
            Inspirada en la tradición italiana, la academia integra conocimiento, práctica
            y cultura en una experiencia diseñada para formar profesionales y apasionados
            del espresso.
          </p>
          <Button href="/academia" variant="ghost" id="academia-cta">
            Conoce más sobre la Academia &rarr;
          </Button>
        </div>

        <RevealOnScroll className={styles.imageWrap}>
          <Image
            src="/images/academy_main_v3.png"
            alt="Interior elegante de Torino Caffè Academy con maquinaria profesional"
            fill
            sizes="(max-width: 900px) 100vw, (max-width: 1500px) 50vw, 640px"
            className={styles.image}
            quality={75}
          />
        </RevealOnScroll>

      </div>
    </section>
  );
}
