export type SlideDataBoxModel = {
	id: number;
	title: string;
	image: string;
	largeImage: string;
	href: string;
	alt: string;
};

export type CarouselDataModel = {
	slides: SlideDataBoxModel[];
};
