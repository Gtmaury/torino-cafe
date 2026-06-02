// src/app/blog/page.tsx
import Image from 'next/image';
import { SubpageHeader } from '@/components/ui/SubpageHeader/SubpageHeader';
import { Button } from '@/components/ui/Button/Button';
import { BLOG_POSTS } from '@/data/blog-posts';
import styles from './BlogList.module.css';

export const metadata = {
  title: 'Revista Torino — Artículos y Cultura Cafetera',
  description: 'Aprende sobre la historia del espresso, técnicas avanzadas de calibración barista y cata sensorial en nuestro blog.',
};

export default function BlogListPage() {
  return (
    <>
      <SubpageHeader title="Revista Torino" breadcrumbs={[{ label: 'Blog' }]} />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.intro}>
            <p>
              Explora nuestra colección de artículos sobre la cultura del espresso italiano,
              guías técnicas para baristas, ciencia de la extracción y análisis sensorial del café verde.
              Conocimiento compartido para enriquecer tu pasión.
            </p>
          </div>

          <div className={styles.grid}>
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className={styles.image}
                  />
                </div>
                <div className={styles.body}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{post.category}</span>
                    {post.date && <span className={styles.date}>{post.date}</span>}
                  </div>
                  
                  <h2 className={styles.title}>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  
                  <div className={styles.footer}>
                    {post.readTime && <span className={styles.readTime}>{post.readTime}</span>}
                    <Button href={post.href} variant="ghost" size="sm" className={styles.cta}>
                      Leer Artículo Completo &rarr;
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
