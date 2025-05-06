import Link from 'next/link';
import { useRef } from 'react';
import { SlideModel } from '@/models/carousel.model';
import { scrollToTop } from '@/utils/scrollToTopUtils';

import styles from '../styles/styles.module.scss';

export default function Slide({ slide, current, handleSlideClick }: SlideModel) {
	const { id, title, isOnlyImage, href } = slide;
	const slideRef = useRef<HTMLLIElement>(null);

	const handleMouseMove = (e: React.MouseEvent) => {
		const el = slideRef.current;
		const r = el?.getBoundingClientRect();
		if (r) {
			el?.style.setProperty('--x', (e.clientX - (r.left + Math.floor(r.width / 2))).toString());
			el?.style.setProperty('--y', (e.clientY - (r.top + Math.floor(r.height / 2))).toString());
		}
	};

	const handleMouseLeave = () => {
		if (slideRef.current) {
			slideRef.current.style.setProperty('--x', '0');
			slideRef.current.style.setProperty('--y', '0');
		}
	};

	let classNames = styles.slide;

	if (current === id) classNames += ` ${styles['slide--current']}`;
	else if (current - 1 === id) classNames += ` ${styles['slide--previous']}`;
	else if (current + 1 === id) classNames += ` ${styles['slide--next']}`;

	return (
		<li
			ref={slideRef}
			className={classNames}
			onClick={() => handleSlideClick(id)}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}>
			<div className={styles['slide__image-wrapper']}>
				<div className={`${styles.slide__image} ${styles[`slide__image--${!isOnlyImage ? id : `${id}-car`}`]}`} />
			</div>
			{!isOnlyImage && (
				<article className={styles.slide__content}>
					<h3 className={styles.slide__headline}>{title}</h3>
					<Link href={`${href}`} className={`${styles.slide__action} ${styles.btn}`} onClick={scrollToTop}>
						Przeczytaj
					</Link>
				</article>
			)}
		</li>
	);
}
