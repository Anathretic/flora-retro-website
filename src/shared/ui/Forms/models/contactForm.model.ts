import { Dispatch, SetStateAction } from 'react';

type DefaultFormModel = {
	firstname: string;
	email: string;
	message: string;
	phone: string;
	date: string;
};

export type ContactFormComponentModel = {
	subject: string;
};

export type RentalFormComponentModel = {
	subject: string;
	setShowPopup: Dispatch<SetStateAction<boolean>>;
};

export type ContactFormModel = Pick<DefaultFormModel, 'firstname' | 'email' | 'phone' | 'message' | 'date'>;

export type RentalFormModel = Pick<DefaultFormModel, 'firstname' | 'email' | 'phone' | 'date'>;
