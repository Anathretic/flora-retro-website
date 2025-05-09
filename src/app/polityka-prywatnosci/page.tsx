import { Metadata } from 'next';
import PrivacyPolicyPage from './PrivacyPolicyPage/PrivacyPolicyPage';

export const metadata: Metadata = {
	title: 'Polityka prywatności',
	description:
		'Dowiedz się, jak przetwarzam Twoje dane osobowe w Flora Retro. Przejrzysta i zgodna z RODO polityka prywatności.',
	alternates: {
		canonical: 'https://flora-retro.pl/polityka-prywatnosci',
	},
	openGraph: {
		title: 'Polityka prywatności | Flora Retro',
		description:
			'Dowiedz się, jak przetwarzam Twoje dane osobowe w Flora Retro. Przejrzysta i zgodna z RODO polityka prywatności.',
		url: 'https://flora-retro.pl/polityka-prywatnosci',
		type: 'website',
	},
};

export default function PrivacyPolicyWrapper() {
	return (
		<>
			<PrivacyPolicyPage />
		</>
	);
}
