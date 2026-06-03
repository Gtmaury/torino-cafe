// src/data/navigation.ts
import type { NavLink, FooterColumn } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio',      href: '/#inicio' },
  { label: 'Academia',    href: '/#academia' },
  { label: 'Cursos',      href: '/#cursos' },
  { label: 'Máquinas',    href: '/#machines' },
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
  address:  'Valencia, Venezuela',
  phone:    '+58 412-3000970',
  email:    'info@torinocaffe.info',
  ctaLabel: 'Reserva tu Visita',
};

export const SOCIAL_LINKS = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/torinoacademy.ve?igsh=MW5xY2s2bWp2Z3c5cQ%3D%3D' },
  { id: 'whatsapp',  label: 'WhatsApp',  href: 'https://wa.me/584123000970' },
];
