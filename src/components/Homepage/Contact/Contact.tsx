import Link from 'next/link';
import ContactForm from '@/components/Forms/ContactForm';

import styles from './styles/styles.module.scss';

export default function ContactSection() {
	return (
		<section className={styles.contact} id='kontakt'>
			<div className={styles.contact__container}>
				<div className={styles['contact__title-box']}>
					<h2 className={styles.contact__title}>Kontakt</h2>
					<p className={styles['contact__title-subtext']}>
						Gotowy na dekorację jak ze snu? Świetnie! Ale jeśli Twoją głowę męczy jakieś pytanie skorzystaj z formularza
						kontaktowego lub zadzwoń na poniższy numer!
					</p>
					<p className={styles['contact__title-subtext']}>
						<span>Pamiętaj!</span> Wysyłając formularz wyrażasz zgodę na przetwarzanie Twoich danych zgodnie z
						obowiązującą <Link href='/polityka-prywatnosci'>polityką prywatności.</Link>
					</p>
					<ul className={styles['contact__title-info-box']}>
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
