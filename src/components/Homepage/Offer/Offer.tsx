import OfferBox from './components/OfferBox';
import { offerData } from './data/offerData';

import styles from './styles/styles.module.scss';

export default function OfferSection() {
	return (
		<section id='oferta' className={styles.offer}>
			<div className={styles.offer__container}>
				<h2 className={styles.offer__title}>Oferta</h2>
				<div className={styles['offer__title-decoration']} />
				<div className={styles['offer__wrapper']}>
					{offerData.map(({ offer }, id: number) => (
						<OfferBox
							key={id}
							subpage={offer.subpage}
							text={offer.text}
							title={offer.title}
							offerPlusesArray={offer.offerPlusesArray}
						/>
					))}
				</div>
			</div>
			<div className={`${styles['offer__special-block']} ${styles['offer__special-block--left']}`} />
			<div className={`${styles['offer__special-block']} ${styles['offer__special-block--right']}`} />
		</section>
	);
}
