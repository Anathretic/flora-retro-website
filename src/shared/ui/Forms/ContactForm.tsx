'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormInputsConfig } from './config/inputsConfig';
import { useFormSubmits } from './hooks/useFormSubmits';
import { contactSchema } from '@/shared/schemas/schemas';
import { ContactFormComponentModel, ContactFormModel } from './models/contactForm.model';
import {
	CheckboxElement,
	FormSubmit,
	InputElement,
	ReCaptchaV2Component,
	ReturnButton,
	TextareaElement,
} from './components/FormElements';

import * as yup from 'yup';

import styles from './styles/styles.module.scss';

export default function ContactForm({ subject }: ContactFormComponentModel) {
	const [buttonText, setButtonText] = useState('Wyślij');
	const [reCaptchaErrorValue, setReCaptchaErrorValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isSubpage, setIsSubpage] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormModel>({
		defaultValues: {
			firstname: '',
			email: '',
			phone: '',
			message: '',
			date: '',
			privacyPolicy: false,
		},
		resolver: yupResolver(contactSchema(isSubpage) as yup.ObjectSchema<ContactFormModel>),
	});

	const refCaptcha = useRef<ReCAPTCHA>(null);

	const { contactSubmit } = useFormSubmits<ContactFormModel>({
		reset,
		setButtonText,
		setReCaptchaErrorValue,
		setIsLoading,
		subject,
		refCaptcha,
	});

	const contactFormInputs = contactFormInputsConfig(errors, register, isSubpage);

	const checkPathnameValue = () => {
		setIsSubpage(document.location.pathname !== '/');
	};

	useEffect(() => {
		if (refCaptcha.current?.getValue() === '') {
			setReCaptchaErrorValue('');
		}
	}, []);

	useEffect(() => {
		checkPathnameValue();
	}, []);

	return (
		<form className={styles.contact__form} onSubmit={handleSubmit(contactSubmit)}>
			{contactFormInputs.map((input, id) => (
				<InputElement
					key={id}
					label={input.label}
					inputName={input.inputName}
					type={input.type}
					placeholder={input.placeholder}
					errorMessage={input.errorMessage}
					aria-invalid={input.isInvalid}
					min={input.min}
					{...input.register}
				/>
			))}
			<TextareaElement
				label='Wiadomość:'
				inputName='message'
				placeholder='Wprowadź wiadomość'
				errorMessage={errors.message?.message}
				aria-invalid={errors.message ? true : false}
				{...register('message')}
			/>
			<ReCaptchaV2Component refCaptcha={refCaptcha} reCaptchaErrorValue={reCaptchaErrorValue} />
			<CheckboxElement
				label='Wyrażam zgodę na przetwarzanie moich danych zgodnie z obowiązującą '
				inputName='privacyPolicy'
				{...register('privacyPolicy')}
				errorMessage={errors.privacyPolicy?.message}
			/>
			<FormSubmit buttonText={buttonText} setButtonText={setButtonText} isLoading={isLoading} />
			{isSubpage && <ReturnButton isLoading={isLoading} href='/' />}
		</form>
	);
}
