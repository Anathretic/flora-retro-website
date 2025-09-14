import { StarRatingModel } from '../models/opinions.model';
import { FaRegStar, FaStar, FaStarHalfStroke } from 'react-icons/fa6';

import styles from '../styles/styles.module.scss';

export const StarRating: React.FC<StarRatingModel> = ({ rating }) => {
	return (
		<div className={styles['opinions__box-star-rating']}>
			{Array.from({ length: 5 }, (_, i) => {
				const starValue = i + 1;
				const isFull = rating >= starValue;
				const isHalf = rating >= starValue - 0.5;

				const Icon = isFull ? FaStar : isHalf ? FaStarHalfStroke : FaRegStar;
				return <Icon key={starValue} className={styles['opinions__box-star']} />;
			})}
		</div>
	);
};
