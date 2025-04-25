import styles from '../styles/styles.module.scss';

export default function DecorationsGallery() {
	return (
		<section className={styles.decorations__gallery}>
			<div className={styles['decorations__gallery-container']}>
				<h2 className={styles.decorations__title}>Galeria</h2>
				<div className={styles['decorations__gallery-mosaic-container']}>
					<div className='image-mosaic'>
						<div className={`${styles['decorations__gallery-image--first']} card card-tall card-wide card-with-bg `}>
							<span>Pracuję nad tym..</span>
						</div>
						<div className={`${styles['decorations__gallery-image--second']} card card-tall card-with-bg`}>
							<span>Pracuję nad tym..</span>
						</div>
						<div className={`${styles['decorations__gallery-image--third']} card card-with-bg`}>
							<span>Pracuję nad tym..</span>
						</div>
						<div className={`${styles['decorations__gallery-image--fourth']} card card-with-bg`}>
							<span>Pracuję nad tym..</span>
						</div>
						<div className={`${styles['decorations__gallery-image--fifth']} card card-with-bg`}>
							<span>Pracuję nad tym..</span>
						</div>
						<div className={`${styles['decorations__gallery-image--sixth']} card card-with-bg`}>
							<span>Pracuję nad tym..</span>
						</div>
						<div className={`${styles['decorations__gallery-image--seventh']} card card-wide card-with-bg`}>
							<span>Pracuję nad tym..</span>
						</div>
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
