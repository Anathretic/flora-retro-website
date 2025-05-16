import Link from 'next/link';
import ContactForm from '@/components/Forms/ContactForm';
import { scrollToTop } from '@/utils/scrollToTopUtils';

import styles from '../styles/styles.module.scss';

export default function RentCarForm() {
	return (
		<section className={styles['rent-car__form']}>
			<div className={styles['rent-car__form-container']}>
				<div className={styles['rent-car__form-title-box']}>
					<h2 className={styles['rent-car__form-title']}>Zaczynamy?</h2>
					<p id='formularz' className={styles['rent-car__form-title-subtext']}>
						<span>Zachwycił Cię ten klasyk?</span> Cudownie, niech stanie się częścią Twojego wyjątkowego dnia! Jeśli
						masz pytania dotyczące wynajmu, dostępności lub chcesz omówić szczegóły przejazdu, wypełnij formularz lub
						zadzwoń. Chętnie odpowiem i pomogę spełnić marzenie :)
					</p>
					<p className={styles['rent-car__form-title-subtext']}>
						<span>Pamiętaj!</span> Wysyłając formularz wyrażasz zgodę na przetwarzanie Twoich danych zgodnie z
						obowiązującą{' '}
						<Link href='/polityka-prywatnosci' onClick={scrollToTop}>
							polityką prywatności.
						</Link>
					</p>
					<ul className={styles['rent-car__form-title-info-box']}>
						<li>
							<p>E-mail:</p>
							<p>flora_retro@o2.pl</p>
						</li>
						<li>
							<p>Telefon:</p>
							<p>+48 789 049 376</p>
						</li>
						<li>
							<p>NIP:</p>
							<p>922-289-02-46</p>
						</li>
					</ul>
				</div>
				<ContactForm />
			</div>
		</section>
	);
}
