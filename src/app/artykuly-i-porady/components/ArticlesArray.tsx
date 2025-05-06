'use client';

import { useEffect, useState } from 'react';
import ArticleArrayItem from './ArticleArrayItem';
import { ArticleArrayItemModel } from '@/models/articleArray.model';

import styles from '../styles/styles.module.scss';

export default function ArticlesArray() {
	const [articlesData, setArticlesData] = useState([]);

	const fetchArticlesSlidesData = async () => {
		const res = await fetch('/api/articles');
		const data = await res.json();
		setArticlesData(data);
	};

	useEffect(() => {
		fetchArticlesSlidesData();
	}, []);

	return (
		<section className={styles.articles__array}>
			<h2 className={styles.articles__title}>Dowiedz się więcej!</h2>
			<div className={styles['articles__array-container']}>
				{articlesData.map((data: ArticleArrayItemModel, index) => (
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
