import { Dispatch, SetStateAction } from 'react';
import { CartProductModel } from '@/shared/models/context.model';

export interface HeaderModel {
	setShowCart: Dispatch<SetStateAction<boolean>>;
}

export interface CartModel extends HeaderModel {
	setProductsData: Dispatch<SetStateAction<CartProductModel[] | null>>;
}
export interface FiltersEmitModel {
	search: string;
	priceRange: [number, number];
	onlyAvailable: boolean;
}

export interface FiltersModel {
	setFilters: (filters: FiltersEmitModel) => void;
}

export interface ProductCardModel {
	product: CartProductModel;
}

export interface ProductListModel {
	products: CartProductModel[];
	filters: FiltersEmitModel;
}
