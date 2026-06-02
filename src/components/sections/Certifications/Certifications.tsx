import { Fragment } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll/RevealOnScroll';
import { CERTIFICATIONS } from '@/data/certifications';
import styles from './Certifications.module.css';

export function Certifications() {
  return (
    <section id="certificaciones" className={styles.section} aria-labelledby="cert-label">
      <div className="container">
        <div className={styles.inner}>
          <SectionLabel centered id="cert-label">Certificaciones Internacionales</SectionLabel>
          <RevealOnScroll className={styles.logos}>
            {CERTIFICATIONS.map((cert, i) => (
              <Fragment key={cert.id}>
                {i > 0 && <div className={styles.divider} aria-hidden="true" />}
                <div
                  className={styles.logo}
                  aria-label={`${cert.acronym} — ${cert.fullName}`}
                >
                  <span className={styles.logoAcronym}>{cert.acronym}</span>
                  <span className={styles.logoFull}>{cert.fullName}</span>
                </div>
              </Fragment>
            ))}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
