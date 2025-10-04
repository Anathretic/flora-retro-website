'use client';

import { useEffect, useState } from 'react';
import Filters from './components/Filters/Filters';
import Header from './components/Navbar/Navbar';
import ProductList from './components/Products/ProductList';
import Cart from './components/Cart/Cart';
import Footer from '@/shared/ui/Footer/Footer';
import { FiltersEmitModel } from './models/components.model';
import { CartProductModel } from '@/shared/models/context.model';

import styles from './styles/styles.module.scss';
import '../../shared/styles/globals.scss';

export default function DecorationRentalPage() {
	const [productsData, setProductsData] = useState<CartProductModel[] | null>(null);
	const [showCart, setShowCart] = useState(false);
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
		<>
			<Header setShowCart={setShowCart} />
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
							{showCart && <Cart setProductsData={setProductsData} setShowCart={setShowCart} />}
						</section>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
