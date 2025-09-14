import styles from '../styles/styles.module.scss';

export default function CarHireBenefits() {
	return (
		<section className={styles['rent-car__benefits']} id='informacje'>
			<h2 className={`${styles['rent-car__title']} ${styles['rent-car__title--benefits']}`}>Mercedes W108</h2>
			<div className={styles['rent-car__benefits-text-content']}>
				<div className={styles['rent-car__benefits-text-content-box']}>
					<h3>Dlaczego gwiazda?</h3>
					<p>
						<span>Mercedes W108 z 1969 roku</span> to coś więcej niż samochód – to klasa sama w sobie.{' '}
						<span>Stylowy, ponadczasowy i pełen charakteru.</span> Jego obecność na Twoim ślubie czy sesji zdjęciowej
						wniesie nutę elegancji, nostalgii i filmowego klimatu. <span>Oto Twoja gwiazda!</span>
					</p>
				</div>
				<div className={styles['rent-car__benefits-special-decoration']} />
				<div className={styles['rent-car__benefits-text-content-box']}>
					<h3>Efekt „wow” na zdjęciach</h3>
					<p>
						Auto robi niesamowite wrażenie – zarówno na żywo, jak i na zdjęciach. Idealne jako tło sesji ślubnej,
						dodatek do pleneru czy centralny punkt przejazdu.{' '}
						<span>Wnosi wyjątkowy klimat i sprawia, że każda chwila wygląda jak kadr z filmu.</span>
					</p>
				</div>
				<div className={styles['rent-car__benefits-special-decoration']} />
				<div className={styles['rent-car__benefits-text-content-box']}>
					<h3>Komfort i klasa z innej epoki</h3>
					<p>
						Choć ma już swoje lata, Mercedes ten wciąż oferuje niezrównany komfort podróży.{' '}
						<span>Miękkie fotele, przestronne wnętrze i stylowy szofer sprawiają,</span> że każda przejażdżka staje się
						częścią niezapomnianego doświadczenia.
					</p>
				</div>
			</div>
		</section>
	);
}
