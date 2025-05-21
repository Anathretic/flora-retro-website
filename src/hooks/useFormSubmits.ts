import { SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { ContactFormModel, FormTypes, UseFormSubmitsModel } from '../models/form.model';

export function useFormSubmits<T extends FormTypes>({
	reset,
	setButtonText,
	setReCaptchaErrorValue,
	setIsLoading,
	subject,
	refCaptcha,
}: UseFormSubmitsModel<T>) {
	const contactSubmit: SubmitHandler<ContactFormModel> = async ({ firstname, email, phone, date, message }) => {
		setIsLoading(true);
		setReCaptchaErrorValue('');

		if (!refCaptcha) return;

		const token = refCaptcha.current?.getValue();
		refCaptcha.current?.reset();

		const params = {
			firstname,
			subject,
			email,
			phone,
			date,
			message,
			'g-recaptcha-response': token,
		};

		if (token) {
			await emailjs
				.send(
					`${process.env.NEXT_PUBLIC_SERVICE_ID}`,
					`${process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID}`,
					params,
					`${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
				)
				.then(() => {
					reset();
					setButtonText('Wysłane!');
				})
				.catch(err => {
					setReCaptchaErrorValue('Coś poszło nie tak..');
					if (err instanceof Error) {
						console.log(`Twój błąd: ${err.message}`);
					}
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else {
			setIsLoading(false);
			setReCaptchaErrorValue('Nie bądź 🤖!');
		}
	};

	return { contactSubmit };
}
