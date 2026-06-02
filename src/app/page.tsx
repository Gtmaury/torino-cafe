// src/app/page.tsx
// Home page — composed entirely of Server Components
// Only sections with interactivity (Header, Carousel) are Client Components internally

import { Hero }             from '@/components/sections/Hero/Hero';
import { Academia }         from '@/components/sections/Academia/Academia';
import { Machines }         from '@/components/sections/Machines/Machines';
import { Courses }          from '@/components/sections/Courses/Courses';
import { Certifications }   from '@/components/sections/Certifications/Certifications';
import { Blog }             from '@/components/sections/Blog/Blog';
import { CTAFinal }         from '@/components/sections/CTAFinal/CTAFinal';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Academia />
      <Machines />
      <Courses />
      <Blog />
      <CTAFinal />
      <Certifications />
    </>
  );
}
