import Link from 'next/link';
import Image from 'next/image';
import { scrollToTop } from '@/utils/scrollToTopUtils';
import { ArticleItemModel } from '@/models/article.model';

import styles from '../styles/styles.module.scss';

export default function ArticleItem({ title, text, specialText, href, image, alt }: ArticleItemModel) {
	return (
		<div className={styles['articles__array-box']}>
			<div className={styles['articles__array-box-image']}>
				<Image src={image} alt={alt} width={400} height={300} />
			</div>
			<h3>{title}</h3>
			<p>
				{text} <span>{specialText}</span>
			</p>
			<Link href={`${href}`} onClick={scrollToTop}>
				Przeczytaj
			</Link>
		</div>
	);
}
