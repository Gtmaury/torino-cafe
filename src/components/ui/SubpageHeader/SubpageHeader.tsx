// src/components/ui/SubpageHeader/SubpageHeader.tsx
import Link from 'next/link';
import styles from './SubpageHeader.module.css';

interface Crumb {
  label: string;
  href?: string;
}

interface SubpageHeaderProps {
  title: string;
  breadcrumbs: Crumb[];
}

export function SubpageHeader({ title, breadcrumbs }: SubpageHeaderProps) {
  return (
    <header className={styles.header} aria-label={`Cabecera de ${title}`}>
      <div className="container">
        <div className={styles.inner}>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/" className={styles.crumbLink}>
              Inicio
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span className={styles.separator} aria-hidden="true">/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className={styles.crumbLink}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={styles.currentCrumb} aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>

          {/* Page Title */}
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    </header>
  );
}
