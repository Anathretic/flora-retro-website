import Link from 'next/link';
import { ArticleArrayItemModel } from '@/models/articleArray.model';
import { scrollToTop } from '@/utils/scrollToTopUtils';
import { TbPackages } from 'react-icons/tb';

import styles from '../styles/styles.module.scss';

export default function ArticleArrayItem({ title, text, specialText, href }: ArticleArrayItemModel) {
	return (
		<div className={styles['articles__array-box']}>
			<TbPackages fontSize={56} color='#24485c' />
			<h3>{title}</h3>
			<p>
				{text}
				<span>{specialText}</span>
			</p>
			<Link href={`/${href}`} onClick={scrollToTop}>
				Przeczytaj
			</Link>
		</div>
	);
}
