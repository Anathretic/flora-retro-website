import { getArticleById } from '@/helpers/getArticleByIdHelper';
import ArticlePage from './ArticlePage/ArticlePage';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const article = await getArticleById(id);

	if (!article) {
		return {};
	} else {
		return {
			title: `${article.title}`,
			description: article.blogArticle.firstParagraph.slice(0, 150),
			alternates: {
				canonical: `https://flora-retro.pl/artykuly-i-porady/${id}`,
			},
			openGraph: {
				title: `${article.title} | Flora Retro`,
				description: article.blogArticle.firstParagraph.slice(0, 200),
				url: `https://flora-retro.pl/artykuly-i-porady/${id}`,
				type: 'article',
			},
		};
	}
}

export default async function ArticleWrapper({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const article = await getArticleById(id);

	return <>{article && <ArticlePage article={article} />}</>;
}
