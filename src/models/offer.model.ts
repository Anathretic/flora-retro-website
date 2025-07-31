type PlusesArrayModel = {
	id: number;
	content: string;
};

export type OfferBoxModel = {
	id: number;
	subpage: string;
	text: string;
	title: string;
	subtitle: string;
	offerPlusesArray: PlusesArrayModel[];
};

export type OfferDataModel = {
	id: number;
	offer: OfferBoxModel;
};
