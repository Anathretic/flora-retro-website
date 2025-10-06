import ProductCard from './ProductCard';
import { ProductListModel } from '../../models/components.model';

import styles from './styles/styles.module.scss';

export default function ProductList({ products, filters }: ProductListModel) {
	const filtered = products.filter(product => {
		const matchesName = product.name.toLowerCase().includes(filters.search.toLowerCase());
		const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
		const matchesAvailability = filters.onlyAvailable ? (product.stock ?? 0) > 0 : true;
		return matchesName && matchesPrice && matchesAvailability;
	});

	if (products.length === 0) return;

	return (
		<div className={styles['product-list']}>
			{filtered.length === 0 ? (
				<p className={styles['product-list__msg']}>Brak wyników dla wybranych filtrów.</p>
			) : (
				filtered.map(product => <ProductCard key={product.id} product={product} />)
			)}
		</div>
	);
}
