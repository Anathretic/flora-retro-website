'use client';

import { useEffect, useState } from 'react';
import OfferBox from './components/OfferBox';
import { OfferDataModel } from '@/models/offer.model';

import styles from './styles/styles.module.scss';

export default function OfferSection() {
	const [offerData, setOfferData] = useState<OfferDataModel[] | null>(null);

	const fetchOfferData = async () => {
		const res = await fetch('/api/offer');
		const data = await res.json();
		setOfferData(data);
	};

	useEffect(() => {
		fetchOfferData();
	}, []);

	return (
		<section id='oferta' className={styles.offer}>
			<div className={styles.offer__container}>
				<h2 className={styles.offer__title}>Oferta</h2>
				<div className={styles['offer__title-decoration']} />
				<div className={styles['offer__wrapper']}>
					{offerData &&
						offerData.map(({ offer }, id: number) => (
							<OfferBox
								key={id}
								subpage={offer.subpage}
								text={offer.text}
								title={offer.title}
								offerPlusesArray={offer.offerPlusesArray}
							/>
						))}
				</div>
			</div>
		</section>
	);
}
