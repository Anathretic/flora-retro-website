import Link from 'next/link';
import { NavbarItemModel } from '@/models/header.model';

import styles from '../styles/styles.module.scss';

export const NavbarItem: React.FC<NavbarItemModel> = ({ title, section, classProps, onClick, ...linkProps }) => {
	return (
		<li className={`${styles.navbar__item} ${classProps}`}>
			<Link href={section} onClick={onClick} className={styles['navbar__item-link']} {...linkProps}>
				{title}
			</Link>
		</li>
	);
};
