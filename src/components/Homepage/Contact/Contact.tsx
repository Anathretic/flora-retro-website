import Link from 'next/link';
import ContactForm from '@/components/Forms/ContactForm';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaBriefcase, FaRegBuilding } from 'react-icons/fa';

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
								<p>922-289-02-46</p>
							</div>
						</li>
					</ul>
				</div>
				<ContactForm subject='Kontakt' />
			</div>
		</section>
	);
}
