import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  images: {
    // Serve WebP/AVIF for modern browsers
    formats: ['image/webp', 'image/avif'],

    // Quality levels used across the app
    qualities: [75, 85, 90],

    // Device widths — includes 2× Retina sizes for MacBook Pro (2880px physical)
    // At DPR=2, a 1440px viewport requests 2880px images
    deviceSizes: [640, 828, 1080, 1280, 1440, 1920, 2880],

    // Thumbnail / fixed image widths at Retina density
    imageSizes: [16, 32, 64, 128, 256, 384, 560],
  },

  // React strict mode
  reactStrictMode: true,

  // Fix lockfile workspace detection warning (OneDrive path)
  outputFileTracingRoot: path.join(__dirname, '../../'),
};

export default nextConfig;
