import { Dispatch, SetStateAction } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { UseFormReset } from 'react-hook-form';

// ------------------ useFormSubmits --------------------

export type FormTypes = ContactFormModel;

export interface UseFormSubmitsModel<T extends FormTypes> {
	reset: UseFormReset<T>;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	setReCaptchaErrorValue: Dispatch<SetStateAction<string>>;
	setButtonText: Dispatch<SetStateAction<string>>;
	refCaptcha?: React.RefObject<ReCAPTCHA | null>;
}

// -------------------------------------------------------

type DefaultFormModel = {
	firstname: string;
	lastname: string;
	email: string;
	message: string;
	phone: string;
};

export type ContactFormModel = Pick<DefaultFormModel, 'firstname' | 'email' | 'phone' | 'message'>;
