import { SiMercedes } from 'react-icons/si';
import { PiCrown } from 'react-icons/pi';
import { FaCameraRetro } from 'react-icons/fa';
import { GiSofa } from 'react-icons/gi';

import styles from '../styles/styles.module.scss';

export default function RentCarBenefits() {
	return (
		<section className={styles['rent-car__benefits']} id='informacje'>
			<h2 className={`${styles['rent-car__title']} ${styles['rent-car__title--benefits']}`}>Mercedes</h2>
			<div className={styles['rent-car__benefits-text-content']}>
				<div className={styles['rent-car__benefits-text-content-box']}>
					<SiMercedes fontSize={56} color='#6b4d45' />
					<h3>Dlaczego gwiazda?</h3>
					<p>
						Mercedes W108 z 1969 roku to coś więcej niż samochód – to klasa sama w sobie.{' '}
						<span>Stylowy, ponadczasowy i pełen charakteru.</span> Jego obecność na Twoim ślubie czy sesji zdjęciowej
						wniesie nutę elegancji, nostalgii i filmowego klimatu. <span>Oto Twoja gwiazda!</span>
					</p>
				</div>
				<div className={styles['rent-car__benefits-special-decoration']} />
				<div className={styles['rent-car__benefits-text-content-box']}>
					<PiCrown fontSize={56} color='#6b4d45' />
					<h3>Ponadczasowa elegancja</h3>
					<p>
						Klasyczne linie nadwozia, chromowane detale i luksusowe wnętrze tworzą atmosferę, która nigdy nie wychodzi z
						mody.{' '}
						<span>
							Mercedes W108 to samochód z duszą – symbol dobrego stylu, który idealnie wpisuje się w estetykę retro,
							boho czy glamour.
						</span>
					</p>
				</div>
				<div className={styles['rent-car__benefits-special-decoration']} />
				<div className={styles['rent-car__benefits-text-content-box']}>
					<FaCameraRetro fontSize={56} color='#6b4d45' />
					<h3>Efekt „wow” na zdjęciach</h3>
					<p>
						Auto robi niesamowite wrażenie – zarówno na żywo, jak i na zdjęciach. Idealne jako tło sesji ślubnej,
						dodatek do pleneru czy centralny punkt przejazdu.{' '}
						<span>Wnosi wyjątkowy klimat i sprawia, że każda chwila wygląda jak kadr z filmu.</span>
					</p>
				</div>
				<div className={styles['rent-car__benefits-special-decoration']} />
				<div className={styles['rent-car__benefits-text-content-box']}>
					<GiSofa fontSize={56} color='#6b4d45' />
					<h3>Komfort i klasa z innej epoki</h3>
					<p>
						Choć ma już swoje lata, Mercedes ten wciąż oferuje niezrównany komfort podróży.{' '}
						<span>Miękkie fotele, przestronne wnętrze i stylowy szofer sprawiają,</span> że każda przejażdżka staje się
						częścią niezapomnianego doświadczenia.
					</p>
				</div>
			</div>
			<div
				className={`${styles['rent-car__benefits-special-block']} ${styles['rent-car__benefits-special-block--left']}`}
			/>
			<div
				className={`${styles['rent-car__benefits-special-block']} ${styles['rent-car__benefits-special-block--right']}`}
			/>
		</section>
	);
}
