'use client';

import { useEffect, useState } from 'react';
import OfferBox from './components/OfferBox';
import { OfferDataModel } from '@/models/offer.model';
import { GiButterfly, GiBee, GiButterflyFlower } from 'react-icons/gi';

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
				<div className={styles['offer__wrapper']}>
					{offerData &&
						offerData.map(({ offer }, id: number) => (
							<OfferBox
								key={id}
								id={id}
								subpage={offer.subpage}
								text={offer.text}
								title={offer.title}
								subtitle={offer.subtitle}
								offerPlusesArray={offer.offerPlusesArray}
							/>
						))}
				</div>
				<GiButterflyFlower className={`${styles['offer__special-icon']} ${styles['offer__special-icon--first']}`} />
				<GiButterflyFlower className={`${styles['offer__special-icon']} ${styles['offer__special-icon--second']}`} />
				<GiButterfly className={`${styles['offer__special-icon']} ${styles['offer__special-icon--third']}`} />
				<GiBee className={`${styles['offer__special-icon']} ${styles['offer__special-icon--fourth']}`} />
			</div>
		</section>
	);
}
