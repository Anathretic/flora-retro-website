import { useCartContext } from '@/shared/hooks/useCartContext';
import CartItem from './CartItem';
import { CartModel } from '../../models/components.model';

export default function Cart({ setProductsData }: CartModel) {
	const { cart, clearCart } = useCartContext();
	const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

	const handleRentItems = async () => {
		if (cart.length === 0) {
			alert('Koszyk jest pusty!');
			return;
		}

		try {
			for (const item of cart) {
				const response = await fetch('/api/rent', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ id: item.id, quantity: item.quantity }),
				});

				const data = await response.json();

				if (!response.ok) {
					alert(`Błąd przy produkcie ${item.name}: ${data.error}`);
					return;
				}
			}

			alert('Produkty wypożyczone pomyślnie!');
			clearCart();

			await fetch('/api/products')
				.then(res => res.json())
				.then(data => setProductsData(data));
		} catch (error) {
			console.error(error);
			alert('Błąd serwera. Spróbuj ponownie później.');
		}
	};

	return (
		<div>
			<h3>Koszyk</h3>
			{cart.length === 0 && <p>Koszyk jest pusty</p>}
			{cart.map(({ id, name, price, quantity }) => (
				<CartItem key={id} id={id} name={name} quantity={quantity} price={price} />
			))}
			<p>Suma: {total.toFixed(2)} zł</p>
			<button onClick={handleRentItems}>Wypożycz</button>
			<button onClick={clearCart}>Zamknij</button>
		</div>
	);
}
