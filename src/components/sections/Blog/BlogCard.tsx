// src/components/sections/Blog/BlogCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/types';
import styles from './Blog.module.css';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={post.href} className={styles.cardLink}>
      <article className={styles.card} id={`blog-post-${post.id}`}>
        <div className={styles.cardImg}>
          <Image
            src={post.image}
            alt={post.alt}
            fill
            sizes="(max-width: 600px) 100vw, 400px"
            className={styles.cardImgEl}
          />
        </div>
        <div className={styles.cardBody}>
          <span className={styles.cardCategory}>{post.category}</span>
          <h3 className={styles.cardTitle}>{post.title}</h3>
          <p className={styles.cardExcerpt}>{post.excerpt}</p>
        </div>
      </article>
    </Link>
  );
}

