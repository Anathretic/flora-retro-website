export type OpinionItemModel = {
	id: number;
	date: string;
	review_text: string;
	name: string;
	stars: number;
	profileUrl: string;
};

export interface StarRatingModel {
	rating: number;
}
