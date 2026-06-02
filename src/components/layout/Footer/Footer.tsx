// src/components/layout/Footer/Footer.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import { FOOTER_COLUMNS, CONTACT_INFO, SOCIAL_LINKS } from '@/data/navigation';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer id="footer" className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.main}>

          {/* Brand */}
          <div className={styles.brand}>
            <div>
              <p className={styles.brandName}>TORINO <em>CAFFÈ</em></p>
              <p className={styles.brandSub}>ACADEMY · by Nisi</p>
            </div>
            <p className={styles.brandDesc}>
              Academia especializada en formación barista y cultura del espresso italiano.
              Formamos con protocolo INEI y SCA, y transmitimos la cultura del espresso.
            </p>
            <ul className={styles.socials} aria-label="Redes sociales">
              {SOCIAL_LINKS.map(({ id, label, href }) => (
                <li key={id}>
                  <a href={href} className={styles.socialLink} id={`social-${id}`} aria-label={`${label} de Torino Caffè Academy`}>
                    <SocialIcon id={id} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav columns */}
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} className={styles.col} aria-label={col.title}>
              <p className={styles.colTitle}>{col.title}</p>
              <ul>
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className={styles.colLink}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div className={styles.col}>
            <p className={styles.colTitle}>Contacto</p>
            <address className={styles.contactList} aria-label="Dirección y contacto">
              <ContactItem icon="map">
                <a href="https://maps.google.com/?q=Carrera+123+%2345-67,+Bogota,+Colombia" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  {CONTACT_INFO.address}
                </a>
              </ContactItem>
              <ContactItem icon="phone">
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className={styles.contactLink}>
                  {CONTACT_INFO.phone}
                </a>
              </ContactItem>
              <ContactItem icon="mail">
                <a href={`mailto:${CONTACT_INFO.email}`} className={styles.contactLink}>
                  {CONTACT_INFO.email}
                </a>
              </ContactItem>
            </address>
            <div className={styles.contactCta}>
              <Button href="/#contacto" size="sm" id="footer-reserva">
                {CONTACT_INFO.ctaLabel}
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Torino Caffè Academy by Nisi. Todos los derechos reservados.
          </p>
          <nav className={styles.legal} aria-label="Legal">
            <Link href="/politicas-privacidad">Políticas de privacidad</Link>
            <Link href="/terminos-condiciones">Términos y condiciones</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

/* ── Sub-components (private to Footer) ─────────────────────── */
function ContactItem({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div className={styles.contactItem}>
      <span className={styles.contactIcon} aria-hidden="true">
        <ContactIcon type={icon} />
      </span>
      <span>{children}</span>
    </div>
  );
}

function ContactIcon({ type }: { type: string }) {
  if (type === 'map') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
      <circle cx="12" cy="11" r="3"/>
    </svg>
  );
  if (type === 'phone') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  );
}

function SocialIcon({ id }: { id: string }) {
  if (id === 'instagram') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  );
  if (id === 'facebook') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  );
  if (id === 'tiktok') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  );
}
