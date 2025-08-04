export type SlideDataBoxModel = {
	id: number;
	title: string;
	image: string;
	largeImage?: string;
	href?: string;
	alt?: string;
};

export type SlideModel = {
	slide: SlideDataBoxModel;
	current: number;
	handleSlideClick: (id: number) => void;
};

export type CarouselDataModel = {
	slides: SlideDataBoxModel[];
};

export type SliderControlModel = {
	type: 'previous' | 'next';
	title: string;
	handleClick: () => void;
};
