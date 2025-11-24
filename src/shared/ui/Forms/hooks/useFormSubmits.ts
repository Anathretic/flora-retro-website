import { SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { FormTypes, UseFormSubmitsModel } from '../models/hooks.model';
import { ContactFormModel, RentalFormModel } from '../models/contactForm.model';

export function useFormSubmits<T extends FormTypes>({
	reset,
	setButtonText,
	setReCaptchaErrorValue,
	setIsLoading,
	subject,
	refCaptcha,
	cart,
	handleRentItems,
	setShowFinishMessage,
}: UseFormSubmitsModel<T>) {
	const contactSubmit: SubmitHandler<ContactFormModel> = async ({
		firstname,
		email,
		phone,
		date,
		message,
		privacyPolicy,
	}) => {
		setIsLoading(true);
		setReCaptchaErrorValue('');

		if (!refCaptcha || !privacyPolicy) return;

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

	const rentalSubmit: SubmitHandler<RentalFormModel> = async ({ firstname, email, phone, date, privacyPolicy }) => {
		setIsLoading(true);
		setReCaptchaErrorValue('');

		if (!refCaptcha || !cart || !handleRentItems || !setShowFinishMessage || !privacyPolicy) return;

		const token = refCaptcha.current?.getValue();
		refCaptcha.current?.reset();

		const formattedItems = cart.map(item => `${item.name} - (x${item.quantity}) - ${item.price}zł`).join('\n');

		const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

		const params = {
			firstname,
			subject,
			email,
			phone,
			date,
			items: formattedItems,
			total: `${totalPrice.toFixed(2)}zł`,
			'g-recaptcha-response': token,
		};

		if (token) {
			await emailjs
				.send(
					`${process.env.NEXT_PUBLIC_SERVICE_ID}`,
					`${process.env.NEXT_PUBLIC_RENTAL_TEMPLATE_ID}`,
					params,
					`${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
				)
				.then(async () => {
					await handleRentItems();
					reset();
					setButtonText('Wysłane!');
					setShowFinishMessage(true);
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

	return { contactSubmit, rentalSubmit };
}
