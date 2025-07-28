import styles from '../styles/styles.module.scss';

export default function BalloonWallsGallery() {
	return (
		<section className={styles['balloon-walls__gallery']} id='galeria'>
			<div className={styles['balloon-walls__gallery-container']}>
				<h2 className={styles['balloon-walls__title']}>Galeria</h2>
				<div className={styles['balloon-walls__gallery-mosaic-container']}>
					<div className='image-mosaic'>
						<img
							src='/decoration-images/first-decoration-image.jpg'
							alt='Obraz przedstawiający bukiet fioletowych kwiatów'
							className={`${styles['balloon-walls__gallery-image']} ${styles['balloon-walls__gallery-image--first']} card card-tall card-wide card-with-bg`}
						/>

						<img
							src='/decoration-images/second-decoration-image.jpg'
							alt='Obraz przedstawiający udekorowaną salę weselną'
							className={`${styles['balloon-walls__gallery-image']} ${styles['balloon-walls__gallery-image--second']} card card-tall card-with-bg`}
						/>

						<img
							src='/decoration-images/third-decoration-image.jpg'
							alt='Obraz przedstawiający udekorowaną salę weselną'
							className={`${styles['balloon-walls__gallery-image']} ${styles['balloon-walls__gallery-image--third']} card card-with-bg`}
						/>

						<img
							src='/decoration-images/fourth-decoration-image.jpg'
							alt='Obraz przedstawiający dekorację weselnego stołu'
							className={`${styles['balloon-walls__gallery-image']} ${styles['balloon-walls__gallery-image--fourth']} card card-with-bg`}
						/>

						<img
							src='/decoration-images/fifth-decoration-image.jpeg'
							alt='Obraz przedstawiający ślubną dekorację kościoła'
							className={`${styles['balloon-walls__gallery-image']} ${styles['balloon-walls__gallery-image--fifth']} card card-with-bg`}
						/>

						<img
							src='/decoration-images/sixth-decoration-image.jpg'
							alt='Obraz przedstawiający udekorowaną salę weselną'
							className={`${styles['balloon-walls__gallery-image']} ${styles['balloon-walls__gallery-image--sixth']} card card-with-bg`}
						/>

						<img
							src='/decoration-images/seventh-decoration-image.jpg'
							alt='Obraz przedstawiający bukiety różowych róż'
							className={`${styles['balloon-walls__gallery-image']} ${styles['balloon-walls__gallery-image--seventh']} card card-wide card-with-bg`}
						/>
					</div>
				</div>
			</div>
			<div
				className={`${styles['balloon-walls__gallery-special-block']} ${styles['balloon-walls__gallery-special-block--left']}`}
			/>
			<div
				className={`${styles['balloon-walls__gallery-special-block']} ${styles['balloon-walls__gallery-special-block--right']}`}
			/>
		</section>
	);
}
