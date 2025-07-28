'use client';

import { useEffect, useState } from 'react';
import { useFooterLinksContext } from '@/hooks/useFooterLinksContext';
import { Footer, Header } from '@/components';
import { decorationNavbarItems } from '@/components/Header/components/navbarData/navbarItems';
import { BalloonWallsForm, BalloonWallsGallery, BalloonWallsInfo } from './components';

import styles from './styles/styles.module.scss';

export default function BalloonWallsPage() {
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
				<div className={styles['balloon-walls__container']}>
					<div className={styles['balloon-walls__wrapper']}>
						<div className={styles['balloon-walls__hero-image']}>
							<h1 className={styles['balloon-walls__hero-image-title']}>Ścianki balonowe</h1>
							<a href='tel:+48730940691' className={styles['balloon-walls__hero-image-link']}>
								Zadzwoń
							</a>
							<button
								type='button'
								className={`${styles['balloon-walls__hero-image-btn']} ${
									desktopBtnValue !== 'Zadzwoń' && styles['balloon-walls__hero-image-btn--after-click']
								}`}
								onClick={handleDesktopBtn}>
								{desktopBtnValue}
							</button>
						</div>
						<BalloonWallsInfo />
						<BalloonWallsGallery />
						<BalloonWallsForm />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
