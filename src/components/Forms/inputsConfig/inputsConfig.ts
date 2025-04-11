import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ContactFormModel } from '@/models/form.model';

export const contactFormInputsConfig = (errors: FieldErrors, register: UseFormRegister<ContactFormModel>) => [
	{
		label: 'Imię:',
		inputName: 'firstname',
		type: 'text',
		placeholder: 'Wprowadź imię..',
		errorMessage: errors.firstname?.message,
		isInvalid: !!errors.firstname,
		register: register('firstname'),
	},
	{
		label: 'E-mail:',
		inputName: 'email',
		type: 'text',
		placeholder: 'Wprowadź e-mail..',
		errorMessage: errors.email?.message,
		isInvalid: !!errors.email,
		register: register('email'),
	},
	{
		label: 'Nr telefonu:',
		inputName: 'phone',
		type: 'text',
		placeholder: 'Wprowadź numer telefonu..',
		errorMessage: errors.phone?.message,
		isInvalid: !!errors.phone,
		register: register('phone'),
	},
];
