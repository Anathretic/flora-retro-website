'use client';

import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { OpinionItem } from './components/OpinionItem';
import { OpinionsDataModel } from '@/models/opinions.model';

import styles from './styles/styles.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function OpinionsSection() {
	const [opinionsData, setOpinionsData] = useState<OpinionsDataModel[] | null>(null);

	const fetchOpinionsData = async () => {
		const res = await fetch('/api/opinions');
		const data = await res.json();
		setOpinionsData(data);
	};

	useEffect(() => {
		fetchOpinionsData();
	}, []);

	return (
		<section id='opinie' className={styles.opinions}>
			<div className={styles.opinions__container}>
				<h2 className={styles.opinions__title}>Opinie</h2>
				<div className={styles.opinions__wrapper}>
					{opinionsData && (
						<Carousel
							showThumbs={false}
							showStatus={false}
							showIndicators={false}
							interval={5000}
							autoPlay
							infiniteLoop>
							{opinionsData.map(({ opinion }, id: number) => (
								<OpinionItem key={id} title={opinion.title} content={opinion.content} name={opinion.name} />
							))}
						</Carousel>
					)}
				</div>
			</div>
			<div className={`${styles['opinions__special-block']} ${styles['opinions__special-block--left']}`} />
			<div className={`${styles['opinions__special-block']} ${styles['opinions__special-block--right']}`} />
		</section>
	);
}
