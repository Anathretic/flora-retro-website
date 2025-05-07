import { OpinionItemModel } from '@/models/opinions.model';
import { FaQuoteRight } from 'react-icons/fa6';

import styles from '../styles/styles.module.scss';

export function OpinionItem({ name, content, title, setStopAnimation }: OpinionItemModel) {
	return (
		<div
			className={`${styles.opinions__box} dark-blue-gradient`}
			onMouseOver={() => {
				setStopAnimation(true);
			}}
			onMouseLeave={() => {
				setStopAnimation(false);
			}}>
			<FaQuoteRight className={styles['opinions__box-icon']} />
			<h3>{title}</h3>
			<p>{content}</p>
			<span>{name}</span>
		</div>
	);
}
