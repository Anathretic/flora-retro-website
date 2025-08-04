import { notFound } from 'next/navigation';
import { OfferDataModel } from '@/models/offer.model';
import { OpinionsDataModel } from '@/models/opinions.model';
import { ArticleDataModel, ArticleItemModel } from '@/models/article.model';
import { SlideDataBoxModel } from '@/models/carousel.model';

const URL = 'https://flora-retro.pl';

export async function getOfferData(): Promise<OfferDataModel[] | null> {
	try {
		const res = await fetch(`${URL}/api/offer`);
		if (!res.ok) return null;
		const data = await res.json();
		return data;
	} catch (error) {
		console.error('Błąd podczas pobierania ofert:', error);
		return null;
	}
}

export async function getOpinionsData(): Promise<OpinionsDataModel[] | null> {
	try {
		const res = await fetch(`${URL}/api/opinions`);
		if (!res.ok) return null;
		const data = await res.json();
		return data;
	} catch (error) {
		console.error('Błąd podczas pobierania opinii:', error);
		return null;
	}
}

export async function getBlogArticlesData(): Promise<SlideDataBoxModel[] | null> {
	try {
		const res = await fetch(`${URL}/api/articles`);
		if (!res.ok) return null;
		const data = await res.json();
		return data;
	} catch (error) {
		console.error('Błąd podczas pobierania artykułów blogowych:', error);
		return null;
	}
}

export async function getArticlesData(): Promise<ArticleItemModel[] | null> {
	try {
		const res = await fetch(`${URL}/api/articles`);
		if (!res.ok) return null;
		const data = await res.json();
		return data;
	} catch (error) {
		console.error('Błąd podczas pobierania artykułów blogowych:', error);
		return null;
	}
}

export async function getRentCarImagesData(): Promise<SlideDataBoxModel[] | null> {
	try {
		const res = await fetch(`${URL}/api/images`);
		if (!res.ok) return null;
		const data = await res.json();
		return data;
	} catch (error) {
		console.error('Błąd podczas pobierania zdjęć:', error);
		return null;
	}
}

export async function getArticleById(id: string): Promise<ArticleDataModel | null> {
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
}
