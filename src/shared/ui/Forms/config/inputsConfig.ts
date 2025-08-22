import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ContactFormModel } from '../models/contactForm.model';
import { ContactFormInputConfigModel } from '../models/components.model';

const today = new Date().toISOString().split('T')[0];

export const contactFormInputsConfig = (
	errors: FieldErrors,
	register: UseFormRegister<ContactFormModel>,
	isSubpage: boolean
) => {
	const inputs: ContactFormInputConfigModel[] = [
		{
			label: 'Imię:',
			inputName: 'firstname',
			type: 'text',
			placeholder: 'Wprowadź imię',
			errorMessage: errors.firstname?.message,
			isInvalid: !!errors.firstname,
			register: register('firstname'),
		},
		{
			label: 'E-mail:',
			inputName: 'email',
			type: 'text',
			placeholder: 'Wprowadź e-mail',
			errorMessage: errors.email?.message,
			isInvalid: !!errors.email,
			register: register('email'),
		},
		{
			label: 'Nr telefonu:',
			inputName: 'phone',
			type: 'tel',
			placeholder: 'Wprowadź numer telefonu',
			errorMessage: errors.phone?.message,
			isInvalid: !!errors.phone,
			register: register('phone'),
		},
	];

	if (isSubpage) {
		inputs.push({
			label: 'Data:',
			inputName: 'date',
			type: 'date',
			placeholder: 'dd.mm.rrrr',
			errorMessage: errors.date?.message,
			isInvalid: !!errors.date,
			register: register('date'),
			min: today,
		});
	}

	return inputs;
};
