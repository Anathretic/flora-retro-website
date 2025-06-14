export interface OpinionItemModel {
	title: string;
	content: string;
	name: string;
}

export interface OpinionsDataModel {
	id: number;
	opinion: OpinionItemModel;
}
