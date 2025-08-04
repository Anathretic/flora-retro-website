type BlogArticleModel = {
	firstSubtitle: string;
	firstParagraph: string;
	secondSubtitle: string;
	secondParagraph: string;
	thirdSubtitle: string;
	thirdParagraph: string;
};

type DefaultArticleModel = {
	id: number;
	title: string;
	text: string;
	specialText: string;
	isOnlyImage: boolean;
	href: string;
	date: string;
	blogArticle: BlogArticleModel;
	image: string;
	alt: string;
};

export type ArticleItemModel = Pick<DefaultArticleModel, 'title' | 'text' | 'specialText' | 'href' | 'image' | 'alt'>;

export type ArticleDataModel = Pick<
	DefaultArticleModel,
	'id' | 'title' | 'text' | 'specialText' | 'isOnlyImage' | 'href' | 'date' | 'blogArticle'
>;

export type ArticlePageModel = {
	article: ArticleDataModel;
};
