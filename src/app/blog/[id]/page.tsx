// src/app/blog/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { SubpageHeader } from '@/components/ui/SubpageHeader/SubpageHeader';
import { Button } from '@/components/ui/Button/Button';
import { BLOG_POSTS } from '@/data/blog-posts';
import styles from './BlogDetail.module.css';

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);
  if (!post) return {};

  return {
    title: `${post.title} — Revista Torino`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <SubpageHeader
        title={post.title}
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: post.category },
        ]}
      />

      <article className={styles.article}>
        <div className="container">
          <div className={styles.wrapper}>
            
            <div className={styles.grid}>
              {/* Left: Featured Image */}
              <div className={styles.leftCol}>
                <div className={styles.imageWrap}>
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 600px"
                    priority
                    className={styles.image}
                  />
                </div>
              </div>

              {/* Right: Meta & Scrolling Content */}
              <div className={styles.rightCol}>
                <div className={styles.meta}>
                  <span className={styles.category}>{post.category}</span>
                  {post.date && <span className={styles.date}>{post.date}</span>}
                  {post.readTime && <span className={styles.readTime}>{post.readTime}</span>}
                </div>

                <div className={styles.bodyScroll}>
                  <div className={styles.bodyContent}>
                    {post.content && post.content.map((paragraph, idx) => (
                      <p key={idx} className={styles.paragraph}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA/Footer area inside the post */}
            <div className={styles.authorFooter}>
              <div className={styles.divider} />
              <div className={styles.footerFlex}>
                <p className={styles.footerText}>
                  ¿Te interesa profundizar tus conocimientos sobre la cultura, cata y preparación del café espresso italiano?
                </p>
                <div className={styles.buttons}>
                  <Button href="/cursos" variant="primary">
                    Ver Cursos Disponibles
                  </Button>
                  <Button href="/blog" variant="outline">
                    Volver a la Revista
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </article>
    </>
  );
}
