import { OpinionItemModel } from '@/models/opinions.model';
import { FaQuoteRight } from 'react-icons/fa6';

import styles from '../styles/styles.module.scss';

export function OpinionItem({ name, content, title }: OpinionItemModel) {
	return (
		<div className={styles.opinions__box}>
			<FaQuoteRight className={styles['opinions__box-icon']} />
			<h3>{title}</h3>
			<p>{content}</p>
			<span>{name}</span>
		</div>
	);
}
