'use client';

import Link from 'next/link';
import CookieConsent from 'react-cookie-consent';
import { scrollToTop } from '@/shared/utils/scrollToTopUtils';

import styles from './styles/styles.module.scss';

const CookieBanner: React.FC = ({ ...otherProps }) => {
	return (
		<CookieConsent
			disableStyles={true}
			containerClasses={`${styles['cookie-banner-container']}`}
			buttonClasses={`${styles['cookie-banner-button']}`}
			location='bottom'
			buttonText='Zamknij'
			expires={1}
			{...otherProps}>
			<p className={styles['cookie-banner-text']}>
				Ta strona używa plików cookie wyłącznie w celach technicznych (np. google reCaptcha). Dowiedz się więcej z mojej{' '}
				<Link href='/polityka-prywatnosci' className={styles['cookie-banner-link']} onClick={scrollToTop}>
					polityki prywatności
				</Link>
				.
			</p>
		</CookieConsent>
	);
};

export default CookieBanner;
