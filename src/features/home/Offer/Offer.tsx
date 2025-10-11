'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Carousel } from 'react-responsive-carousel';
import { getOfferData } from '@/shared/utils/getDataHelper';
import OfferBox from './components/OfferBox';
import { OfferDataModel } from '@/shared/models/offer.model';
import { GiButterfly, GiBee, GiButterflyFlower } from 'react-icons/gi';

import styles from './styles/styles.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/carousel.scss';

export default function OfferSection() {
	const [offerData, setOfferData] = useState<OfferDataModel[] | null>(null);

	const isDesktop = useMediaQuery({ query: '(min-width: 1536px)' });

	const groupOffers = (offers: OfferDataModel[], groupSize: number) => {
		const groups = [];

		for (let i = 0; i < offers.length; i += groupSize) {
			groups.push(offers.slice(i, i + groupSize));
		}

		return groups;
	};

	useEffect(() => {
		const fetchOffers = async () => {
			const data = await getOfferData();
			setOfferData(data);
		};

		fetchOffers();
	}, []);

	return (
		<section id='oferta' className={styles.offer}>
			<div className={styles.offer__container}>
				<h2 className={styles.offer__title}>Oferta</h2>
				<div className={styles['offer__wrapper']}>
					{offerData && (
						<Carousel
							className='offer-carousel'
							showThumbs={false}
							showStatus={false}
							showArrows={false}
							interval={3000}
							autoPlay
							infiniteLoop>
							{groupOffers(offerData, isDesktop ? 2 : 1).map((group, id) => (
								<div key={id} className={styles.offer__group}>
									{group.map((data, id) => (
										<OfferBox
											key={id}
											id={id}
											subpage={data.offer.subpage}
											text={data.offer.text}
											title={data.offer.title}
											subtitle={data.offer.subtitle}
											keyValueArray={data.offer.keyValueArray}
										/>
									))}
								</div>
							))}
						</Carousel>
					)}
				</div>
				<GiButterflyFlower className={`${styles['offer__special-icon']} ${styles['offer__special-icon--first']}`} />
				<GiButterflyFlower className={`${styles['offer__special-icon']} ${styles['offer__special-icon--second']}`} />
				<GiButterfly className={`${styles['offer__special-icon']} ${styles['offer__special-icon--third']}`} />
				<GiBee className={`${styles['offer__special-icon']} ${styles['offer__special-icon--fourth']}`} />
			</div>
		</section>
	);
}
