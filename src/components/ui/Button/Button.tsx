// src/components/ui/Button/Button.tsx
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ButtonVariant, ButtonSize } from '@/types';
import styles from './Button.module.css';

interface ButtonProps {
  children:   React.ReactNode;
  variant?:   ButtonVariant;
  size?:      ButtonSize;
  href?:      string;
  className?: string;
  id?:        string;
  onClick?:   () => void;
  type?:      'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

/**
 * Polymorphic Button — renders as <a> (via next/link) when href is provided,
 * otherwise as <button>. Variant and size are controlled via CSS Modules.
 */
export function Button({
  children,
  variant = 'primary',
  size    = 'md',
  href,
  className,
  id,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = cn(
    styles.btn,
    styles[variant],
    styles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} id={id} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      id={id}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
