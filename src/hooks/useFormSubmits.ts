import { SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { ContactFormModel, FormTypes, UseFormSubmitsModel } from '../models/form.model';

export function useFormSubmits<T extends FormTypes>({
	reset,
	setButtonText,
	setReCaptchaErrorValue,
	setIsLoading,
	refCaptcha,
}: UseFormSubmitsModel<T>) {
	const ContactSubmit: SubmitHandler<ContactFormModel> = async ({ firstname, email, message }) => {
		setIsLoading(true);
		setReCaptchaErrorValue('');

		if (!refCaptcha) return;

		const token = refCaptcha.current?.getValue();
		refCaptcha.current?.reset();

		const params = {
			firstname,
			email,
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

	return { ContactSubmit };
}
