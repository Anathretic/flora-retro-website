'use client';

import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { articleData } from '../data/articleData';
import { scrollToTop } from '@/utils/scrollToTopUtils';

import styles from './styles/styles.module.scss';

export default function ArticlePage() {
	const { id } = useParams<{ id: string }>();
	const article = articleData.find(item => item.href.endsWith(`/${id}`));

	if (!article) {
		notFound();
	}

	return (
		<main>
			<article className={styles.article}>
				<div className={styles.article__container}>
					<h1 className={styles.article__title}>{article.title}</h1>
					<p className={styles.article__date}>Data dodania: {article.date}</p>
					<div className={styles.article__box}>
						<h2>{article.blogArticle.firstSubtitle}</h2>
						<p>{article.blogArticle.firstParagraph}</p>
					</div>
					<div className={styles.article__box}>
						<h2>{article.blogArticle.secondSubtitle}</h2>
						<p>{article.blogArticle.secondParagraph}</p>
					</div>
					<div className={styles.article__box}>
						<h2>{article.blogArticle.thirdSubtitle}</h2>
						<p>{article.blogArticle.thirdParagraph}</p>
					</div>
					<Link href='/artykuly-i-porady' className={styles.article__btn} onClick={scrollToTop}>
						Powrót
					</Link>
				</div>
			</article>
		</main>
	);
}
