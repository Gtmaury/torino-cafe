// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display, Bodoni_Moda, Cormorant_Garamond } from 'next/font/google';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton/WhatsAppButton';
import './globals.css';

// ── Google Fonts Configuration ──────────────────────────────
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-bodoni',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

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
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} ${bodoni.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
