import { TbFlower } from 'react-icons/tb';
import { FaLocationDot } from 'react-icons/fa6';
import { FaRegHeart, FaHandSparkles } from 'react-icons/fa';

import styles from '../styles/styles.module.scss';

export default function DecorationsInfo() {
	return (
		<section className={styles.decorations__info}>
			<h2 className={styles.decorations__title}>Co mnie wyróżnia?</h2>
			<div className={styles['decorations__info-text-content']}>
				<div className={styles['decorations__info-text-content-box']}>
					<FaRegHeart fontSize={56} color='#6b4d45' />
					<h3>Indywidualne podejście</h3>
					<p>
						Każda realizacja to dla mnie nowe wyzwanie i wyjątkowa historia. Zależy mi, aby dekoracje w pełni oddawały
						osobowość pary młodej oraz charakter uroczystości.{' '}
						<span>Uważnie słucham potrzeb, doradzam z wyczuciem i tworzę koncepcję</span> dopasowaną do Waszych marzeń –
						niepowtarzalną, jak i autentyczną.
					</p>
				</div>
				<div className={styles['decorations__info-text-content-box']}>
					<FaHandSparkles fontSize={56} color='#6b4d45' />
					<h3>Ręcznie tworzone dekoracje</h3>
					<p>
						Wszystkie elementy przygotowuję samodzielnie, wkładając w nie serce, czas i pasję. Rękodzieło pozwala mi
						dbać o detale i tworzyć rzeczy naprawdę wyjątkowe – od drobnych ozdób po kompleksowe aranżacje przestrzeni.
						Dzięki temu <span>każdy projekt jest unikalny, pełen duszy i subtelnego piękna.</span>
					</p>
				</div>
				<div className={styles['decorations__info-text-content-box']}>
					<TbFlower fontSize={56} color='#6b4d45' />
					<h3>Styl boho & retro z duszą</h3>
					<p>
						Moje dekoracje czerpią inspirację z natury, estetyki vintage i swobodnej elegancji stylu boho.{' '}
						<span>
							Uwielbiam tworzyć kompozycje z suszonych kwiatów, naturalnych materiałów i starych przedmiotów z historią.
						</span>{' '}
						Takie połączenia nadają każdej uroczystości lekkości, romantyzmu i przytulnego klimatu, który zapada w
						pamięć.
					</p>
				</div>
				<div className={styles['decorations__info-text-content-box']}>
					<FaLocationDot fontSize={56} color='#6b4d45' />
					<h3>Lokalnie i z sercem</h3>
					<p>
						<span>Działam jako mała, lokalna pracownia</span> – bez pośpiechu, z pełnym zaangażowaniem i otwartością na
						ludzi. Każde zlecenie traktuję jak osobistą misję, niezależnie od jego skali. Wierzę, że to właśnie
						bezpośredni kontakt, szczerość i ciepło w relacji z klientem pozwalają tworzyć coś więcej niż tylko
						dekoracje – prawdziwe wspomnienia.
					</p>
				</div>
			</div>
			<div
				className={`${styles['decorations__info-special-block']} ${styles['decorations__info-special-block--left']}`}
			/>
			<div
				className={`${styles['decorations__info-special-block']} ${styles['decorations__info-special-block--right']}`}
			/>
		</section>
	);
}
