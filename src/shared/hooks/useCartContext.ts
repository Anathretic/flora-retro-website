import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export function useCartContext() {
	const cartContext = useContext(CartContext);

	if (!cartContext) {
		throw new Error('Błąd użycia useContext!');
	}

	const { addToCart, cart, clearCart, removeFromCart } = cartContext;

	return { addToCart, cart, clearCart, removeFromCart };
}
