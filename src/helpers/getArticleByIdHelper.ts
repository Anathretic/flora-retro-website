import { notFound } from 'next/navigation';
import { ArticleDataModel } from '@/models/article.model';

export async function getArticleById(id: string): Promise<ArticleDataModel | null> {
	try {
		const res = await fetch(`https://flora-retro.pl/api/articles/${id}`, {
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
