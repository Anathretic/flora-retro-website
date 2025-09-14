'use client';

import styles from '../styles/styles.module.scss';

import '../styles/gallery.scss';

export default function CarHireImages() {
	return (
		<section className={`${styles['rent-car__gallery']} rent-car`} id='galeria'>
			<div className={styles['rent-car__gallery-wrapper']}>
				<h2 className={`${styles['rent-car__title']} ${styles['rent-car__title--special']}`}>Galeria</h2>
				<div className={styles['rent-car__gallery-mosaic-container']}>
					<div className='image-mosaic'>
						<img
							src='/car-images/first-car-image.jpg'
							alt='Obraz przedstawiający udekorowanego Mercedesa W108 stojącego na kostce na tle lasu'
							className={`${styles['rent-car__gallery-image']} ${styles['rent-car__gallery-image--first']} card card-tall card-wide card-with-bg`}
						/>
						<img
							src='/car-images/second-car-image.jpg'
							alt='Obraz przedstawiający udekorowanego Mercedesa W108 stojącego przy restauracji, który prezentuje się w blasku oświetlenia parkingu'
							className={`${styles['rent-car__gallery-image']} ${styles['rent-car__gallery-image--second']} card card-tall card-wide card-with-bg`}
						/>
						<img
							src='/car-images/third-car-image.jpg'
							alt='Obraz przedstawiający udekorowanego Mercedesa W108 stojącego przy bazylice'
							className={`${styles['rent-car__gallery-image']} ${styles['rent-car__gallery-image--third']} card card-tall card-wide card-with-bg`}
						/>
					</div>
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
