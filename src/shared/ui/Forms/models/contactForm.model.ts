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

export type ContactFormModel = Pick<DefaultFormModel, 'firstname' | 'email' | 'phone' | 'message' | 'date'>;
