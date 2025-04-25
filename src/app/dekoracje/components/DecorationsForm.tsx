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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptates numquam eos eaque, eligendi
						quod dolores facere qui odio necessitatibus, rerum blanditiis! Pariatur est dicta quasi odit a deserunt!
						Temporibus, reprehenderit tempore!
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
							<p>Lorem, ipsum:</p>
							<p className={styles['decorations__form-special-text']}>
								Lorem ipsum dolor sit amet sit amet.{' '}
								<span>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dignissimos laudantium! Accusamus,
									natus illo.
								</span>{' '}
								Lorem ipsum dolor sit.
							</p>
						</li>
						<li>
							<p>Lorem, ipsum:</p>
							<p>
								- Lorem, ipsum dolor -{' '}
								<span>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								</span>
							</p>
						</li>
					</ul>
				</div>
				<ContactForm />
			</div>
		</section>
	);
}
