import { OpinionItemModel } from '../models/opinions.model';
import { StarRating } from './StarRating';

import styles from '../styles/styles.module.scss';

export function OpinionItem({ id, name, opinion, title, stars }: OpinionItemModel) {
	return (
		<div className={styles.opinions__box}>
			<div className={`${styles['opinions__box-image']}  ${styles[`opinions__box-image--${id}`]}`} />
			<h3>{title}</h3>
			<StarRating rating={stars} />
			<p>{opinion}</p>
			<span>{name}</span>
		</div>
	);
}
