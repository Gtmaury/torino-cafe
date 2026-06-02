// src/components/ui/SectionLabel/SectionLabel.tsx
import styles from './SectionLabel.module.css';
import { cn } from '@/lib/utils';

interface SectionLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  children:   string;
  centered?:  boolean;
}

export function SectionLabel({ children, centered, className, ...props }: SectionLabelProps) {
  return (
    <span className={cn(styles.label, centered && styles.centered, className)} {...props}>
      {children}
    </span>
  );
}
