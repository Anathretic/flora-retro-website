import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ReCAPTCHA from 'react-google-recaptcha';
import { InputAndTextareaModel, ReCaptchaV2Model, SubmitModel } from '@/models/formElements.model';
import Loader from '@/components/Loader/Loader';

import styles from '../styles/styles.module.scss';

export const InputElement: React.FC<InputAndTextareaModel> = React.forwardRef<HTMLInputElement, InputAndTextareaModel>(
	({ label, inputName, type, placeholder, value, readOnly, errorMessage, ...props }, ref) => {
		return (
			<div className={styles.form__box}>
				<label className={styles.form__label} htmlFor={inputName}>
					{label}
				</label>
				<input
					className={styles.form__input}
					type={type}
					id={inputName}
					placeholder={placeholder}
					value={value}
					readOnly={readOnly}
					ref={ref}
					autoComplete='off'
					{...props}
				/>
				<p className={styles['form__input-error']}>{`${errorMessage === undefined ? '' : errorMessage}`}</p>
			</div>
		);
	}
);

InputElement.displayName = 'InputElement';

export const TextareaElement: React.FC<InputAndTextareaModel> = React.forwardRef<
	HTMLTextAreaElement,
	InputAndTextareaModel
>(({ label, inputName, placeholder, errorMessage, ...props }, ref) => {
	return (
		<div className={styles.form__box}>
			<label className={styles.form__label} htmlFor={inputName}>
				{label}
			</label>
			<textarea
				className={styles.form__textarea}
				id='message'
				placeholder={placeholder}
				autoComplete='off'
				ref={ref}
				{...props}></textarea>
			<p className={styles['form__textarea-error']}>{`${errorMessage === undefined ? '' : errorMessage}`}</p>
		</div>
	);
});

TextareaElement.displayName = 'TextareaElement';

export const ReCaptchaV2Component: React.FC<ReCaptchaV2Model> = ({ refCaptcha, reCaptchaErrorValue }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

	return (
		<div className={styles['form__recaptcha-box']}>
			<ReCAPTCHA
				key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
				size={isMobile ? 'compact' : 'normal'}
				sitekey={process.env.NEXT_PUBLIC_SITE_KEY!}
				ref={refCaptcha}
			/>
			<div className={styles['form__recaptcha-error']}>
				<p>{reCaptchaErrorValue}</p>
			</div>
		</div>
	);
};

export const FormSubmit: React.FC<SubmitModel> = ({ isLoading, buttonText, setButtonText }) => {
	const checkButtonValue = () => {
		if (buttonText !== 'Wyślij') {
			setTimeout(() => {
				setButtonText('Wyślij');
			}, 2500);
		}
	};

	useEffect(checkButtonValue, [buttonText]);

	return (
		<div className={styles.form__box}>
			{isLoading ? <Loader /> : <input className={styles.form__submit} type='submit' value={buttonText} />}
		</div>
	);
};
