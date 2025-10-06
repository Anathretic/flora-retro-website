import { createContext, useState } from 'react';
import { CartContextModel, CartItemModel, CartProductModel, ProvidersModel } from '@/shared/models/context.model';

export const CartContext = createContext<CartContextModel | null>(null);

export function CartProvider({ children }: ProvidersModel) {
	const [cart, setCart] = useState<CartItemModel[]>([]);

	const addToCart = (product: CartProductModel, quantity = 1) => {
		setCart(prev => {
			const existing = prev.find(item => item.id === product.id);
			if (existing) {
				return prev.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
			}
			return [...prev, { ...product, quantity }];
		});
	};

	const removeFromCart = (id: number) => {
		setCart(prev => prev.filter(item => item.id !== id));
	};

	const clearCart = () => setCart([]);

	const contextValue = {
		cart,
		addToCart,
		removeFromCart,
		clearCart,
	};

	return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

export default CartProvider;
