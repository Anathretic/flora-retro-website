import styles from '../styles/styles.module.scss';

import '../../../shared/styles/gallery.scss';

export default function DecorationsGallery() {
	return (
		<section className={styles.decorations__gallery} id='galeria'>
			<div className={styles['decorations__gallery-container']}>
				<h2 className={styles.decorations__title}>Galeria</h2>
				<div className={styles['decorations__gallery-mosaic-container']}>
					<div className='image-mosaic'>
						<img
							src='/decoration-images/first-decoration-image.jpg'
							alt='Obraz przedstawiający bukiet fioletowych kwiatów'
							className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--first']} card card-tall card-wide card-with-bg`}
						/>
						<img
							src='/decoration-images/second-decoration-image.jpg'
							alt='Obraz przedstawiający udekorowaną salę weselną'
							className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--second']} card card-tall card-with-bg`}
						/>
						<img
							src='/decoration-images/third-decoration-image.jpg'
							alt='Obraz przedstawiający udekorowaną salę weselną'
							className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--third']} card card-with-bg`}
						/>
						<img
							src='/decoration-images/fourth-decoration-image.jpg'
							alt='Obraz przedstawiający dekorację weselnego stołu'
							className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--fourth']} card card-with-bg`}
						/>
						<img
							src='/decoration-images/fifth-decoration-image.jpeg'
							alt='Obraz przedstawiający ślubną dekorację kościoła'
							className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--fifth']} card card-with-bg`}
						/>
						<img
							src='/decoration-images/sixth-decoration-image.jpg'
							alt='Obraz przedstawiający udekorowaną salę weselną'
							className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--sixth']} card card-with-bg`}
						/>
						<img
							src='/decoration-images/seventh-decoration-image.jpg'
							alt='Obraz przedstawiający bukiety różowych róż'
							className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--seventh']} card card-wide card-with-bg`}
						/>
					</div>
				</div>
			</div>
			<div
				className={`${styles['decorations__gallery-special-block']} ${styles['decorations__gallery-special-block--left']}`}
			/>
			<div
				className={`${styles['decorations__gallery-special-block']} ${styles['decorations__gallery-special-block--right']}`}
			/>
		</section>
	);
}
