import styles from './styles/styles.module.scss';

export default function IdeaSection() {
	return (
		<section id='idea' className={styles.idea}>
			<div className={styles.idea__image} />
			<div className={styles.idea__container}>
				<h2 className={styles.idea__title}>Idea</h2>
				<div className={styles['idea__content-container']}>
					<div className={styles['idea__content-box']}>
						<h3>I. Piękno w stylu retro</h3>
						<p>
							W moich dekoracjach łączę miłość ze stylem retro dbając o każdy detal. Czerpię inspirację z dawnych lat, w
							których elegancja i prostota szły w parze z naturalnym pięknem.{' '}
							<span>Tworzę aranżacje, które mają duszę</span> – nostalgiczne, harmonijne i pełne ciepła. Wszystko po to,
							by oprawa uroczystości była <span>niepowtarzalna</span> i zapadła w pamięć na długo.
						</p>
					</div>
					<div className={styles['idea__special-decoration']} />
					<div className={styles['idea__content-box']}>
						<h3>II. Wyjątkowość w każdym detalu</h3>
						<p>
							<span>Nie tworzę dekoracji „z katalogu”. </span> Każdy projekt jest dla mnie osobisty - dopasowany do Was,
							do miejsca i do emocji, które chcemy wspólnie podkreślić.{' '}
							<span>Styl retro jest moją bazą, ale lubię bawić się formą i łączyć go z innymi elementami.</span> Dzięki
							temu powstają kompozycje, które są naprawdę Wasze – niepowtarzalne i dopracowane w najdrobniejszych
							szczegółach.
						</p>
					</div>
					<div className={styles['idea__special-decoration']} />
					<div className={styles['idea__content-box']}>
						<h3>III. Dekoracje i klasyka na kołach</h3>
						<p>
							Zależy mi, by wszystko tworzyło spójną całość – dlatego{' '}
							<span>oprócz florystyki oferuję także wynajem stylowego zabytkowego auta.</span> To nie tylko środek
							transportu, ale piękny, klimatyczny dodatek do dnia ślubu czy sesji zdjęciowej. Samochód – podobnie jak
							moje dekoracje – jest dopieszczony w każdym calu.{' '}
							<span>To detal, który robi różnicę i dodaje wydarzeniu charakteru.</span>
						</p>
					</div>
				</div>
			</div>
			<div className={`${styles['idea__special-block']} ${styles['idea__special-block--left']}`} />
			<div className={`${styles['idea__special-block']} ${styles['idea__special-block--right']}`} />
		</section>
	);
}
