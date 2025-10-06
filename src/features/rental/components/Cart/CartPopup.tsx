'use client';

import { useCartContext } from '@/shared/hooks/useCartContext';
import { useScrollBlock } from '@/shared/hooks/useScrollBlock';
import RentalForm from '@/shared/ui/Forms/RentalForm';
import { CartPopupModel } from '../../models/components.model';

import styles from './styles/cartPopup.module.scss';

export default function CartPopup({ setShowPopup, setProductsData }: CartPopupModel) {
	const { cart, clearCart } = useCartContext();

	useScrollBlock(true);

	const handleRentItems = async () => {
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
		<div className={styles['cart-popup']}>
			<div className={styles['cart-popup__wrapper']}>
				<div className={styles['cart-popup__container']}>
					<p className={styles['cart-popup__title']}>Twoje dane</p>
					<RentalForm subject='Wypożyczalnia' setShowPopup={setShowPopup} />
				</div>
			</div>
		</div>
	);
}
