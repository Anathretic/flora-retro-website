import { useState } from 'react';
import { FiltersEmitModel, FiltersModel } from '../models/components.model';

export function useFilters({ setFilters }: FiltersModel) {
	const [search, setSearch] = useState('');
	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');
	const [onlyAvailable, setOnlyAvailable] = useState(false);

	const emit = (newFilters: Partial<FiltersEmitModel>) => {
		const parsedMin = minPrice === '' ? 0 : Number(minPrice);
		const parsedMax = maxPrice === '' ? 1000 : Number(maxPrice);

		setFilters({
			search,
			priceRange: [parsedMin, parsedMax],
			onlyAvailable,
			...newFilters,
		});
	};

	return { emit, search, setSearch, minPrice, setMinPrice, maxPrice, setMaxPrice, onlyAvailable, setOnlyAvailable };
}
