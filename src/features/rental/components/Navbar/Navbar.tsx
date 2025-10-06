'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useCartContext } from '@/shared/hooks/useCartContext';
import { NavbarTitle } from './components/NavbarTitle';
import { HeaderModel } from '../../models/components.model';
import { FaHome, FaShoppingCart } from 'react-icons/fa';

import styles from './styles/styles.module.scss';

export default function Header({ setShowCart }: HeaderModel) {
	const [isScrolled, setIsScrolled] = useState(false);

	const { cart } = useCartContext();

	const divRef = useRef<HTMLDivElement | null>(null);

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
				<div
					className={`${styles.header__container} ${
						isScrolled && styles['header__container--is-scrolled-on-subpage']
					}`}>
					<NavbarTitle divRef={divRef} />
					<nav className={styles['navbar__container']}>
						<Link href='/'>
							<FaHome fontSize={28} />
						</Link>
						<button type='button' onClick={() => setShowCart(true)}>
							<span>{cart.length > 99 ? '99+' : cart.length}</span>
							<FaShoppingCart fontSize={26} />
						</button>
					</nav>
				</div>
			</div>
		</header>
	);
}
