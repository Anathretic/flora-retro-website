import { Dispatch, SetStateAction } from 'react';
import { UseFormReset } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { ContactFormModel, RentalFormModel } from './contactForm.model';

export type FormTypes = ContactFormModel | RentalFormModel;

export type UseFormSubmitsModel<T extends FormTypes> = {
	reset: UseFormReset<T>;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	setReCaptchaErrorValue: Dispatch<SetStateAction<string>>;
	setButtonText: Dispatch<SetStateAction<string>>;
	subject: string;
	refCaptcha?: React.RefObject<ReCAPTCHA | null>;
};
