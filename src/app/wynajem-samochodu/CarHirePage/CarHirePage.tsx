'use client';

import { useEffect } from 'react';
import { useFooterLinksContext } from '@/hooks/useFooterLinksContext';
import { Footer, Header } from '@/components';
import { carHireNavbarItems } from '@/components/Header/components/navbarData/navbarItems';
import { RentCarBenefits, RentCarForm, RentCarImages } from './components';

import styles from './styles/styles.module.scss';

export default function CarHirePage() {
	const { setShowSpecialLinks } = useFooterLinksContext();

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
