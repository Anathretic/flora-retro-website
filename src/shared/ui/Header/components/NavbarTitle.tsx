'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { NavbarTitleModel } from '../models/header.model';

import WebsiteLogo from '../../../../images/website-logo-white.svg';
import styles from '../styles/styles.module.scss';

export function NavbarTitle({ divRef }: NavbarTitleModel) {
	const scrollToTop = () => {
		const { current } = divRef;

		if (current !== null) {
			current.scrollIntoView({ behavior: 'smooth' });
		}

		if (window.location.hash) {
			window.history.replaceState({}, document.title, window.location.pathname);
		}
	};

	useEffect(() => {
		scrollToTop();
	}, []);

	return (
		<div className={styles.navbar__title} onClick={scrollToTop}>
			<div className={styles['navbar__title-box']}>
				<Image src={WebsiteLogo} alt='Logo przekierowujące na górę strony' width={110} height={75} />
			</div>
		</div>
	);
}
