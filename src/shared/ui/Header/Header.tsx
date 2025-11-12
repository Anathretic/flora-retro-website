'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useScrolled } from '@/shared/hooks/useScrolled';
import { NavbarTitle } from './components/NavbarTitle';
import { NavbarItem } from './components/NavbarItem';
import { NavbarInstagramIcon } from './components/NavbarInstagramIcon';
import { HeaderModel } from './models/header.model';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';

import styles from './styles/styles.module.scss';
import animations from './styles/animations.module.scss';

export default function Header({ navbarItems }: HeaderModel) {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	const pathname = usePathname();

	const isScrolled = useScrolled();

	const divRef = useRef<HTMLDivElement | null>(null);

	const handleMenuClose = () => {
		setIsAnimating(true);
		setToggleMenu(false);
	};

	const handleAnimationEnd = () => {
		setIsAnimating(false);
	};

	useEffect(() => {
		if (toggleMenu || isAnimating) {
			document.body.classList.add(`${styles['scroll-block']}`);
		} else {
			document.body.classList.remove(`${styles['scroll-block']}`);
		}
	}, [toggleMenu, isAnimating]);

	return (
		<header ref={divRef}>
			<div className={`${styles.header} ${isScrolled ? styles['header--is-scrolled'] : ''}`}>
				<div
					className={`${styles.header__container} ${pathname !== '/' && styles['header__container--subpage']} ${
						isScrolled && styles['header__container--is-scrolled-on-subpage']
					}`}>
					<NavbarTitle divRef={divRef} />
					<div className={styles['navbar__mobile-container']}>
						<HiMenuAlt4
							className={styles['navbar__mobile-burger-btn']}
							fontSize={32}
							onClick={() => setToggleMenu(true)}
						/>
						{(toggleMenu || isAnimating) && (
							<div
								className={`${styles['navbar__mobile-wrapper']} ${
									toggleMenu ? animations['animate-fade-in'] : animations['animate-fade-out']
								}`}>
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
										<NavbarInstagramIcon onClick={handleMenuClose} />
									</ul>
								</nav>
							</div>
						)}
					</div>
					<nav className={styles.navbar__desktop}>
						<ul className={styles['navbar__desktop-list']}>
							{navbarItems.map(({ title, section }) => (
								<NavbarItem key={title} title={title} section={section} />
							))}
							<NavbarInstagramIcon />
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}
