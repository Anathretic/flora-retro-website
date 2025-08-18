import Link from 'next/link';
import { SlArrowDown } from 'react-icons/sl';

import styles from './styles/styles.module.scss';
import animations from './styles/animations.module.scss';

export default function WelcomeSection() {
	return (
		<section className={styles.welcome}>
			<div className={`${styles.welcome__container} ${animations['show-content']}`}>
				<h1 className={styles.welcome__title}>Flora Retro</h1>
				<p>Pracownia dekoracji</p>
				<Link href='/dekoracje' className={styles['welcome__special-btn']}>
					Ozdabiam!
				</Link>
			</div>
			<Link href='/#idea' className={styles.welcome__button}>
				<div className={`${styles.welcome__arrow} ${animations['arrow-bounce-animation']}`}>
					<SlArrowDown className={styles['welcome__arrow-icon']} />
				</div>
			</Link>
		</section>
	);
}
