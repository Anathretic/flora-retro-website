'use client';

import { useEffect } from 'react';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import { useFooterLinksContext } from '@/hooks/useFooterLinksContext';
import { Footer } from '@/components';

import NotFoundImage from '../images/subpages/not-found-subpage/not-found-image.png';
import styles from '../styles/not-found/styles.module.scss';

export default function NotFound() {
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(true);
	}, []);

	return (
		<>
			<main>
				<section className={styles.notfound}>
					<div className={styles.notfound__container}>
						<Image
							className={styles.notfound__img}
							src={NotFoundImage}
							alt='Obrazek informujący o braku strony'
							priority
						/>
						<div className={styles.notfound__box}>
							<h1 className={styles.notfound__title}>Ups! Strony nie znaleziono..</h1>
							<p className={styles.notfound__credits}>
								Chyba link się nie zgadza.. Skorzystaj z przycisku poniżej i zacznij swoje poszukiwanie od głównej
								strony!
							</p>
							<Link href='/' className={styles.notfound__btn} aria-label='Powrót na stronę główną'>
								Powrót
							</Link>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
