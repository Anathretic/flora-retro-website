'use client';

import { useState } from 'react';
import { FiltersEmitModel, FiltersModel } from '../../models/components.model';

export default function Filters({ setFilters }: FiltersModel) {
	const [search, setSearch] = useState('');
	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');
	const [onlyAvailable, setOnlyAvailable] = useState(false);

	const emit = (newFilters: Partial<FiltersEmitModel>) => {
		setFilters({
			search,
			priceRange: [minPrice === '' ? 0 : Number(minPrice), maxPrice === '' ? 1000 : Number(maxPrice)],
			onlyAvailable,
			...newFilters,
		});
	};

	return (
		<div>
			<h4>Filtry</h4>
			<input
				type='text'
				placeholder='Wyszukaj po nazwie'
				value={search}
				onChange={e => {
					setSearch(e.target.value);
					emit({ search: e.target.value });
				}}
			/>
			<div>
				<input
					type='number'
					value={minPrice}
					min={0}
					max={1000}
					placeholder='od'
					onChange={e => {
						setMinPrice(e.target.value);
						emit({
							priceRange: [
								e.target.value === '' ? 0 : Number(e.target.value),
								maxPrice === '' ? 1000 : Number(maxPrice),
							],
						});
					}}
				/>
				-
				<input
					type='number'
					value={maxPrice}
					min={0}
					max={1000}
					placeholder='do'
					onChange={e => {
						setMaxPrice(e.target.value);
						emit({
							priceRange: [
								minPrice === '' ? 0 : Number(minPrice),
								e.target.value === '' ? 1000 : Number(e.target.value),
							],
						});
					}}
				/>
			</div>
			<label>
				<input
					type='checkbox'
					checked={onlyAvailable}
					onChange={e => {
						setOnlyAvailable(e.target.checked);
						emit({ onlyAvailable: e.target.checked });
					}}
				/>
				Tylko dostępne
			</label>
		</div>
	);
}
