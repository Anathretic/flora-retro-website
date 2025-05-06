'use client';

import { useEffect, useState } from 'react';
import Carousel from '@/components/Carousel/Carousel';

import styles from './styles/styles.module.scss';

export default function BlogSection() {
	const [slides, setSlides] = useState([]);

	const fetchSlidesData = async () => {
		const res = await fetch('/api/articles');
		const data = await res.json();
		setSlides(data);
	};

	useEffect(() => {
		fetchSlidesData();
	}, []);

	return (
		<section id='blog' className={styles.blog}>
			<div className={styles.blog__container}>
				<div className={styles.blog__wrapper}>
					<h2 className={styles.blog__title}>Blog</h2>
					<Carousel slides={slides} />
				</div>
			</div>
			<div className={`${styles['blog__special-block']} ${styles['blog__special-block--left']}`} />
			<div className={`${styles['blog__special-block']} ${styles['blog__special-block--right']}`} />
		</section>
	);
}
