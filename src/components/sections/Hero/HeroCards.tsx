// src/components/sections/Hero/HeroCards.tsx
import styles from './Hero.module.css';

const CARDS = [
  {
    id:    'formacion',
    icon:  'book',
    title: 'Formación Profesional',
    text:  'Programas avalados por\nINEI y SCA.',
  },
  {
    id:    'cultura',
    icon:  'cup',
    title: 'Cultura y Pasión',
    text:  'Todo gira alrededor de\nla historia del café.',
  },
  {
    id:    'experiencia',
    icon:  'temple',
    title: 'Experiencia Única',
    text:  'Un espacio diseñado para\naprender e inspirarse.',
  },
] as const;

export function HeroCards() {
  return (
    <div className={styles.cards}>
      <div className={styles.cardsInner}>
        {CARDS.map(({ id, icon, title, text }) => (
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
  );
}

function HeroIcon({ type }: { type: string }) {
  if (type === 'book') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="50" height="50">
      {/* Book outline icon */}
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
  if (type === 'cup') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="50" height="50">
      {/* Coffee cup outline icon */}
      <path d="M17 8H6a1 1 0 0 0-1 1v7a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V9a1 1 0 0 0-1-1z" />
      <path d="M17 11h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" />
      <path d="M9 2v3" />
      <path d="M12 1v4" />
      <path d="M15 2v3" />
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="50" height="50">
      {/* Classical building/museum icon */}
      <path d="M3 10L12 3L21 10H3Z" />
      <path d="M6 10v7" />
      <path d="M10 10v7" />
      <path d="M14 10v7" />
      <path d="M18 10v7" />
      <path d="M4 17h16" />
      <path d="M3 20h18" />
    </svg>
  );
}
