'use client';

import { useEffect, useState } from 'react';
import { useFooterLinksContext } from '@/hooks/useFooterLinksContext';
import { Footer, Header } from '@/components';
import { decorationNavbarItems } from '@/components/Header/components/navbarData/navbarItems';
import { DecorationsForm, DecorationsGallery, DecorationsInfo } from './components';

import styles from './styles/styles.module.scss';

export default function DecorationsPage() {
	const [desktopBtnValue, setDesktopBtnValue] = useState('Zadzwoń');

	const { setShowSpecialLinks } = useFooterLinksContext();

	const handleDesktopBtn = () => {
		setDesktopBtnValue('+48 789 049 376');
	};

	useEffect(() => {
		setShowSpecialLinks(false);
	}, []);

	return (
		<>
			<Header navbarItems={decorationNavbarItems} />
			<main>
				<div className={styles.decorations__container}>
					<div className={styles.decorations__wrapper}>
						<div className={styles['decorations__hero-image']}>
							<h1 className={styles['decorations__hero-image-title']}>Dekoracje</h1>
							<a href='tel:+48730940691' className={styles['decorations__hero-image-link']}>
								Zadzwoń
							</a>
							<button
								type='button'
								className={`${styles['decorations__hero-image-btn']} ${
									desktopBtnValue !== 'Zadzwoń' && styles['decorations__hero-image-btn--after-click']
								}`}
								onClick={handleDesktopBtn}>
								{desktopBtnValue}
							</button>
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
