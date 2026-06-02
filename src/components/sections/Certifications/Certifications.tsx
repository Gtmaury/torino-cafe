import { Fragment } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll/RevealOnScroll';
import { CERTIFICATIONS } from '@/data/certifications';
import styles from './Certifications.module.css';

function IneiLogo() {
  return (
    <div className={styles.ineiLogoContainer}>
      <img
        src="/images/inei_badge.png"
        alt="INEI Badge"
        className={styles.ineiImage}
      />
      <div className={styles.ineiText}>
        <span>ISTITUTO</span>
        <span>NAZIONALE</span>
        <span>ESPRESSO</span>
        <span>ITALIANO</span>
        <span className={styles.ineiBadgeText}>MISCELA QUALIFICATA</span>
      </div>
    </div>
  );
}

function ScaLogo() {
  return (
    <div className={styles.scaLogoContainer}>
      <img
        src="/images/sca_monogram_cropped.png"
        alt="SCA Monogram"
        className={styles.scaImage}
      />
      <div className={styles.scaText}>
        <span>Specialty</span>
        <span>Coffee</span>
        <span>Association</span>
      </div>
    </div>
  );
}

function AstLogo() {
  return (
    <div className={styles.astLogoContainer}>
      <img
        src="/images/ast_badge_only.png"
        alt="AST Badge"
        className={styles.astImage}
      />
      <div className={styles.astText}>
        <span>AUTHORIZED</span>
        <span>SCA TRAINER</span>
      </div>
    </div>
  );
}

export function Certifications() {
  return (
    <section id="certificaciones" className={styles.section} aria-labelledby="cert-label">
      {/* Video Background */}
      <div className={styles.bg}>
        <video className={styles.bgVideo} autoPlay muted playsInline loop>
          <source src="/videos/certifications-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.overlay} />

      <div className={`container ${styles.content}`}>
        <div className={styles.inner}>
          <SectionLabel centered id="cert-label">Certificaciones Internacionales</SectionLabel>
          <RevealOnScroll className={styles.logos}>
            {CERTIFICATIONS.map((cert, i) => {
              let logoSvg = null;
              if (cert.id === 'inei') {
                logoSvg = <IneiLogo />;
              } else if (cert.id === 'sca') {
                logoSvg = <ScaLogo />;
              } else if (cert.id === 'ast') {
                logoSvg = <AstLogo />;
              }

              return (
                <Fragment key={cert.id}>
                  {i > 0 && <div className={styles.divider} aria-hidden="true" />}
                  <div
                    className={styles.logo}
                    aria-label={`${cert.acronym} — ${cert.fullName}`}
                  >
                    {logoSvg}
                  </div>
                </Fragment>
              );
            })}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}


