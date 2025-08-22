import { SlideDataBoxModel } from '@/shared/models/carousel.model';

export type SlideModel = {
	slide: SlideDataBoxModel;
	current: number;
	handleSlideClick: (id: number) => void;
};

export type SliderControlModel = {
	type: 'previous' | 'next';
	title: string;
	handleClick: () => void;
};
