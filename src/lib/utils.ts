// src/lib/utils.ts
// Pure utility functions — no UI dependencies

/**
 * Joins class names, filtering out falsy values.
 * Lightweight alternative to clsx for this project.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Clamps a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
