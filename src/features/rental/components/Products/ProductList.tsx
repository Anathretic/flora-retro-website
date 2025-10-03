import ProductCard from './ProductCard';
import { ProductListModel } from '../../models/components.model';

export default function ProductList({ products, filters }: ProductListModel) {
	const filtered = products.filter(product => {
		const matchesName = product.name.toLowerCase().includes(filters.search.toLowerCase());
		const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
		const matchesAvailability = filters.onlyAvailable ? (product.stock ?? 0) > 0 : true;
		return matchesName && matchesPrice && matchesAvailability;
	});

	if (filtered.length === 0) return <p>Brak wyników dla wybranych filtrów.</p>;

	return (
		<div>
			{filtered.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}
