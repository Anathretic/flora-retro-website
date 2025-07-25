'use client';

import Link from 'next/link';
import { scrollToTop } from '@/utils/scrollToTopUtils';

import styles from './styles/styles.module.scss';

export default function DecorationRentalPage() {
	return (
		<main>
			<section className={styles['decoration-rental']}>
				<div className={styles['decoration-rental__container']}>
					<h1 className={styles['decoration-rental__title']}>Witaj użytkowniku!</h1>
					<p className={styles['decoration-rental__subtext']}>
						Pracujemy nad tym byś mógł skorzystać z pełnej oferty! :)
					</p>
				</div>
				<Link className={styles['decoration-rental__special-btn']} href='/' onClick={scrollToTop}>
					Home
				</Link>
			</section>
		</main>
	);
}
