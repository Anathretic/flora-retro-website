'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { scrollToTopOnNavLogoClick } from '@/shared/utils/scrollToTopUtils';
import { NavbarTitleModel } from '../models/header.model';

import WebsiteLogo from '../../../assets/website-logo-white.svg';

import styles from '../styles/styles.module.scss';
import animations from '../styles/animations.module.scss';

export function NavbarTitle({ divRef }: NavbarTitleModel) {
	useEffect(() => {
		scrollToTopOnNavLogoClick(divRef);
	}, []);

	return (
		<div className={styles.navbar__title} onClick={() => scrollToTopOnNavLogoClick(divRef)}>
			<div className={styles['navbar__title-box']}>
				<Image
					className={animations['animate-opacity']}
					src={WebsiteLogo}
					alt='Logo przekierowujące na górę strony'
					width={110}
					height={75}
				/>
			</div>
		</div>
	);
}
