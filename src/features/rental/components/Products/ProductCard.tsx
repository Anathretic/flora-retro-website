import { useCartContext } from '@/shared/hooks/useCartContext';
import { useQuantityHandlers } from '../../hooks/useQuantityHandlers';
import { ProductCardModel } from '../../models/components.model';

import styles from './styles/styles.module.scss';

export default function ProductCard({ product }: ProductCardModel) {
	const { addToCart } = useCartContext();
	const { handleOnChange, handleOnBlur, handleOnKeyDown, handleOnClick, quantity } = useQuantityHandlers({
		product,
		addToCart,
	});

	return (
		<div className={styles['product-list__item']}>
			<img src={product.image} alt={product.name} />
			<h3>{product.name}</h3>
			<p className={styles['product-list__item-quantity']}>
				Ilość:{' '}
				<input
					type='text'
					value={quantity}
					min={1}
					max={product.stock}
					onChange={handleOnChange}
					onBlur={handleOnBlur}
					onKeyDown={handleOnKeyDown}
				/>{' '}
				/ <span>{product.stock}</span>
			</p>
			<p className={styles['product-list__item-price']}>{product.price.toFixed(2)}zł</p>
			<button onClick={handleOnClick}>Dodaj</button>
		</div>
	);
}
