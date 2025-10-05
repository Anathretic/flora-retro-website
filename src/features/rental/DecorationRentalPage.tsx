'use client';

import { useEffect, useState } from 'react';
import { useFooterLinksContext } from '@/shared/hooks/useFooterLinksContext';
import Filters from './components/Filters/Filters';
import Header from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader';
import ProductList from './components/Products/ProductList';
import Cart from './components/Cart/Cart';
import Footer from '@/shared/ui/Footer/Footer';
import { FiltersEmitModel } from './models/components.model';
import { CartProductModel } from '@/shared/models/context.model';

import styles from './styles/styles.module.scss';
import '../../shared/styles/globals.scss';

export default function DecorationRentalPage() {
	const [productsData, setProductsData] = useState<CartProductModel[] | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [showCart, setShowCart] = useState(false);
	const [filters, setFilters] = useState<FiltersEmitModel>({
		search: '',
		priceRange: [0, 1000],
		onlyAvailable: false,
	});

	const { setShowSpecialLinks } = useFooterLinksContext();

	const fetchProducts = async () => {
		try {
			const res = await fetch('/api/products');
			if (!res.ok) {
				throw new Error('Błąd pobierania danych');
			}
			const data = await res.json();
			setProductsData(data);
			setTimeout(() => {
				setIsLoading(false);
			}, 500);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	useEffect(() => {
		setShowSpecialLinks(false);
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
							<h2>Produkty</h2>
							<div className={styles['decorations-rental__content-container']}>
								<Filters setFilters={setFilters} />
								{isLoading && <Loader />}
								{!isLoading && productsData && <ProductList products={productsData} filters={filters} />}
								{!isLoading && productsData && productsData.length === 0 && (
									<p className={styles['decorations-rental__special-msg']}>
										Brak dostępnych produktów. Pracujemy nad tym! :)
									</p>
								)}
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
