'use client';

import { useState } from 'react';
import { useScrollBlock } from '@/shared/hooks/useScrollBlock';
import { useCountdownRedirect } from '../../hooks/useCountdownRedirect';
import RentalForm from '@/shared/ui/Forms/RentalForm';
import { CartPopupModel } from '../../models/components.model';

import styles from './styles/cartPopup.module.scss';

export default function CartPopup({ setShowPopup }: CartPopupModel) {
	const [showFinishMessage, setShowFinishMessage] = useState(false);

	const counter = useCountdownRedirect({ startCount: 5, redirectTo: '/', start: showFinishMessage });

	useScrollBlock(true);

	return (
		<div className={styles['cart-popup']}>
			<div className={styles['cart-popup__wrapper']}>
				<div className={styles['cart-popup__container']}>
					{showFinishMessage ? (
						<div className={styles['cart-popup__finish-message']}>
							<p>Udało się! Teraz tylko poczekaj na telefon lub wiadomość e-mail i dogadamy wszystkie szczegóły! :)</p>
							<span>Powrót na stronę główną nastąpi za {counter}s...</span>
						</div>
					) : (
						<>
							<p className={styles['cart-popup__title']}>Twoje dane</p>
							<RentalForm
								subject='Wypożyczalnia'
								setShowPopup={setShowPopup}
								setShowFinishMessage={setShowFinishMessage}
							/>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
