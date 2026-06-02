// src/components/sections/Blog/Blog.tsx
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll/RevealOnScroll';
import { BlogCard } from './BlogCard';
import { BLOG_POSTS } from '@/data/blog-posts';
import styles from './Blog.module.css';

export function Blog() {
  return (
    <section id="blog" className={styles.section} aria-labelledby="blog-title">
      <div className="container">
        <RevealOnScroll className={styles.header}>
          <div>
            <SectionLabel>Revista Torino</SectionLabel>
            <h2 className={styles.title} id="blog-title">
              Historias que comenzaron<br />
              con una taza de espresso.
            </h2>
          </div>
          <Link href="/blog" className={styles.allLink} id="blog-ver-todos">
            Ver todos los artículos
          </Link>
        </RevealOnScroll>

        <div className={styles.grid}>
          {BLOG_POSTS.map((post, i) => (
            <RevealOnScroll key={post.id} delay={(i % 3) as 0 | 1 | 2}>
              <BlogCard post={post} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
