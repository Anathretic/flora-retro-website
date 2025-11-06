import { useState } from 'react';

import styles from '../styles/styles.module.scss';
import '../../../shared/styles/gallery.scss';

export default function DecorationsGallery() {
	const [showMorePhotos, setShowMorePhotos] = useState(false);

	return (
		<section className={styles.decorations__gallery} id='galeria'>
			<div className={styles['decorations__gallery-container']}>
				<h2 className={styles.decorations__title}>Galeria</h2>
				<div className={styles['decorations__gallery-mosaic-container']}>
					<div className='image-mosaic'>
						<img
							src='/decoration-images/first-decoration-image.jpg'
							alt='Obraz przedstawiający bukiet fioletowych kwiatów'
							className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--first']} card card-tall card-wide`}
						/>
						<img
							src='/decoration-images/second-decoration-image.jpg'
							alt='Obraz przedstawiający udekorowaną salę weselną'
							className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--second']} card card-tall`}
						/>
						<img
							src='/decoration-images/third-decoration-image.jpg'
							alt='Obraz przedstawiający udekorowaną salę weselną'
							className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--third']} card`}
						/>
						<img
							src='/decoration-images/fourth-decoration-image.jpg'
							alt='Obraz przedstawiający dekorację weselnego stołu'
							className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--fourth']} card`}
						/>
						<img
							src='/decoration-images/fifth-decoration-image.jpeg'
							alt='Obraz przedstawiający ślubną dekorację kościoła'
							className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--fifth']} card`}
						/>
						<img
							src='/decoration-images/sixth-decoration-image.jpg'
							alt='Obraz przedstawiający udekorowaną salę weselną'
							className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--sixth']} card`}
						/>
						{!showMorePhotos ? (
							<div
								className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--seventh']} card card-wide`}>
								<button
									className={styles['decorations__gallery-button']}
									type='button'
									onClick={() => setShowMorePhotos(true)}>
									Więcej
								</button>
							</div>
						) : (
							<img
								src='/decoration-images/seventh-decoration-image.jpg'
								alt='Obraz przedstawiający udekorowaną na biało salę'
								className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--seventh']} card card-wide`}
							/>
						)}
					</div>
					{showMorePhotos && (
						<div className='image-mosaic image-mosaic-reverse'>
							<img
								src='/decoration-images/eighth-decoration-image.jpg'
								alt='Obraz przedstawiający bukiet różowych kwiatów'
								className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--eighth']} card card-tall card-wide`}
							/>
							<img
								src='/decoration-images/nineth-decoration-image.jpg'
								alt='Obraz przedstawiający udekorowany stół weselny'
								className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--nineth']} card card-tall`}
							/>
							<img
								src='/decoration-images/tenth-decoration-image.jpg'
								alt='Obraz przedstawiający bukiet kwiatów ze złotym motylem'
								className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--tenth']} card`}
							/>
							<img
								src='/decoration-images/eleventh-decoration-image.jpg'
								alt='Obraz przedstawiający dekorację weselnego stołu'
								className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--eleventh']} card`}
							/>
							<img
								src='/decoration-images/twelveth-decoration-image.jpg'
								alt='Obraz przedstawiający bukiet róż na białym stole'
								className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--twelveth']} card`}
							/>
							<img
								src='/decoration-images/thirteenth-decoration-image.jpg'
								alt='Obraz przedstawiający udekorowaną białą salę weselną'
								className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--thirteenth']} card`}
							/>
							<img
								src='/decoration-images/fourteenth-decoration-image.jpg'
								alt='Obraz przedstawiający udekorowany otwarty ołtarz'
								className={`${styles['decorations__gallery-image']} ${styles['decorations__gallery-image--fourteenth']} card card-wide`}
							/>
						</div>
					)}
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
