'use client';

import { useEffect, useState } from 'react';
import { useFooterLinksContext } from '@/shared/hooks/useFooterLinksContext';
import Header from '@/shared/ui/Header/Header';
import Footer from '@/shared/ui/Footer/Footer';
import { carHireNavbarItems } from '@/shared/ui/Header/components/navbarData/navbarItems';
import { RentCarBenefits, RentCarForm, RentCarImages } from './components';

import styles from './styles/styles.module.scss';

export default function CarHirePage() {
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
			<Header navbarItems={carHireNavbarItems} />
			<main>
				<div className={styles['rent-car__container']}>
					<div className={styles['rent-car__wrapper']}>
						<div className={styles['rent-car__hero-image']}>
							<h1 className={styles['rent-car__hero-image-title']}>Wynajem samochodu</h1>
							<a href='tel:+48730940691' className={styles['rent-car__hero-image-link']}>
								Zadzwoń
							</a>
							<button
								type='button'
								className={`${styles['rent-car__hero-image-btn']} ${
									desktopBtnValue !== 'Zadzwoń' && styles['rent-car__hero-image-btn--after-click']
								}`}
								onClick={handleDesktopBtn}>
								{desktopBtnValue}
							</button>
						</div>
						<RentCarBenefits />
						<RentCarImages />
						<RentCarForm />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
