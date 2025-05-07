interface BlogArticleModel {
	firstSubtitle: string;
	firstParagraph: string;
	secondSubtitle: string;
	secondParagraph: string;
	thirdSubtitle: string;
	thirdParagraph: string;
}

export interface ArticleItemModel {
	title: string;
	text: string;
	specialText: string;
	href: string;
	image: string;
}

export interface ArticlePageModel {
	id: number;
	title: string;
	text: string;
	specialText: string;
	isOnlyImage: boolean;
	href: string;
	date: string;
	blogArticle: BlogArticleModel;
}
