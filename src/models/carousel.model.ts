interface SlideDataBoxModel {
	id: number;
	title: string;
	image: string;
	largeImage?: string;
	href?: string;
	alt?: string;
}

export interface SlideModel {
	slide: SlideDataBoxModel;
	current: number;
	handleSlideClick: (id: number) => void;
}

export interface CarouselModel {
	slides: SlideDataBoxModel[];
}

export interface SliderControlModel {
	type: 'previous' | 'next';
	title: string;
	handleClick: () => void;
}
