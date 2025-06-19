import { FaInstagram } from 'react-icons/fa';
import { NavbarInstagramIconModel } from '@/models/header.model';

import styles from '../styles/styles.module.scss';

export function NavbarInstagramIcon({ onClick }: NavbarInstagramIconModel) {
	return (
		<li className={`${styles['navbar__instagram-icon']} ${styles['navbar__instagram-icon-margin']}`}>
			<a
				className={styles['navbar__instagram-icon-link']}
				href='https://www.instagram.com/izabela_szczygiel_dekoracje/'
				onClick={onClick}
				target='_blank'
				rel='noreferrer'>
				<FaInstagram fontSize={26} />
			</a>
		</li>
	);
}
