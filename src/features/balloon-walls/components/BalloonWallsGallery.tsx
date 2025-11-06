import styles from '../styles/styles.module.scss';

import '../../../shared/styles/gallery.scss';

export default function BalloonWallsGallery() {
	return (
		<section className={styles['balloon-walls__gallery']} id='galeria'>
			<div className={styles['balloon-walls__gallery-container']}>
				<h2 className={styles['balloon-walls__title']}>Galeria</h2>
				<div className={styles['balloon-walls__gallery-mosaic-container']}>
					<div className='image-mosaic'>
						<img
							src='/balloon-walls-images/first-balloon-walls-image.jpg'
							alt='Obraz przedstawiający ściankę balonową'
							className={`${styles['balloon-walls__gallery-image']} ${styles['balloon-walls__gallery-image--first']} card card-tall card-wide`}
						/>
						<img
							src='/balloon-walls-images/second-balloon-walls-image.jpg'
							alt='Obraz przedstawiający ściankę balonową'
							className={`${styles['balloon-walls__gallery-image']} ${styles['balloon-walls__gallery-image--second']} card card-tall`}
						/>
						<img
							src='/balloon-walls-images/third-balloon-walls-image.jpg'
							alt='Obraz przedstawiający ściankę balonową'
							className={`${styles['balloon-walls__gallery-image']} ${styles['balloon-walls__gallery-image--third']} card`}
						/>
						<img
							src='/balloon-walls-images/fourth-balloon-walls-image.jpg'
							alt='Obraz przedstawiający ściankę balonową'
							className={`${styles['balloon-walls__gallery-image']} ${styles['balloon-walls__gallery-image--fourth']} card`}
						/>
						<img
							src='/balloon-walls-images/fifth-balloon-walls-image.jpg'
							alt='Obraz przedstawiający ściankę balonową'
							className={`${styles['balloon-walls__gallery-image']} ${styles['balloon-walls__gallery-image--fifth']} card`}
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
