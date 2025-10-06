import { useCartContext } from './useCartContext';

export function useRentItems() {
	const { cart, clearCart } = useCartContext();

	const handleRentItems = async () => {
		for (const item of cart) {
			const response = await fetch('/api/rent', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ id: item.id, quantity: item.quantity }),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(`Błąd przy produkcie ${item.name}: ${data.error}`);
			}
		}

		clearCart();
	};

	return { handleRentItems, cart };
}
