type BlogArticleModel = {
	firstSubtitle: string;
	firstParagraph: string;
	secondSubtitle: string;
	secondParagraph: string;
	thirdSubtitle: string;
	thirdParagraph: string;
};

export type ArticleItemModel = {
	title: string;
	text: string;
	specialText: string;
	href: string;
	image: string;
	alt: string;
};

export type ArticleDataModel = {
	id: number;
	title: string;
	text: string;
	specialText: string;
	isOnlyImage: boolean;
	href: string;
	date: string;
	blogArticle: BlogArticleModel;
};

export type ArticlePageModel = {
	article: ArticleDataModel;
};
