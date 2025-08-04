import { Dispatch, SetStateAction } from 'react';
import { UseFormReset } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { ContactFormModel } from './form.model';
import { SlideDataBoxModel } from './carousel.model';

export type FormTypes = ContactFormModel;

export type UseCarouselOptionsModel = {
	setCurrent: React.Dispatch<React.SetStateAction<number>>;
	current: number;
	slides: SlideDataBoxModel[];
};

export type UseCarouselTouchModel = {
	onSwipeLeft: () => void;
	onSwipeRight: () => void;
};

export type UseFormSubmitsModel<T extends FormTypes> = {
	reset: UseFormReset<T>;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	setReCaptchaErrorValue: Dispatch<SetStateAction<string>>;
	setButtonText: Dispatch<SetStateAction<string>>;
	subject: string;
	refCaptcha?: React.RefObject<ReCAPTCHA | null>;
};

export type UseSlideOptionsModel = {
	slideRef: React.RefObject<HTMLLIElement | null>;
};
