'use client';

import { useRouter } from 'next/navigation';
import { scrollToTop } from '@/utils/scrollToTopUtils';
import { ArticlePageModel } from '@/models/article.model';

import styles from './styles/styles.module.scss';

export default function ArticlePage({ article }: ArticlePageModel) {
	const router = useRouter();

	const handleBack = () => {
		try {
			if (window.history.length > 2) {
				router.back();
			} else {
				router.replace('/');
			}
		} catch {
			router.replace('/');
		}
	};

	return (
		<main>
			<article className={styles.article}>
				<div className={styles.article__container}>
					{article && (
						<>
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
							<button
								className={styles.article__btn}
								onClick={() => {
									handleBack();
									scrollToTop();
								}}>
								Powrót
							</button>
						</>
					)}
				</div>
			</article>
		</main>
	);
}
