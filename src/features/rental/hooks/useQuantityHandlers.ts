import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { UseQuantityHandlersModel } from '../models/hooks.model';

export function useQuantityHandlers({ product, addToCart }: UseQuantityHandlersModel) {
	const [quantity, setQuantity] = useState('1');

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

	return { handleOnChange, handleOnBlur, handleOnKeyDown, handleOnClick, quantity };
}
