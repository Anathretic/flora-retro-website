import * as yup from 'yup';
import YupPassword from 'yup-password';
import 'yup-phone-lite';

YupPassword(yup);

const errorMessage = { requiredField: 'To pole jest wymagane!' };

export const contactSchema = (isSubpage: boolean) => {
	return yup.object({
		firstname: yup
			.string()
			.min(3, 'Imię jest zbyt krótkie!')
			.max(16, 'Imię jest zbyt długie!')
			.minUppercase(1, 'Imię zaczyna się dużą literą!')
			.matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/, 'Tylko litery! Bez spacji!')
			.required(errorMessage.requiredField),
		email: yup.string().email('Wprowadź poprawny e-mail!').required(errorMessage.requiredField),
		phone: yup.string().phone('PL', 'Podaj prawidłowy numer!').required(errorMessage.requiredField),
		message: yup
			.string()
			.min(5, 'Rozpisz się..')
			.max(2500, 'Nie więcej niż 500 słów..')
			.required(errorMessage.requiredField),
		date: isSubpage ? yup.string().required(errorMessage.requiredField) : yup.string().notRequired(),
	});
};
