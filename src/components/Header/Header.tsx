'use client';

import { useEffect, useRef, useState } from 'react';
import { navbarItems } from './components/navbarData/navbarItems';
import { NavbarTitle } from './components/NavbarTitle';
import { NavbarItem } from './components/NavbarItem';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';

import styles from './styles/styles.module.scss';
import animations from './styles/animations.module.scss';

export default function Header() {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const divRef = useRef<HTMLDivElement | null>(null);

	const handleMenuClose = () => {
		setIsAnimating(true);
		setToggleMenu(false);

		setTimeout(() => {
			setIsAnimating(false);
		}, 450);
	};

	const handleAnimationEnd = () => {
		setIsAnimating(false);
	};

	const handleScroll = () => {
		if (window.scrollY > 30) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header ref={divRef}>
			<div className={`${styles.header} ${isScrolled ? styles['header--is-scrolled'] : ''}`}>
				<div className={styles.header__container}>
					<NavbarTitle divRef={divRef} isScrolled={isScrolled} />
					<div className={styles['navbar__mobile-container']}>
						<HiMenuAlt4
							className={styles['navbar__mobile-burger-btn']}
							fontSize={32}
							onClick={() => setToggleMenu(true)}
						/>
						{(toggleMenu || isAnimating) && (
							<nav className={styles.navbar__mobile}>
								<ul
									onAnimationEnd={handleAnimationEnd}
									className={`${styles['navbar__mobile-list']} ${
										toggleMenu ? animations['animate-slide-in'] : animations['animate-slide-out']
									}`}>
									<li className={styles['navbar__mobile-exit-icon']}>
										<AiOutlineClose fontSize={28} onClick={handleMenuClose} />
									</li>
									{navbarItems.map(({ title, section }) => (
										<NavbarItem
											key={title}
											title={title}
											section={section}
											classProps={styles['navbar__item-margin']}
											onClick={handleMenuClose}
										/>
									))}
								</ul>
							</nav>
						)}
					</div>
					<nav className={styles.navbar__desktop}>
						<ul className={styles['navbar__desktop-list']}>
							{navbarItems.map(({ title, section }) => (
								<NavbarItem key={title} title={title} section={section} />
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}
