'use client';

import { useRef } from 'react';
import { useCartContext } from '@/shared/hooks/useCartContext';
import { useScrollStatus } from '../../hooks/useScrollStatus';
import CartItem from './CartItem';
import { CartModel } from '../../models/components.model';

import styles from './styles/cart.module.scss';

export default function Cart({ setShowCart, setShowPopup }: CartModel) {
	const { cart } = useCartContext();

	const scrollRef = useRef<HTMLDivElement>(null);

	const { hasScroll, isScrolled, isScrolledToBottom } = useScrollStatus({ scrollRef, cart });

	const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

	return (
		<div className={styles.cart}>
			<h3>Koszyk</h3>
			<div
				ref={scrollRef}
				className={`${styles['cart__middle-container']} ${
					cart.length === 0 && styles['cart__middle-container--special']
				} ${hasScroll && isScrolled ? styles['cart__middle-container-with-top-mask'] : ''} 
		${hasScroll && isScrolledToBottom ? styles['cart__middle-container-without-bottom-mask'] : ''}`}>
				{cart.length === 0 ? (
					<p className={styles['cart__special-message']}>Koszyk jest pusty!</p>
				) : (
					cart.map(({ id, name, price, quantity, image }) => (
						<CartItem key={id} id={id} name={name} quantity={quantity} price={price} image={image} />
					))
				)}
			</div>
			<div className={styles['cart__bottom-container']}>
				<p className={styles['cart__money-amount']}>
					<span>Suma:</span>
					<span>{total.toFixed(2)}zł</span>
				</p>
				<div className={styles['cart__btn-container']}>
					<button
						className={`${styles.cart__button} ${cart.length === 0 && styles['cart__button--disabled']}`}
						type='button'
						onClick={() => {
							setShowPopup(true);
						}}>
						Wypożycz
					</button>
					<button
						className={styles.cart__button}
						type='button'
						onClick={() => {
							setShowCart(false);
						}}>
						Zamknij
					</button>
				</div>
			</div>
		</div>
	);
}
