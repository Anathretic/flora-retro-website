import Carousel from '@/components/Carousel/Carousel';
import { imageData } from '../data/imageData';

import styles from '../styles/styles.module.scss';

export default function RentCarImages() {
	return (
		<section className={styles['rent-car__gallery']}>
			<div className={styles['rent-car__gallery-container']}>
				<div className={styles['rent-car__gallery-wrapper']}>
					<h2 className={`${styles['rent-car__title']} ${styles['rent-car__title--special']}`}>Galeria</h2>
					<Carousel slides={imageData} />
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
