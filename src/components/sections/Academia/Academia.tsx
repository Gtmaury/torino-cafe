'use client';

// src/components/sections/Academia/Academia.tsx
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll/RevealOnScroll';
import styles from './Academia.module.css';

export function Academia() {
  const v1Ref = useRef<HTMLVideoElement>(null);
  const v2Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v1 = v1Ref.current;
    const v2 = v2Ref.current;
    if (!v1 || !v2) return;

    // Initialize initial visual states
    v1.style.opacity = '1';
    v2.style.opacity = '0';
    v1.currentTime = 0.05;
    v2.currentTime = 0.05;

    let activeVideo = v1;
    let inactiveVideo = v2;
    let isTransitioning = false;

    const handleTimeUpdate = () => {
      const duration = activeVideo.duration;
      const currentTime = activeVideo.currentTime;
      if (!duration || isNaN(duration)) return;

      const trimOffset = 0.8; // Trim 0.8s from the end of the video
      const trimTime = duration - trimOffset;
      const fadeDuration = 1.2; // Smooth 1.2s cross-fade
      const fadeStart = trimTime - fadeDuration;

      if (currentTime >= trimTime) {
        // Complete transition: Swap active and inactive completely
        activeVideo.pause();
        activeVideo.currentTime = 0.05;
        activeVideo.style.opacity = '0';

        inactiveVideo.style.opacity = '1';

        // Swap variables
        const temp = activeVideo;
        activeVideo = inactiveVideo;
        inactiveVideo = temp;

        isTransitioning = false;
      } else if (currentTime > fadeStart) {
        // Inside cross-fade window
        if (!isTransitioning) {
          isTransitioning = true;
          // Start playing the inactive video early so it is active and decoding
          inactiveVideo.currentTime = 0.05;
          inactiveVideo.play().catch(() => {});
        }

        // Cosine-based ease-in-out cross-fade for maximum smoothness
        const progress = (currentTime - fadeStart) / fadeDuration; // 0 to 1
        const easeProgress = 0.5 * (1 - Math.cos(progress * Math.PI));
        
        activeVideo.style.opacity = String(Math.max(0, Math.min(1, 1 - easeProgress)));
        inactiveVideo.style.opacity = String(Math.max(0, Math.min(1, easeProgress)));
      } else {
        // Normal playback
        activeVideo.style.opacity = '1';
        inactiveVideo.style.opacity = '0';
      }
    };

    // Listen to timeupdate on both videos, but delegate to whichever is active
    const onV1TimeUpdate = () => {
      if (activeVideo === v1) handleTimeUpdate();
    };
    const onV2TimeUpdate = () => {
      if (activeVideo === v2) handleTimeUpdate();
    };

    v1.addEventListener('timeupdate', onV1TimeUpdate);
    v2.addEventListener('timeupdate', onV2TimeUpdate);

    // Start initial playback
    v1.play().catch(() => {});

    return () => {
      v1.removeEventListener('timeupdate', onV1TimeUpdate);
      v2.removeEventListener('timeupdate', onV2TimeUpdate);
      v1.pause();
      v2.pause();
    };
  }, []);

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
          <video
            ref={v1Ref}
            src="/videos/cafe-cayendo.mp4"
            autoPlay
            muted
            playsInline
            className={styles.video}
            aria-label="Vídeo de granos de café cayendo"
          />
          <video
            ref={v2Ref}
            src="/videos/cafe-cayendo.mp4"
            muted
            playsInline
            className={styles.video}
            aria-label="Vídeo de granos de café cayendo"
          />
        </RevealOnScroll>

      </div>
    </section>
  );
}
