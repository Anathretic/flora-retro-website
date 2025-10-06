'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import { rentalFormInputsConfig } from './config/inputsConfig';
import { useFormSubmits } from './hooks/useFormSubmits';
import { rentalSchema } from '@/shared/schemas/schemas';
import { RentalFormComponentModel, RentalFormModel } from './models/contactForm.model';
import { FormSubmit, InputElement, ReCaptchaV2Component, ReturnButton } from './components/FormElements';

import styles from './styles/styles.module.scss';

export default function RentalForm({ subject, setShowPopup }: RentalFormComponentModel) {
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
		},
		resolver: yupResolver(rentalSchema),
	});

	const refCaptcha = useRef<ReCAPTCHA>(null);

	const { rentalSubmit } = useFormSubmits<RentalFormModel>({
		reset,
		setButtonText,
		setReCaptchaErrorValue,
		setIsLoading,
		subject,
		refCaptcha,
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
			<FormSubmit buttonText={buttonText} setButtonText={setButtonText} isLoading={isLoading} />
			<ReturnButton isLoading={isLoading} setShowPopup={setShowPopup} />
		</form>
	);
}
