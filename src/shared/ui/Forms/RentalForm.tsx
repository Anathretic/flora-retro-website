'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import { rentalFormInputsConfig } from './config/inputsConfig';
import { useFormSubmits } from './hooks/useFormSubmits';
import { useRentItems } from '@/shared/hooks/useRentItems';
import { rentalSchema } from '@/shared/schemas/schemas';
import { RentalFormComponentModel, RentalFormModel } from './models/contactForm.model';
import {
	CheckboxElement,
	FormSubmit,
	InputElement,
	ReCaptchaV2Component,
	ReturnButton,
	RulesInfo,
} from './components/FormElements';

import * as yup from 'yup';

import styles from './styles/styles.module.scss';

export default function RentalForm({ subject, setShowPopup, setShowFinishMessage }: RentalFormComponentModel) {
	const [buttonText, setButtonText] = useState('Wyślij');
	const [reCaptchaErrorValue, setReCaptchaErrorValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<RentalFormModel>({
		defaultValues: {
			firstname: '',
			email: '',
			phone: '',
			date: '',
			privacyPolicy: false,
		},
		resolver: yupResolver(rentalSchema as yup.ObjectSchema<RentalFormModel>),
	});

	const refCaptcha = useRef<ReCAPTCHA>(null);

	const { handleRentItems, cart } = useRentItems();

	const { rentalSubmit } = useFormSubmits<RentalFormModel>({
		reset,
		setButtonText,
		setReCaptchaErrorValue,
		setIsLoading,
		subject,
		refCaptcha,
		cart,
		handleRentItems,
		setShowFinishMessage,
	});

	const rentalFormInputs = rentalFormInputsConfig(errors, register);

	useEffect(() => {
		if (refCaptcha.current?.getValue() === '') {
			setReCaptchaErrorValue('');
		}
	}, []);

	return (
		<form className={styles.rental__form} onSubmit={handleSubmit(rentalSubmit)}>
			{rentalFormInputs.map((input, id) => (
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
			<ReCaptchaV2Component refCaptcha={refCaptcha} reCaptchaErrorValue={reCaptchaErrorValue} />
			<CheckboxElement
				label='Wyrażam zgodę na przetwarzanie moich danych zgodnie z obowiązującą '
				inputName='privacyPolicy'
				{...register('privacyPolicy')}
				errorMessage={errors.privacyPolicy?.message}
			/>
			<FormSubmit buttonText={buttonText} setButtonText={setButtonText} isLoading={isLoading} />
			<ReturnButton isLoading={isLoading} setShowPopup={setShowPopup} />
			<RulesInfo />
		</form>
	);
}
