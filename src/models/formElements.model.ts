import { Dispatch, SetStateAction } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { ContactFormModel } from './form.model';

type Form = ContactFormModel;
type ErrorMessage = string | FieldError | Merge<FieldError, FieldErrorsImpl<Form>> | undefined;

interface DefaultModel {
	label: string;
	errorMessage: ErrorMessage;
}

export interface InputAndTextareaModel extends DefaultModel {
	inputName: string;
	type?: string;
	placeholder?: string;
	value?: string;
	readOnly?: boolean;
}

export interface ReCaptchaV2Model {
	refCaptcha: React.RefObject<ReCAPTCHA | null>;
	reCaptchaErrorValue: string;
}

export interface SubmitModel {
	isLoading: boolean;
	buttonText: string;
	setButtonText: Dispatch<SetStateAction<string>>;
}

export interface ReturnButtonModel {
	isLoading: boolean;
}
