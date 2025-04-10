import { useEffect } from 'react';
import { NavbarTitleModel } from '@/models/header.model';

import styles from '../styles/styles.module.scss';

export const NavbarTitle: React.FC<NavbarTitleModel> = ({ divRef, isScrolled }) => {
	const scrollToTop = () => {
		const { current } = divRef;

		if (current !== null) {
			current.scrollIntoView({ behavior: 'smooth' });
		}

		if (window.location.hash) {
			window.history.replaceState('', document.title, window.location.pathname);
		}
	};

	useEffect(() => scrollToTop, []);

	return (
		<div className={styles.navbar__title} onClick={scrollToTop}>
			<div className={`${styles['navbar__title-box']} ${isScrolled ? styles['white-color'] : styles['gray-color']}`}>
				<p>Miejsce na logo</p>
			</div>
		</div>
	);
};
