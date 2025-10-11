'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { useCartContext } from '@/shared/hooks/useCartContext';
import { useScrolled } from '@/shared/hooks/useScrolled';
import { NavbarTitle } from './components/NavbarTitle';
import { HeaderModel } from '../../models/components.model';
import { FaHome, FaShoppingCart } from 'react-icons/fa';

import styles from './styles/styles.module.scss';

export default function Header({ setShowCart }: HeaderModel) {
	const { cart } = useCartContext();

	const isScrolled = useScrolled();

	const divRef = useRef<HTMLDivElement | null>(null);

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
