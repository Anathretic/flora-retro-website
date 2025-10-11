'use client';

import { useFilters } from '../../hooks/useFilters';
import { FiltersModel } from '../../models/components.model';
import { FaSearch } from 'react-icons/fa';

import styles from './styles/styles.module.scss';

export default function Filters({ setFilters }: FiltersModel) {
	const { emit, minPrice, setMinPrice, maxPrice, setMaxPrice, onlyAvailable, setOnlyAvailable, search, setSearch } =
		useFilters({ setFilters });

	return (
		<div className={styles.filters}>
			<label className={styles['filters__search']}>
				<FaSearch />
				<input
					type='text'
					placeholder='Podaj nazwę artykułu'
					value={search}
					onChange={e => {
						setSearch(e.target.value);
						emit({ search: e.target.value });
					}}
				/>
			</label>
			<span className={styles['filters__special-decoration']}>|</span>
			<div className={styles['filters__price']}>
				Cena:{' '}
				<div>
					<input
						type='text'
						inputMode='numeric'
						pattern='[0-9]*'
						value={minPrice}
						placeholder='od'
						onChange={e => {
							const v = e.target.value;
							if (/^\d*$/.test(v)) {
								setMinPrice(v);
								emit({
									priceRange: [v === '' ? 0 : Number(v), maxPrice === '' ? 1000 : Number(maxPrice)],
								});
							}
						}}
					/>
					<span>-</span>
					<input
						type='text'
						inputMode='numeric'
						pattern='[0-9]*'
						value={maxPrice}
						placeholder='do'
						onChange={e => {
							const v = e.target.value;
							if (/^\d*$/.test(v)) {
								setMaxPrice(v);
								emit({
									priceRange: [minPrice === '' ? 0 : Number(minPrice), v === '' ? 1000 : Number(v)],
								});
							}
						}}
					/>
				</div>
			</div>
			<span className={styles['filters__special-decoration']}>|</span>
			<label className={styles['filters__checkbox']}>
				Tylko dostępne:
				<input
					type='checkbox'
					checked={onlyAvailable}
					onChange={e => {
						setOnlyAvailable(e.target.checked);
						emit({ onlyAvailable: e.target.checked });
					}}
				/>
			</label>
		</div>
	);
}
