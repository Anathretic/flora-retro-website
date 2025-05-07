interface OpinionModel {
	title: string;
	content: string;
	name: string;
}

export interface OpinionsDataModel {
	id: number;
	opinion: OpinionModel;
}

export interface OpinionItemModel extends OpinionModel {
	setStopAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}
