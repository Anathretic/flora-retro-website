import { Dispatch, SetStateAction } from 'react';
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { ContactFormModel } from './form.model';

type Form = ContactFormModel;
type ErrorMessage = string | FieldError | Merge<FieldError, FieldErrorsImpl<Form>> | undefined;

interface DefaultModel {
	label: string;
	errorMessage: ErrorMessage;
}

interface InputDefaultModel extends DefaultModel {
	inputName: string;
	type?: string;
	placeholder?: string;
	min?: string | number;
}

export interface ContactFormInputConfigModel extends InputDefaultModel {
	isInvalid: boolean;
	register: ReturnType<UseFormRegister<ContactFormModel>>;
}

export interface InputAndTextareaModel extends InputDefaultModel {
	value?: string;
	readOnly?: boolean;
}

export interface SubmitModel extends ReturnButtonModel {
	buttonText: string;
	setButtonText: Dispatch<SetStateAction<string>>;
}

export type ReCaptchaV2Model = {
	refCaptcha: React.RefObject<ReCAPTCHA | null>;
	reCaptchaErrorValue: string;
};

export type ReturnButtonModel = {
	isLoading: boolean;
};
