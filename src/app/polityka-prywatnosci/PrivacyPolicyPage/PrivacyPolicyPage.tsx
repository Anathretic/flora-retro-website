'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useFooterLinksContext } from '@/hooks/useFooterLinksContext';
import { Footer } from '@/components';
import { scrollToTop } from '@/utils/scrollToTopUtils';

import styles from './styles/styles.module.scss';

export default function PrivacyPolicyPage() {
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(false);
	}, []);

	return (
		<>
			<main>
				<section className={styles['terms-and-conditions']}>
					<div className={styles['terms-and-conditions__container']}>
						<h1 className={styles['terms-and-conditions__title']}>Polityka Prywatności i Warunki Użytkowania</h1>
						<div className={styles['terms-and-conditions__box']}>
							<h2>1. Informacje ogólne</h2>
							<p>
								Niniejsza Polityka Prywatności określa zasady zbierania, przetwarzania i ochrony danych osobowych
								użytkowników strony internetowej Flora Retro - Pracownia Dekoracji (dalej: Strona), dostępnej pod
								adresem: <Link href='/'>flora-retro.pl</Link>. Dbam o ochronę prywatności moich użytkowników i zapewniam
								najwyższy poziom bezpieczeństwa danych osobowych. Zbieranie danych osobowych odbywa się zgodnie z
								przepisami prawa, w szczególności z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia
								27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych
								(RODO).
							</p>
						</div>
						<div className={styles['terms-and-conditions__box']}>
							<h2>2. Administrator Danych Osobowych</h2>
							<p>Administratorem Twoich danych osobowych jest:</p>
							<ul>
								<li>
									<span>Flora Retro Dekoracje Ślubne Izabela Szczygieł</span>
								</li>
								<li>
									<span>Adres:</span> Wieś Wierzchowiny 19A, 22-400 Wierzchowiny
								</li>
								<li>
									<span>E-mail:</span> <a href='mailto:flora_retro@o2.pl'>flora_retro@o2.pl</a>
								</li>
								<li>
									<span>Telefon:</span> <a href='tel:+48789049376'>+48 789 049 376</a>
								</li>
								<li>
									<span>NIP:</span> 922-289-02-46
								</li>
								<li>
									<span>REGON:</span> 061685507
								</li>
							</ul>
						</div>
						<div className={styles['terms-and-conditions__box']}>
							<h2>3. Zakres zbieranych danych</h2>
							<p>
								Podczas korzystania z mojej strony internetowej, w tym formularzy kontaktowych, zbieram dane osobowe w
								następujących przypadkach:
							</p>
							<ul>
								<li>
									Formularz kontaktowy – Użytkownik podaje swoje imię, nr telefonu oraz adres e-mail w celu
									skontaktowania się z Firmą
								</li>
							</ul>
						</div>
						<div className={styles['terms-and-conditions__box']}>
							<h2>4. Cel przetwarzania danych</h2>
							<p>Dane osobowe zbierane przez Firmę są przetwarzane w następujących celach:</p>
							<ul>
								<li>Realizacja zapytań użytkownika poprzez formularz kontaktowy</li>
							</ul>
						</div>
						<div className={styles['terms-and-conditions__box']}>
							<h2>5. Podstawa prawna przetwarzania danych</h2>
							<p>Dane osobowe przetwarzane są na podstawie:</p>
							<ul>
								<li>
									Art. 6 ust. 1 lit. a RODO – zgoda osoby, której dane dotyczą (np. zgoda na kontakt w formularzach)
								</li>
								<li>Art. 6 ust. 1 lit. b RODO – przetwarzanie niezbędne do wykonania umowy</li>
								<li>
									Art. 6 ust. 1 lit. f RODO – uzasadniony interes administratora danych, jakim jest zapewnienie
									prawidłowego funkcjonowania strony internetowej
								</li>
								<li>Google LLC (w zakresie ochrony formularzy przez Google reCAPTCHA v2)</li>
							</ul>
						</div>
						<div className={styles['terms-and-conditions__box']}>
							<h2>6. Przechowywanie danych</h2>
							<p>
								Twoje dane osobowe będą przechowywane przez okres niezbędny do realizacji celów, w jakich zostały
								zebrane do momentu wycofania zgody na przetwarzanie danych, jeśli taką zgodę wyraziłeś/aś.
							</p>
						</div>
						<div className={styles['terms-and-conditions__box']}>
							<h2>7. Przekazywanie danych</h2>
							<p>Twoje dane osobowe mogą być przekazywane następującym podmiotom:</p>
							<ul className={styles['terms-and-conditions__cookie-box-ul']}>
								<li>
									Firmom świadczącym usługi IT, w tym hostingowe, na rzecz Firmy, które pomagają w utrzymaniu strony
									internetowej
								</li>
								<li>Podmiotom upoważnionym do uzyskania danych na podstawie przepisów prawa</li>
							</ul>
						</div>
						<div className={styles['terms-and-conditions__box']}>
							<h2>8. Google reCAPTCHA</h2>
							<p>
								Na mojej stronie internetowej korzystamy z usługi Google reCAPTCHA, której celem jest ochrona formularzy
								przed automatycznym wypełnianiem przez boty. Google reCAPTCHA zbiera dane dotyczące urządzenia
								użytkownika, takie jak adres IP, dane o przeglądarce, a także inne dane techniczne niezbędne do
								weryfikacji. Przetwarzanie tych danych odbywa się zgodnie z polityką prywatności Google, dostępną pod
								adresem:{' '}
								<a
									href='https://cloud.google.com/security/products/recaptcha'
									target='_blank'
									rel='noopener noreferrer'>
									cloud.google.com/security/products/recaptcha
								</a>
							</p>
						</div>
						<div className={styles['terms-and-conditions__box']}>
							<h2>9. Twoje prawa</h2>
							<p>Zgodnie z przepisami RODO, przysługuje Ci szereg praw dotyczących Twoich danych osobowych, w tym:</p>
							<ul className='terms-and-conditions__special-ul'>
								<li>Prawo dostępu do swoich danych</li>
								<li>Prawo do sprostowania swoich danych</li>
								<li>Prawo do usunięcia danych (tzw. prawo do bycia zapomnianym)</li>
								<li>Prawo do ograniczenia przetwarzania danych</li>
								<li>Prawo do przenoszenia danych</li>
								<li>Prawo do sprzeciwu wobec przetwarzania danych</li>
							</ul>
							<p>
								Aby skorzystać ze swoich praw, skontaktuj się ze mną pod adresem e-mail:{' '}
								<a href='mailto:flora_retro@o2.pl'>flora_retro@o2.pl</a>
							</p>
						</div>
						<div className={styles['terms-and-conditions__box']}>
							<h2>10. Bezpieczeństwo danych</h2>
							<p>
								Dokładam wszelkich starań, aby chronić Twoje dane osobowe przed dostępem osób nieupoważnionych, ich
								utratą, zniszczeniem lub uszkodzeniem. Stosuję odpowiednie środki techniczne i organizacyjne w celu
								zapewnienia bezpieczeństwa przetwarzanych danych.
							</p>
						</div>
						<div className={styles['terms-and-conditions__box']}>
							<h2>11. Zmiany w Polityce Prywatności</h2>
							<p>
								Niniejsza polityka prywatności może ulec zmianie. W przypadku istotnych zmian w sposobie przetwarzania
								Twoich danych osobowych, poinformuję Cię o tym poprzez zamieszczenie odpowiedniej informacji na mojej
								stronie internetowej. Zmiany wchodzą w życie w momencie ich opublikowania na stronie.
							</p>
						</div>
						<div className={styles['terms-and-conditions__box']}>
							<p>Wsparcie merytoryczne, kodowanie oraz wykonanie:</p>
							<a href='https://www.linkedin.com/in/konrad-wojtylo' target='_blank' rel='noreferrer'>
								Konrad Wojtyło
							</a>
						</div>
						<Link
							href='/'
							className={styles['terms-and-conditions__btn']}
							aria-label='Powrót na stronę główną'
							onClick={scrollToTop}>
							Powrót
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
