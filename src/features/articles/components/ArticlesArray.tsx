'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ArticleItem from './ArticleItem';
import { getArticlesData } from '@/shared/utils/getDataHelper';
import { ArticleItemModel } from '@/shared/models/article.model';

import styles from '../styles/articlesAndAdvicesStyles.module.scss';

export default function ArticlesArray() {
	const [articlesData, setArticlesData] = useState<ArticleItemModel[] | null>(null);

	useEffect(() => {
		const fetchBlogArticlesData = async () => {
			const data = await getArticlesData();
			if (data) setArticlesData(data);
		};

		fetchBlogArticlesData();
	}, []);

	return (
		<section className={styles.articles__array}>
			<h2 className={styles.articles__title}>Dowiedz się więcej</h2>
			<div className={styles['articles__array-container']}>
				{articlesData &&
					articlesData.map(data => (
						<ArticleItem
							key={data.title}
							title={data.title}
							text={data.text}
							specialText={data.specialText}
							href={data.href}
							image={data.image}
							alt={data.alt}
						/>
					))}
			</div>
			<Link href='/' className={styles['articles__btn']} aria-label='Powrót na stronę główną'>
				Powrót
			</Link>
		</section>
	);
}
