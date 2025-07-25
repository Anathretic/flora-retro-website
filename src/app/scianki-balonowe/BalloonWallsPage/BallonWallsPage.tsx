'use client';

import Link from 'next/link';
import { scrollToTop } from '@/utils/scrollToTopUtils';

import styles from './styles/styles.module.scss';

export default function BalloonWallsPage() {
	return (
		<main>
			<section className={styles['balloon-walls']}>
				<div className={styles['balloon-walls__container']}>
					<h1 className={styles['balloon-walls__title']}>Witaj użytkowniku!</h1>
					<p className={styles['balloon-walls__subtext']}>Pracujemy nad tym byś mógł skorzystać z pełnej oferty! :)</p>
				</div>
				<Link className={styles['balloon-walls__special-btn']} href='/' onClick={scrollToTop}>
					Home
				</Link>
			</section>
		</main>
	);
}
