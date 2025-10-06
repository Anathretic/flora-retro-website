import { Dispatch, SetStateAction } from 'react';
import { UseFormReset } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { ContactFormModel, RentalFormModel } from './contactForm.model';
import { CartItemModel } from '@/shared/models/context.model';

export type FormTypes = ContactFormModel | RentalFormModel;

export type UseFormSubmitsModel<T extends FormTypes> = {
	reset: UseFormReset<T>;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	setReCaptchaErrorValue: Dispatch<SetStateAction<string>>;
	setButtonText: Dispatch<SetStateAction<string>>;
	subject: string;
	cart?: CartItemModel[];
	handleRentItems?: () => Promise<void>;
	setShowFinishMessage?: Dispatch<SetStateAction<boolean>>;
	refCaptcha?: React.RefObject<ReCAPTCHA | null>;
};
