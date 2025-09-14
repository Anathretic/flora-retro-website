import styles from '../styles/styles.module.scss';

export default function DecorationsInfo() {
	return (
		<section className={styles.decorations__info} id='informacje'>
			<h2 className={`${styles.decorations__title} ${styles['decorations__title--info']}`}>Unikalność</h2>
			<div className={styles['decorations__info-text-content']}>
				<div className={styles['decorations__info-text-content-box']}>
					<h3>Indywidualne podejście</h3>
					<p>
						Każda realizacja to dla mnie nowe wyzwanie i wyjątkowa historia. Zależy mi, aby dekoracje w pełni oddawały
						osobowość pary młodej oraz charakter uroczystości.{' '}
						<span>Uważnie słucham potrzeb, doradzam z wyczuciem i tworzę koncepcję</span> dopasowaną do Waszych marzeń –
						niepowtarzalną, jak i autentyczną.
					</p>
				</div>
				<div className={styles['decorations__info-special-decoration']} />
				<div className={styles['decorations__info-text-content-box']}>
					<h3>Ręcznie tworzone dekoracje</h3>
					<p>
						Wszystkie elementy przygotowuję samodzielnie, wkładając w nie serce, czas i pasję. Rękodzieło pozwala mi
						dbać o detale i tworzyć rzeczy naprawdę wyjątkowe – od drobnych ozdób po kompleksowe aranżacje przestrzeni.
						Dzięki temu <span>każdy projekt jest unikalny, pełen duszy i subtelnego piękna.</span>
					</p>
				</div>
				<div className={styles['decorations__info-special-decoration']} />
				<div className={styles['decorations__info-text-content-box']}>
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
