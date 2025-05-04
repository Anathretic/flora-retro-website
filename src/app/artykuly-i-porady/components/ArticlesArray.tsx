import { articleData } from '../data/articleData';
import ArticleArrayItem from './ArticleArrayItem';

import styles from '../styles/styles.module.scss';

export default function ArticlesArray() {
	return (
		<section className={styles.articles__array}>
			<h2 className={styles.articles__title}>Dowiedz się więcej!</h2>
			<div className={styles['articles__array-container']}>
				{articleData.map((data, index) => (
					<ArticleArrayItem
						key={index}
						title={data.title}
						text={data.text}
						specialText={data.specialText}
						href={data.href}
					/>
				))}
			</div>
		</section>
	);
}
