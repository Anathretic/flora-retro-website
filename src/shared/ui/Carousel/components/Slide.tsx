import Link from 'next/link';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSlideOptions } from '../hooks/useSlideOptions';
import { scrollToTop } from '@/shared/utils/scrollToTopUtils';
import { SlideModel } from '../models/components.model';

import styles from '../styles/styles.module.scss';

export default function Slide({ slide, current, handleSlideClick }: SlideModel) {
	const { id, title, href, image, largeImage, alt } = slide;
	const slideRef = useRef<HTMLLIElement>(null);
	const { handleMouseLeave, handleMouseMove } = useSlideOptions({ slideRef });

	const isLarge = useMediaQuery({ query: '(min-width: 768px)' });

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
				<img src={`${largeImage ? (isLarge ? largeImage : image) : image}`} alt={alt} className={styles.slide__image} />
			</div>
			{title && (
				<div className={styles.slide__content}>
					<h3 className={styles.slide__headline}>{title}</h3>
					<Link href={`${href}`} className={`${styles.slide__action} ${styles.btn}`} onClick={scrollToTop}>
						Przeczytaj
					</Link>
				</div>
			)}
		</li>
	);
}
