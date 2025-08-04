type KeyValueModel = {
	id: number;
	content: string;
};

export type OfferBoxModel = {
	id: number;
	subpage: string;
	text: string;
	title: string;
	subtitle: string;
	keyValueArray: KeyValueModel[];
};

export type OfferDataModel = {
	id: number;
	offer: OfferBoxModel;
};
