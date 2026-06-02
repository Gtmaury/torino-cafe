// src/components/sections/Hero/HeroCards.tsx
import styles from './Hero.module.css';

const CARDS = [
  {
    id:    'formacion',
    icon:  'graduation',
    title: 'Formación Profesional',
    text:  'Programas avalados por INEI y SCA con estándares internacionales.',
  },
  {
    id:    'cultura',
    icon:  'heart',
    title: 'Cultura y Pasión',
    text:  'Todo gira alrededor de la historia del café italiano y su tradición.',
  },
  {
    id:    'experiencia',
    icon:  'star',
    title: 'Experiencia Única',
    text:  'Un espacio diseñado para aprender e inspirarse en la cultura espresso.',
  },
] as const;

export function HeroCards() {
  return (
    <div className={styles.cards}>
      <div className="container">
        <div className={styles.cardsInner}>
          {CARDS.map(({ id, icon, title, text }, i) => (
            <div key={id} className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">
                <HeroIcon type={icon} />
              </div>
              <div>
                <p className={styles.cardTitle}>{title}</p>
                <p className={styles.cardText}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroIcon({ type }: { type: string }) {
  if (type === 'graduation') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <path d="M12 14l9-5-9-5-9 5 9 5z"/>
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
    </svg>
  );
  if (type === 'heart') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
    </svg>
  );
}
