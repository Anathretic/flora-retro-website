import { useCartContext } from '@/shared/hooks/useCartContext';
import { CartItemModel } from '@/shared/models/context.model';

export default function CartItem({ id, name, quantity, price }: CartItemModel) {
	const { removeFromCart } = useCartContext();

	return (
		<div>
			<span>
				{name} x {quantity}
			</span>
			<span>{(price * quantity).toFixed(2)} zł</span>
			<button onClick={() => removeFromCart(id)}>Usuń</button>
		</div>
	);
}
