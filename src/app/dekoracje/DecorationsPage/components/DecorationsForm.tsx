import Link from 'next/link';
import ContactForm from '@/components/Forms/ContactForm';
import { scrollToTop } from '@/utils/scrollToTopUtils';

import styles from '../styles/styles.module.scss';

export default function DecorationsForm() {
	return (
		<section className={styles.decorations__form}>
			<div className={styles['decorations__form-container']}>
				<div className={styles['decorations__form-title-box']}>
					<h2 className={styles['decorations__form-title']}>Zaczynamy?</h2>
					<p className={styles['decorations__form-title-subtext']}>
						Marzysz o dekoracji jak z bajki? Jesteś we właściwym miejscu! Jeśli masz pytanie, chcesz omówić szczegóły
						lub po prostu dowiedzieć się więcej, skorzystaj z formularza kontaktowego albo zadzwoń – z przyjemnością
						odpowiem na wszystkie pytania i pomogę Ci stworzyć wyjątkową oprawę Twojego dnia.
					</p>
					<p className={styles['decorations__form-title-subtext']}>
						<span>Pamiętaj!</span> Wysyłając formularz wyrażasz zgodę na przetwarzanie Twoich danych zgodnie z
						obowiązującą{' '}
						<Link href='/polityka-prywatnosci' onClick={scrollToTop}>
							polityką prywatności.
						</Link>
					</p>
					<ul className={styles['decorations__form-title-info-box']}>
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
				<ContactForm subject='Dekoracje' />
			</div>
		</section>
	);
}
