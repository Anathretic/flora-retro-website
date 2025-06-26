import { CarouselOptionsModel } from '@/models/carousel.model';

export function useCarouselOptions({ setCurrent, current, slides }: CarouselOptionsModel) {
	const handlePreviousClick = () => {
		const previous = current - 1;
		setCurrent(previous < 0 ? slides.length - 1 : previous);
	};

	const handleNextClick = () => {
		const next = current + 1;
		setCurrent(next === slides.length ? 0 : next);
	};

	const handleSlideClick = (id: number) => {
		if (current !== id) {
			setCurrent(id);
		}
	};

	const wrapperTransform = {
		transform: `translateX(-${(current * 100) / slides.length}%)`,
	};

	return { handlePreviousClick, handleNextClick, handleSlideClick, wrapperTransform };
}
