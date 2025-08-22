import { SlideDataBoxModel } from '@/shared/models/carousel.model';

export type UseCarouselOptionsModel = {
	setCurrent: React.Dispatch<React.SetStateAction<number>>;
	current: number;
	slides: SlideDataBoxModel[];
};

export type UseCarouselTouchModel = {
	onSwipeLeft: () => void;
	onSwipeRight: () => void;
};

export type UseSlideOptionsModel = {
	slideRef: React.RefObject<HTMLLIElement | null>;
};
