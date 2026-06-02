// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import './globals.css';

// ── SEO Metadata ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: 'Torino Caffè Academy — El Arte del Espresso Italiano',
    template: '%s | Torino Caffè Academy',
  },
  description:
    'Academia especializada en formación profesional de baristas bajo estándares internacionales INEI y SCA. Aprende el arte del espresso italiano.',
  keywords: [
    'academia de baristas',
    'curso de barista profesional',
    'curso de espresso',
    'formación SCA',
    'formación INEI',
    'cultura cafetera',
    'escuela de café',
    'barista Colombia',
  ],
  authors: [{ name: 'Torino Caffè Academy' }],
  openGraph: {
    title:       'Torino Caffè Academy — El Arte del Espresso Italiano',
    description: 'Formación profesional para baristas y apasionados del café bajo estándares INEI y SCA.',
    type:        'website',
    locale:      'es_CO',
  },
  robots: {
    index:  true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width:        'device-width',
  initialScale: 1,
  themeColor:   '#0A0A0A',
};

// ── Root Layout ───────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
