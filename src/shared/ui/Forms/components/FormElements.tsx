import Link from 'next/link';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ReCAPTCHA from 'react-google-recaptcha';
import { FormLoader } from './FormLoader';
import { scrollToTop } from '@/shared/utils/scrollToTopUtils';
import {
	CheckboxModel,
	InputAndTextareaModel,
	ReCaptchaV2Model,
	ReturnButtonModel,
	SubmitModel,
} from '../models/components.model';

import styles from '../styles/styles.module.scss';

export const InputElement: React.FC<InputAndTextareaModel> = React.forwardRef<HTMLInputElement, InputAndTextareaModel>(
	({ label, inputName, type, placeholder, value, readOnly, errorMessage, min, ...props }, ref) => {
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
					min={min ? min : undefined}
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

export const CheckboxElement: React.FC<CheckboxModel> = React.forwardRef<HTMLInputElement, CheckboxModel>(
	({ label, inputName, errorMessage, ...props }, ref) => {
		return (
			<div className={`${styles.form__box} ${styles['form__box--checkbox']}`}>
				<div>
					<label
						className={`${styles.form__label} ${errorMessage && styles['form__box--checkbox-error']}`}
						htmlFor={inputName}>
						{label} <Link href='/polityka-prywatnosci'>polityką prywatności.</Link>
					</label>
					<input className={styles.form__input} type='checkbox' id={inputName} ref={ref} {...props} />
				</div>
			</div>
		);
	}
);

CheckboxElement.displayName = 'CheckboxElement';

export const ReCaptchaV2Component: React.FC<ReCaptchaV2Model> = ({ refCaptcha, reCaptchaErrorValue }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

	return (
		<div className={`${styles['form__recaptcha-box']} ${reCaptchaErrorValue && styles['form__recaptcha-error']}`}>
			<ReCAPTCHA
				key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
				size={isMobile ? 'compact' : 'normal'}
				sitekey={process.env.NEXT_PUBLIC_SITE_KEY!}
				ref={refCaptcha}
			/>
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

	useEffect(() => {
		checkButtonValue();
	}, [buttonText]);

	return (
		<div className={styles.form__box}>
			<button className={`${styles.form__submit} ${isLoading && styles['form__submit--is-loading']}`} type='submit'>
				{isLoading ? <FormLoader /> : buttonText}
			</button>
		</div>
	);
};

export const ReturnButton: React.FC<ReturnButtonModel> = ({ isLoading, href, setShowPopup }) => {
	return (
		<div className={styles.form__box}>
			{setShowPopup ? (
				<button
					className={`${styles['form__return-btn']} ${isLoading && styles['form__return-btn--opacity']}`}
					type='button'
					onClick={() => {
						setShowPopup(false);
					}}>
					Powrót
				</button>
			) : (
				<Link
					className={`${styles['form__return-btn']} ${isLoading && styles['form__return-btn--opacity']}`}
					href={href as string}
					onClick={scrollToTop}>
					Powrót
				</Link>
			)}
		</div>
	);
};

export const RulesInfo: React.FC = () => {
	return (
		<div className={styles.form__box}>
			<p className={styles['form__box-special-text']}>
				Poprzez kliknięcie przycisku &quot;Wyślij&quot; akceptujesz{' '}
				<Link href='/polityka-prywatnosci' onClick={scrollToTop}>
					politykę prywatności
				</Link>{' '}
				oraz wyrażasz zgodę na realizację zamówienia.
			</p>
		</div>
	);
};
