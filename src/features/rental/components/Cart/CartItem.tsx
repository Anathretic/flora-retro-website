import { useCartContext } from '@/shared/hooks/useCartContext';
import { CartItemModel } from '@/shared/models/context.model';

import styles from './styles/cart.module.scss';

export default function CartItem({ id, name, quantity, price, image }: CartItemModel) {
	const { removeFromCart } = useCartContext();

	return (
		<div className={styles.cart__item}>
			<img src={image} alt={name} />
			<div className={styles['cart__item-container']}>
				<span className={styles['cart__item-container-special-span']}>{name}</span>
				<span>Ilość: {quantity}</span>
				<span>{(price * quantity).toFixed(2)} zł</span>
				<button type='button' onClick={() => removeFromCart(id)}>
					Usuń
				</button>
			</div>
		</div>
	);
}
