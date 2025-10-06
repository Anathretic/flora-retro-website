import Link from 'next/link';
import ContactForm from '@/shared/ui/Forms/ContactForm';
import { scrollToTop } from '@/shared/utils/scrollToTopUtils';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaBriefcase, FaRegBuilding } from 'react-icons/fa';

import styles from '../styles/styles.module.scss';

export default function BalloonWallsForm() {
	return (
		<section className={styles['balloon-walls__form']} id='rezerwacja'>
			<div className={styles['balloon-walls__form-container']}>
				<div className={styles['balloon-walls__form-title-box']}>
					<h2 className={styles['balloon-walls__form-title']}>Zaczynamy?</h2>
					<p className={styles['balloon-walls__form-title-subtext']}>
						Marzysz o własnej ściance do zdjęć? Jesteś we właściwym miejscu! Jeśli masz pytanie, chcesz omówić szczegóły
						lub po prostu dowiedzieć się więcej, skorzystaj z formularza kontaktowego albo zadzwoń – z przyjemnością
						odpowiem na wszystkie pytania i pomogę Ci stworzyć wyjątkową oprawę!
					</p>
					<p className={styles['balloon-walls__form-title-subtext']}>
						<span>Pamiętaj!</span> Wysyłając formularz wyrażasz zgodę na przetwarzanie Twoich danych zgodnie z
						obowiązującą{' '}
						<Link href='/polityka-prywatnosci' onClick={scrollToTop}>
							polityką prywatności.
						</Link>
					</p>
					<ul className={styles['balloon-walls__form-title-info-box']}>
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
				<ContactForm subject='Ścianki balonowe' />
			</div>
		</section>
	);
}
