import Link from 'next/link';
import ContactForm from '@/shared/ui/Forms/ContactForm';
import { scrollToTop } from '@/shared/utils/scrollToTopUtils';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaBriefcase, FaRegBuilding } from 'react-icons/fa';

import styles from '../styles/styles.module.scss';

export default function CarHireForm() {
	return (
		<section className={styles['rent-car__form']} id='rezerwacja'>
			<div className={styles['rent-car__form-container']}>
				<div className={styles['rent-car__form-title-box']}>
					<h2 className={styles['rent-car__form-title']}>Jedziemy?</h2>
					<p id='formularz' className={styles['rent-car__form-title-subtext']}>
						Zachwycił Cię ten klasyk? Cudownie, niech stanie się częścią Twojego wyjątkowego dnia! Jeśli masz pytania
						dotyczące wynajmu, dostępności lub chcesz omówić szczegóły przejazdu, wypełnij formularz lub zadzwoń.
						Chętnie odpowiem na każde pytanie :)
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
							<div>
								<FiMail />
							</div>
							<div>
								<p>E-mail:</p>
								<a href='mailto:flora_retro@o2.pl'>flora_retro@o2.pl</a>
							</div>
						</li>
						<li>
							<div>
								<FiPhone />
							</div>
							<div>
								<p>Telefon:</p>
								<a href='tel:+48789049376'>+48 789 049 376</a>
							</div>
						</li>
						<li>
							<div>
								<FaRegBuilding />
							</div>
							<div>
								<p>Biuro:</p>
								<p>ul. Wieś Wierzchowiny 19A</p>
								<p>22-400 Wierzchowiny</p>
							</div>
						</li>
						<li>
							<div>
								<FaBriefcase />
							</div>
							<div>
								<p>NIP:</p>
								<p>9222890246</p>
							</div>
						</li>
					</ul>
				</div>
				<ContactForm subject='Wynajem samochodu' />
			</div>
		</section>
	);
}
