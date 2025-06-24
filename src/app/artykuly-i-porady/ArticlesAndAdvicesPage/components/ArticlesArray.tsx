'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ArticleItem from './ArticleItem';
import { ArticleItemModel } from '@/models/article.model';

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
			<h2 className={styles.articles__title}>Dowiedz się więcej</h2>
			<div className={styles['articles__array-container']}>
				{articlesData.map((data: ArticleItemModel, index) => (
					<ArticleItem
						key={index}
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
