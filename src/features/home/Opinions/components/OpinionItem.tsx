import { StarRating } from './StarRating';
import { truncateText } from '../utils/truncateTextUtils';
import { OpinionItemModel } from '../models/opinions.model';

import styles from '../styles/styles.module.scss';

export function OpinionItem({ id, name, review_text, stars, date, profileUrl }: OpinionItemModel) {
	return (
		<div className={styles.opinions__box}>
			<div className={`${styles['opinions__box-image']}  ${styles[`opinions__box-image--${id}`]}`} />
			<p className={styles['opinions__box-date']}>{date}</p>
			<StarRating rating={stars} />
			<p className={styles['opinions__box-text']}>{truncateText(review_text, 200)}</p>
			<a href={profileUrl} target='_blank' rel='noopener noreferrer'>
				{name}
			</a>
		</div>
	);
}
