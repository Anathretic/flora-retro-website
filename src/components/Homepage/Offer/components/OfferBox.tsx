import Link from 'next/link';
import { scrollToTop } from '@/utils/scrollToTopUtils';
import { OfferBoxModel } from '@/models/offer.model';

import { PiFlowerFill } from 'react-icons/pi';
import { BsCarFrontFill } from 'react-icons/bs';

import styles from '../styles/styles.module.scss';

export default function OfferBox({ id, subpage, text, title, offerPlusesArray }: OfferBoxModel) {
	return (
		<div className={`${styles.offer__box} ${styles[`offer__box--${id}`]}`}>
			<h3 className={styles['offer__box-title']}>{title}</h3>
			<p className={styles['offer__box-text']}>{text}</p>
			<p className={styles['offer__box-special-text']}>Co zapewniam?</p>
			<ul>
				{offerPlusesArray?.map((data, id) => (
					<li key={id}>{data.content}</li>
				))}
			</ul>
			<Link href={subpage} className={styles['offer__box-button']} onClick={scrollToTop}>
				Sprawdź
			</Link>
			{title === 'Wynajem' ? (
				<BsCarFrontFill fontSize={42} style={{ marginTop: '10px' }} />
			) : (
				<PiFlowerFill fontSize={42} style={{ marginTop: '10px' }} />
			)}
		</div>
	);
}
