import { useState } from 'react';
import { useCartContext } from '@/shared/hooks/useCartContext';
import { ProductCardModel } from '../../models/components.model';

export default function ProductCard({ product }: ProductCardModel) {
	const [qauntity, setQuantity] = useState(1);

	const { addToCart } = useCartContext();

	return (
		<div>
			<img src={product.image} alt={product.name} />
			<h3>{product.name}</h3>
			<p>
				Ilość:{' '}
				<input
					type='number'
					value={qauntity}
					min={1}
					max={product.stock}
					onChange={e => setQuantity(Number(e.target.value))}
				/>
			</p>
			<p>{product.price.toFixed(2)} zł</p>
			<button onClick={() => addToCart(product, qauntity)}>Dodaj</button>
		</div>
	);
}
