export interface OpinionsDataBoxModel {
	title: string;
	content: string;
	name: string;
}

export interface OpinionsDataModel {
	id: number;
	opinion: OpinionsDataBoxModel;
}

export interface OpinionsDataBoxPropsModel extends OpinionsDataBoxModel {
	setStopAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}
