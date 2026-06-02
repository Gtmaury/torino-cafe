// src/types/index.ts
// ─────────────────────────────────────────────
// Shared TypeScript types for the entire app
// ─────────────────────────────────────────────

export interface Machine {
  id: string;
  brand: string;
  model: string;
  image: string;
  alt: string;
  description: string;
  href: string;
  specs?: {
    caldera: string;
    presion: string;
    potencia: string;
    origen: string;
    dimensiones: string;
  };
  history?: string;
  features?: string[];
}

export interface Course {
  id: string;
  level: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  duration?: string;
  price?: string;
  modality?: string;
  certification?: string;
  syllabus?: {
    moduleTitle: string;
    topics: string[];
  }[];
}

export interface Certification {
  id: string;
  acronym: string;
  fullName: string;
  subtitle: string;
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  href: string;
  date?: string;
  readTime?: string;
  content?: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export type ButtonVariant = 'primary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
