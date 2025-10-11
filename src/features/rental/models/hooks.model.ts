import { CartItemModel, CartProductModel } from '@/shared/models/context.model';
import { RefObject } from 'react';

export type UseQuantityHandlersModel = {
	product: CartProductModel;
	addToCart: (product: CartProductModel, quantity?: number) => void;
};

export type UseScrollStatusModel = {
	scrollRef: RefObject<HTMLDivElement | null>;
	cart: CartItemModel[];
};

export type useCountdownRedirectModel = {
	startCount: number;
	redirectTo: string;
	start: boolean;
};
