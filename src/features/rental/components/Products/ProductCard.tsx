import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useCartContext } from '@/shared/hooks/useCartContext';
import { ProductCardModel } from '../../models/components.model';

import styles from './styles/styles.module.scss';

export default function ProductCard({ product }: ProductCardModel) {
	const [quantity, setQuantity] = useState('1');

	const { addToCart } = useCartContext();

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;

		if (val === '' || /^\d*$/.test(val)) {
			setQuantity(val);
		}
	};

	const handleOnBlur = () => {
		let num = parseInt(quantity, 10);

		if (!product.stock) return;

		if (isNaN(num) || num < 1) num = 1;
		else if (num > product.stock) num = product.stock;

		setQuantity(num.toString());
	};

	const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
		if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
			e.preventDefault();
		}
	};

	const handleOnClick = () => {
		addToCart(product, parseInt(quantity, 10) || 1);
		setQuantity('1');
	};

	return (
		<div className={styles['product-list__item']}>
			<img src={product.image} alt={product.name} />
			<h3>{product.name}</h3>
			<p className={styles['product-list__item-quantity']}>
				Ilość:{' '}
				<input
					type='text'
					value={quantity}
					min={1}
					max={product.stock}
					onChange={handleOnChange}
					onBlur={handleOnBlur}
					onKeyDown={handleOnKeyDown}
				/>{' '}
				/ <span>{product.stock}</span>
			</p>
			<p className={styles['product-list__item-price']}>{product.price.toFixed(2)}zł</p>
			<button onClick={handleOnClick}>Dodaj</button>
		</div>
	);
}
