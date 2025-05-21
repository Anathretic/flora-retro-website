import { Dispatch, SetStateAction } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { UseFormReset } from 'react-hook-form';

interface DefaultFormModel {
	firstname: string;
	email: string;
	message: string;
	phone: string;
	date: string;
}

export type ContactFormComponentModel = {
	subject: string;
};

export type ContactFormModel = Pick<DefaultFormModel, 'firstname' | 'email' | 'phone' | 'message' | 'date'>;

// ------------------ useFormSubmits --------------------

export type FormTypes = ContactFormModel;

export interface UseFormSubmitsModel<T extends FormTypes> {
	reset: UseFormReset<T>;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	setReCaptchaErrorValue: Dispatch<SetStateAction<string>>;
	setButtonText: Dispatch<SetStateAction<string>>;
	subject: string;
	refCaptcha?: React.RefObject<ReCAPTCHA | null>;
}

// -------------------------------------------------------
