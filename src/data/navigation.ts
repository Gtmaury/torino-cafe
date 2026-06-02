// src/data/navigation.ts
import type { NavLink, FooterColumn } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio',      href: '/#inicio' },
  { label: 'Academia',    href: '/#academia' },
  { label: 'Cursos',      href: '/#cursos' },
  { label: 'Máquinas',    href: '/#machines' },
  { label: 'Experiencia', href: '/experiencia' },
  { label: 'Blog',        href: '/#blog' },
  { label: 'Contacto',    href: '/#contacto' },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Academia',
    links: [
      { label: 'Nosotros',        href: '/academia' },
      { label: 'Nuestra Filosofía', href: '/academia#filosofia' },
      { label: 'Instalaciones',   href: '/academia#instalaciones' },
      { label: 'Certificaciones', href: '/academia#certificaciones' },
    ],
  },
  {
    title: 'Cursos',
    links: [
      { label: 'Todos los cursos',      href: '/cursos' },
      { label: 'Calendarios',           href: '/cursos#calendarios' },
      { label: 'Métodos de pago',       href: '/metodos-pago' },
      { label: 'Preguntas frecuentes',  href: '/preguntas-frecuentes' },
    ],
  },
  {
    title: 'Experiencia',
    links: [
      { label: 'Máquinas',  href: '/maquinas' },
      { label: 'Espacio',   href: '/academia#espacio' },
      { label: 'Galería',   href: '/academia#galeria' },
      { label: 'Blog',      href: '/blog' },
    ],
  },
];

export const CONTACT_INFO = {
  address:  'Carrera 123 #45-67, Bogotá, Colombia',
  phone:    '+57 300 123 4587',
  email:    'hola@torinocaffeacademy.com',
  ctaLabel: 'Reserva tu Visita',
};

export const SOCIAL_LINKS = [
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com/torinocaffeacademy' },
  { id: 'facebook',  label: 'Facebook',  href: 'https://facebook.com/torinocaffeacademy' },
  { id: 'tiktok',    label: 'TikTok',    href: 'https://tiktok.com/@torinocaffeacademy' },
  { id: 'youtube',   label: 'YouTube',   href: 'https://youtube.com/torinocaffeacademy' },
];
