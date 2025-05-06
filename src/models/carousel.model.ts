export interface SlideDataBoxModel {
	id: number;
	title: string;
	isOnlyImage: boolean;
	href?: string;
}

export interface SlideModel {
	slide: SlideDataBoxModel;
	current: number;
	handleSlideClick: (id: number) => void;
}

export interface SliderModel {
	slides: SlideDataBoxModel[];
}

export interface SliderControlModel {
	type: 'previous' | 'next';
	title: string;
	handleClick: () => void;
}
