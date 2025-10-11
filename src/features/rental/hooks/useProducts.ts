import { useEffect, useState } from 'react';
import { CartProductModel } from '@/shared/models/context.model';

export function useProducts() {
	const [productsData, setProductsData] = useState<CartProductModel[] | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await fetch('/api/products');
				if (!res.ok) throw new Error('Błąd pobierania danych');

				const data = await res.json();
				setProductsData(data);
				setTimeout(() => setIsLoading(false), 500);
			} catch (err) {
				setError(err as Error);
				setIsLoading(false);
			}
		};

		fetchProducts();
	}, []);

	return { productsData, isLoading, error };
}
