'use client';

import { useState } from 'react';
import { useCarouselOptions } from '@/hooks/useCarouselOptions';
import { useCarouselTouch } from '@/hooks/useCarouselTouch';
import Slide from './components/Slide';
import SliderControl from './components/SliderControl';
import { CarouselDataModel } from '@/models/carousel.model';

import styles from './styles/styles.module.scss';

export default function Carousel({ slides }: CarouselDataModel) {
	const [current, setCurrent] = useState(1);

	const { handleNextClick, handlePreviousClick, handleSlideClick, wrapperTransform } = useCarouselOptions({
		setCurrent,
		current,
		slides,
	});

	const sliderRef = useCarouselTouch({
		onSwipeLeft: handleNextClick,
		onSwipeRight: handlePreviousClick,
	});

	return (
		<div className={styles.slider} ref={sliderRef}>
			<ul className={styles.slider__wrapper} style={wrapperTransform}>
				{slides.map(slide => (
					<Slide key={slide.id} slide={slide} current={current} handleSlideClick={handleSlideClick} />
				))}
			</ul>
			<div className={styles['slider__controls-wrapper']}>
				<div className={styles.slider__controls}>
					<SliderControl type='previous' title='Poprzedni slajd' handleClick={handlePreviousClick} />
					<SliderControl type='next' title='Następny slajd' handleClick={handleNextClick} />
				</div>
			</div>
		</div>
	);
}
