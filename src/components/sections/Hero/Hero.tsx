'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { HeroCards } from './HeroCards';
import styles from './Hero.module.css';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.8;
    }
  }, []);

  return (
    <section id="inicio" className={styles.section} aria-labelledby="hero-title">
      {/* Background */}
      <div className={styles.bg}>
        <video ref={videoRef} className={styles.bgVideo} autoPlay muted playsInline>
          <source src="/videos/Hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.overlay} />

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>Academia de Baristas</p>

        <h1 className={styles.title} id="hero-title">
          El arte del<br />
          <em className={styles.gold}>espresso</em> italiano
        </h1>

        <p className={styles.subtitle}>
          Formación profesional con protocolo INEI y SCA<br />
          en el corazón de una experiencia auténtica.
        </p>

        <div className={styles.ctas}>
          <Button href="#cursos" size="lg" id="hero-cta-cursos">
            Conoce nuestros cursos
          </Button>
          <button className={styles.videoBtn} id="btn-video" aria-label="Ver vídeo de la academia">
            <span className={styles.playBtn} aria-hidden="true">
              <span className={styles.playIcon} />
            </span>
            <span className={styles.videoBtnText}>
              <strong>Ver vídeo</strong>
              <span>Conoce la academia</span>
            </span>
          </button>
        </div>
      </div>

      {/* Value cards */}
      <HeroCards />
    </section>
  );
}
