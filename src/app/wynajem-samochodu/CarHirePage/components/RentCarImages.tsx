'use client';

import { useEffect, useState } from 'react';
import { getRentCarImagesData } from '@/helpers/getDataHelper';
import Carousel from '@/components/Carousel/Carousel';
import { SlideDataBoxModel } from '@/models/carousel.model';

import styles from '../styles/styles.module.scss';

export default function RentCarImages() {
	const [slides, setSlides] = useState<SlideDataBoxModel[]>([]);

	const fetchRentCarImages = async () => {
		const data = await getRentCarImagesData();
		if (data) setSlides(data);
	};

	useEffect(() => {
		fetchRentCarImages();
	}, []);

	return (
		<section className={styles['rent-car__gallery']} id='galeria'>
			<div className={styles['rent-car__gallery-container']}>
				<div className={styles['rent-car__gallery-wrapper']}>
					<h2 className={`${styles['rent-car__title']} ${styles['rent-car__title--special']}`}>Galeria</h2>
					{slides && <Carousel slides={slides} />}
				</div>
			</div>
			<div
				className={`${styles['rent-car__gallery-special-block']} ${styles['rent-car__gallery-special-block--left']}`}
			/>
			<div
				className={`${styles['rent-car__gallery-special-block']} ${styles['rent-car__gallery-special-block--right']}`}
			/>
		</section>
	);
}
