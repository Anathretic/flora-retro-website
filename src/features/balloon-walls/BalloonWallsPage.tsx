'use client';

import { useEffect, useState } from 'react';
import { useFooterLinksContext } from '@/shared/hooks/useFooterLinksContext';
import Header from '@/shared/ui/Header/Header';
import Footer from '@/shared/ui/Footer/Footer';
import { balloonWallsNavbarItems } from '@/shared/ui/Header/components/navbarData/navbarItems';
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
			<Header navbarItems={balloonWallsNavbarItems} />
			<main>
				<div className={styles['balloon-walls__container']}>
					<div className={styles['balloon-walls__wrapper']}>
						<div className={styles['balloon-walls__special-wrapper']}>
							<div className={styles['balloon-walls__hero-image']}>
								<h1 className={styles['balloon-walls__hero-image-title']}>Ścianki balonowe</h1>
								<a href='tel:+48789049376' className={styles['balloon-walls__hero-image-link']}>
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
						</div>
						<BalloonWallsGallery />
						<BalloonWallsForm />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
