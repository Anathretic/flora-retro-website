export interface BlogSlideDataBoxModel {
	id: number;
	main_title: string;
}

export interface BlogSlideModel {
	slide: BlogSlideDataBoxModel;
	current: number;
	handleSlideClick: (id: number) => void;
}

export interface SliderModel {
	slides: BlogSlideDataBoxModel[];
}

export interface SliderControlModel {
	type: 'previous' | 'next';
	title: string;
	handleClick: () => void;
}
