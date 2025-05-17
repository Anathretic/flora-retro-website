type PlusesArrayModel = {
	id: number;
	content: string;
};

export interface OfferBoxModel {
	subpage: string;
	text: string;
	title: string;
	offerPlusesArray: PlusesArrayModel[];
}

export interface OfferDataModel {
	id: number;
	offer: OfferBoxModel;
}
