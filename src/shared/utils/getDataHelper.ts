import { notFound } from 'next/navigation';

import { clientFetchWithCache } from './clientFetchWithCacheUtils';
import { OfferDataModel } from '../models/offer.model';
import { OpinionsDataModel } from '../models/opinions.model';
import { SlideDataBoxModel } from '../models/carousel.model';
import { ArticleDataModel, ArticleItemModel } from '../models/article.model';

const URL = process.env.NEXT_PUBLIC_URL;

export const getOfferData = () =>
	clientFetchWithCache<OfferDataModel[]>({
		key: 'offerData',
		url: `${URL}/api/offer`,
	});

export const getOpinionsData = () =>
	clientFetchWithCache<OpinionsDataModel[]>({
		key: 'opinionsData',
		url: `${URL}/api/opinions`,
	});

export const getBlogArticlesData = () =>
	clientFetchWithCache<SlideDataBoxModel[]>({
		key: 'articlesData',
		url: `${URL}/api/articles`,
	});

export const getArticlesData = () =>
	clientFetchWithCache<ArticleItemModel[]>({
		key: 'articlesData',
		url: `${URL}/api/articles`,
	});

export const getArticleById = async (id: string): Promise<ArticleDataModel | null> => {
	try {
		const res = await fetch(`${URL}/api/articles/${id}`, {
			next: { revalidate: 60 },
		});
		if (!res.ok) return notFound();
		const data = await res.json();
		if (!data) notFound();
		return data;
	} catch (error) {
		console.error('Błąd podczas pobierania artykułu:', error);
		return null;
	}
};
