import { BsCarFrontFill } from 'react-icons/bs';
import { IoMdRose } from 'react-icons/io';
import { FaFeatherAlt } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';

import styles from './styles/styles.module.scss';

export default function IdeaSection() {
	return (
		<section id='idea' className={styles.idea}>
			<div className={styles.idea__container}>
				<h2 className={styles.idea__title}>Idea</h2>
				<div className={styles['idea__content-container']}>
					<div className={styles['idea__content-box']}>
						<FaFeatherAlt fontSize={56} />
						<h3>I. Piękno w stylu retro</h3>
						<p>
							W moich dekoracjach łączę miłość ze stylem retro dbając o każdy detal. Czerpię inspirację z dawnych lat, w
							których elegancja i prostota szły w parze z naturalnym pięknem. Tworzę aranżacje, które mają duszę –
							nostalgiczne, harmonijne i pełne ciepła. Wszystko po to, by oprawa uroczystości była niepowtarzalna i
							zapadła w pamięć na długo.
						</p>
					</div>
					<div className={styles['idea__special-decoration']} />
					<div className={styles['idea__content-box']}>
						<IoMdRose fontSize={56} />
						<h3>II. Emocje zamknięte w kwiatach</h3>
						<p>
							Każdą dekorację tworzę z myślą o emocjach – wzruszeniach, uśmiechach i wspomnieniach, które zostaną z Wami
							na lata. Kwiaty traktuję jak słowa, a za ich pomocą opowiadam historię miłości, bliskości i magii chwili.
							Moim celem jest stworzenie przestrzeni, w której kolory, zapachy i atmosfera współgrają ze sobą.
							Subtelnie, z wyczuciem, od serca.
						</p>
					</div>
					<div className={styles['idea__special-decoration']} />
					<div className={styles['idea__content-box']}>
						<HiOutlineSparkles fontSize={56} />
						<h3>III. Wyjątkowość w każdym detalu</h3>
						<p>
							Nie tworzę dekoracji „z katalogu”. Każdy projekt jest dla mnie osobisty – dopasowany do Was, do miejsca i
							do emocji, które chcemy wspólnie podkreślić. Styl retro jest moją bazą, ale lubię bawić się formą i łączyć
							go z innymi elementami. Dzięki temu powstają kompozycje, które są naprawdę Wasze – niepowtarzalne i
							dopracowane w najdrobniejszych szczegółach.
						</p>
					</div>
					<div className={styles['idea__special-decoration']} />
					<div className={styles['idea__content-box']}>
						<BsCarFrontFill fontSize={56} />
						<h3>IV. Dekoracje i klasyka na kołach</h3>
						<p>
							Zależy mi, by wszystko tworzyło spójną całość – dlatego oprócz florystyki oferuję także wynajem stylowego
							zabytkowego auta. To nie tylko środek transportu, ale piękny, klimatyczny dodatek do dnia ślubu czy sesji
							zdjęciowej. Samochód – podobnie jak moje dekoracje – jest dopieszczony w każdym calu. To detal, który robi
							różnicę i dodaje wydarzeniu charakteru.
						</p>
					</div>
				</div>
			</div>
			<div className={`${styles['idea__special-block']} ${styles['idea__special-block--left']}`} />
			<div className={`${styles['idea__special-block']} ${styles['idea__special-block--right']}`} />
		</section>
	);
}
