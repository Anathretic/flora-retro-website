'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormInputsConfig } from './inputsConfig/inputsConfig';
import { useFormSubmits } from '@/hooks/useFormSubmits';
import { contactSchema } from '@/schemas/schemas';
import { ContactFormModel } from '@/models/form.model';
import {
	FormSubmit,
	InputElement,
	ReCaptchaV2Component,
	ReturnButton,
	TextareaElement,
} from './components/FormElements';

import styles from '../Homepage/Contact/styles/styles.module.scss';

const initialButtonState = 'Wyślij';

export default function ContactForm() {
	const [buttonText, setButtonText] = useState(initialButtonState);
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
			message: '',
		},
		resolver: yupResolver(contactSchema),
	});

	const refCaptcha = useRef<ReCAPTCHA>(null);
	const { ContactSubmit } = useFormSubmits<ContactFormModel>({
		reset,
		setButtonText,
		setReCaptchaErrorValue,
		setIsLoading,
		refCaptcha,
	});
	const contactFormInputs = contactFormInputsConfig(errors, register);

	useEffect(() => {
		if (refCaptcha.current?.getValue() === '') {
			setReCaptchaErrorValue('');
		}
	}, []);

	const checkPathnameValue = () => {
		setIsSubpage(document.location.pathname !== '/');
	};

	useEffect(() => {
		checkPathnameValue();
	});

	return (
		<form className={styles.contact__form} onSubmit={handleSubmit(ContactSubmit)}>
			{contactFormInputs.map((input, id) => (
				<InputElement
					key={id}
					label={input.label}
					inputName={input.inputName}
					type={input.type}
					placeholder={input.placeholder}
					errorMessage={input.errorMessage}
					aria-invalid={input.isInvalid}
					{...input.register}
				/>
			))}
			<TextareaElement
				label='Wiadomość:'
				inputName='message'
				placeholder='Wprowadź wiadomość..'
				errorMessage={errors.message?.message}
				aria-invalid={errors.message ? true : false}
				{...register('message')}
			/>
			<ReCaptchaV2Component refCaptcha={refCaptcha} reCaptchaErrorValue={reCaptchaErrorValue} />
			<FormSubmit buttonText={buttonText} setButtonText={setButtonText} isLoading={isLoading} />
			{isSubpage && <ReturnButton isLoading={isLoading} />}
		</form>
	);
}
