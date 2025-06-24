'use client';

import { useEffect } from 'react';
import { useFooterLinksContext } from '@/hooks/useFooterLinksContext';
import { Footer } from '@/components';
import ArticlesArray from './components/ArticlesArray';

import styles from './styles/styles.module.scss';

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
