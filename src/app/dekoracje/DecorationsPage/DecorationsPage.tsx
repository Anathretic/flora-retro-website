'use client';

import { useEffect } from 'react';
import { useFooterLinksContext } from '@/hooks/useFooterLinksContext';
import { Footer, Header } from '@/components';
import { decorationNavbarItems } from '@/components/Header/components/navbarData/navbarItems';
import { DecorationsForm, DecorationsGallery, DecorationsInfo } from './components';

import styles from './styles/styles.module.scss';

export default function DecorationsPage() {
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(true);
	}, []);

	return (
		<>
			<Header navbarItems={decorationNavbarItems} />
			<main>
				<div className={styles.decorations__container}>
					<div className={styles.decorations__wrapper}>
						<div className={styles['decorations__hero-image']}>
							<h1 className={styles['decorations__hero-image-title']}>Dekoracje</h1>
						</div>
						<DecorationsInfo />
						<DecorationsGallery />
						<DecorationsForm />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
