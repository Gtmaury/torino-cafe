'use client';
// src/components/layout/Header/Header.tsx
import Link from 'next/link';
import { useState } from 'react';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { Button } from '@/components/ui/Button/Button';
import { NAV_LINKS } from '@/data/navigation';
import { cn } from '@/lib/utils';
import styles from './Header.module.css';

export function Header() {
  const scrolled  = useNavbarScroll(60);
  const [open, setOpen] = useState(false);

  return (
    <header
      id="header"
      className={cn(styles.header, scrolled && styles.scrolled)}
      role="banner"
    >
      <div className="container">
        <nav className={styles.nav} aria-label="Navegación principal">

          {/* Logo */}
          <Link href="/#inicio" className={styles.logo} id="logo" aria-label="Torino Caffè Academy — inicio">
            <span className={styles.logoMain}>TORINO <em>CAFFÈ</em></span>
            <span className={styles.logoSub}>ACADEMY</span>
          </Link>

          {/* Desktop nav */}
          <ul className={cn(styles.links, open && styles.open)} role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={styles.link}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Button href="#contacto" size="sm" className={styles.cta} id="nav-reserva">
            Reserva tu Visita
          </Button>

          {/* Hamburger */}
          <button
            className={styles.toggle}
            id="nav-toggle"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span className={cn(styles.bar, open && styles.barOpen1)} />
            <span className={cn(styles.bar, open && styles.barOpen2)} />
            <span className={cn(styles.bar, open && styles.barOpen3)} />
          </button>

        </nav>
      </div>
    </header>
  );
}
