'use client';

import styles from './styles/styles.module.scss';
import '../../shared/styles/globals.scss';

export default function DecorationRentalPage() {
	return (
		<main className='special-main'>
			<div className={styles['decorations-rental__container']}>
				<div className={styles['decorations-rental__wrapper']}>
					<div className={styles['decorations-rental__hero-image']}>
						<h1 className={styles['decorations-rental__hero-image-title']}>Wypożyczalnia</h1>
					</div>
				</div>
			</div>
		</main>
	);
}
