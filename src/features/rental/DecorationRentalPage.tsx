'use client';

import { useEffect, useState } from 'react';
import Filters from './components/Filters/Filters';
import ProductList from './components/Products/ProductList';
import Cart from './components/Cart/Cart';
import { FiltersEmitModel } from './models/components.model';
import { CartProductModel } from '@/shared/models/context.model';

import styles from './styles/styles.module.scss';
import '../../shared/styles/globals.scss';

export default function DecorationRentalPage() {
	const [productsData, setProductsData] = useState<CartProductModel[] | null>(null);
	const [filters, setFilters] = useState<FiltersEmitModel>({
		search: '',
		priceRange: [0, 1000],
		onlyAvailable: false,
	});

	useEffect(() => {
		fetch('/api/products')
			.then(res => res.json())
			.then(data => setProductsData(data));
	}, []);

	return (
		<main className='special-main'>
			<div className={styles['decorations-rental__container']}>
				<div className={styles['decorations-rental__wrapper']}>
					<div className={styles['decorations-rental__hero-image']}>
						<h1 className={styles['decorations-rental__hero-image-title']}>Wypożyczalnia</h1>
					</div>
					<section className={styles['decorations-rental__content']}>
						<div className={styles['decorations-rental__filters']}>
							<Filters setFilters={setFilters} />
						</div>
						<div className={styles['decorations-rental__products']}>
							{productsData && <ProductList products={productsData} filters={filters} />}
						</div>
						<div className={styles['decorations-rental__cart']}>
							<Cart setProductsData={setProductsData} />
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}
