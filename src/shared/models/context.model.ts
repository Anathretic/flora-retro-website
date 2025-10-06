import { ReactNode } from 'react';

export type ProvidersModel = {
	children: ReactNode;
};

export interface CartProductModel {
	id: number;
	name: string;
	price: number;
	stock?: number;
	image?: string;
}

export interface CartItemModel extends CartProductModel {
	quantity: number;
}

export interface CartContextModel {
	cart: CartItemModel[];
	addToCart: (product: CartProductModel, quantity?: number) => void;
	removeFromCart: (id: number) => void;
	clearCart: () => void;
}
