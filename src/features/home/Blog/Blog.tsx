'use client';

import { useEffect, useState } from 'react';
import { getBlogArticlesData } from '@/shared/utils/getDataHelper';
import Carousel from '@/shared/ui/Carousel/Carousel';
import { SlideDataBoxModel } from '@/shared/models/carousel.model';
import { BsChevronDoubleRight } from 'react-icons/bs';

import styles from './styles/styles.module.scss';
import Link from 'next/link';
import { scrollToTop } from '@/shared/utils/scrollToTopUtils';

export default function BlogSection() {
	const [slides, setSlides] = useState<SlideDataBoxModel[]>([]);

	useEffect(() => {
		const fetchBlogArticles = async () => {
			const data = await getBlogArticlesData();
			if (data) setSlides(data);
		};

		fetchBlogArticles();
	}, []);

	return (
		<section id='blog' className={styles.blog}>
			<div className={styles.blog__container}>
				<div className={styles.blog__wrapper}>
					<h2 className={styles.blog__title}>
						Blog{' '}
						<Link href='/artykuly-i-porady' onClick={scrollToTop}>
							<BsChevronDoubleRight />
						</Link>
					</h2>
					<Carousel slides={slides} />
				</div>
			</div>
			<div className={`${styles['blog__special-block']} ${styles['blog__special-block--left']}`} />
			<div className={`${styles['blog__special-block']} ${styles['blog__special-block--right']}`} />
		</section>
	);
}
