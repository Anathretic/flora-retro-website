'use client';

import { useEffect, useState } from 'react';
import Carousel from '@/components/Carousel/Carousel';

import styles from '../styles/styles.module.scss';

export default function RentCarImages() {
	const [slides, setSlides] = useState([]);

	const fetchSlidesData = async () => {
		const res = await fetch('/api/images');
		const data = await res.json();
		setSlides(data);
	};

	useEffect(() => {
		fetchSlidesData();
	}, []);

	return (
		<section className={styles['rent-car__gallery']} id='galeria'>
			<div className={styles['rent-car__gallery-container']}>
				<div className={styles['rent-car__gallery-wrapper']}>
					<h2 className={`${styles['rent-car__title']} ${styles['rent-car__title--special']}`}>Galeria</h2>
					<Carousel slides={slides} />
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
