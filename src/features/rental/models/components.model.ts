import { Dispatch, SetStateAction } from 'react';
import { CartProductModel } from '@/shared/models/context.model';

export interface HeaderModel {
	setShowCart: Dispatch<SetStateAction<boolean>>;
}

export interface CartModel extends HeaderModel {
	setShowPopup: Dispatch<SetStateAction<boolean>>;
}

export type CartPopupModel = {
	setShowPopup: Dispatch<SetStateAction<boolean>>;
};
export type FiltersEmitModel = {
	search: string;
	priceRange: [number, number];
	onlyAvailable: boolean;
};

export type FiltersModel = {
	setFilters: (filters: FiltersEmitModel) => void;
};

export type ProductCardModel = {
	product: CartProductModel;
};

export type ProductListModel = {
	products: CartProductModel[];
	filters: FiltersEmitModel;
};
