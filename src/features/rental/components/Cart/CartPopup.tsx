'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useScrollBlock } from '@/shared/hooks/useScrollBlock';
import RentalForm from '@/shared/ui/Forms/RentalForm';
import { CartPopupModel } from '../../models/components.model';

import styles from './styles/cartPopup.module.scss';

export default function CartPopup({ setShowPopup }: CartPopupModel) {
	const [showFinishMessage, setShowFinishMessage] = useState(false);
	const [counter, setCounter] = useState(5);

	const router = useRouter();

	useScrollBlock(true);

	useEffect(() => {
		if (!showFinishMessage) return;

		const interval = setInterval(() => {
			setCounter(prev => {
				if (prev <= 1) {
					clearInterval(interval);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, [showFinishMessage]);

	useEffect(() => {
		if (showFinishMessage && counter === 0) {
			router.push('/');
		}
	}, [counter, showFinishMessage, router]);

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
