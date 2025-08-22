'use client';

import { useEffect } from 'react';
import { useFooterLinksContext } from '@/shared/hooks/useFooterLinksContext';
import Footer from '@/shared/ui/Footer/Footer';
import ArticlesArray from '../components/ArticlesArray';

import styles from '../styles/articlesAndAdvicesStyles.module.scss';

export default function ArticlesAndAdvicesPage() {
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(false);
	}, []);

	return (
		<>
			<main>
				<div className={styles.articles__container}>
					<div className={styles.articles__wrapper}>
						<div className={styles['articles__hero-image']}>
							<h1 className={styles['articles__hero-image-title']}>Artykuły i porady</h1>
						</div>
						<ArticlesArray />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
