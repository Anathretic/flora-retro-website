type PlusesArrayModel = {
	id: number;
	content: string;
};

export interface OfferBoxModel {
	id: number;
	subpage: string;
	text: string;
	title: string;
	subtitle: string;
	offerPlusesArray: PlusesArrayModel[];
}

export interface OfferDataModel {
	id: number;
	offer: OfferBoxModel;
}
