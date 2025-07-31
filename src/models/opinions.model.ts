export type OpinionItemModel = {
	title: string;
	content: string;
	name: string;
};

export type OpinionsDataModel = {
	id: number;
	opinion: OpinionItemModel;
};
