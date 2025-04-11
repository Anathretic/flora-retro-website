import Link from 'next/link';
import { SlArrowDown } from 'react-icons/sl';

import styles from './styles/styles.module.scss';
import animations from './styles/animations.module.scss';

export default function WelcomeSection() {
	return (
		<section className={styles.welcome}>
			<div className={styles.welcome__container}>
				<h1 className={styles.welcome__title}>Flora Retro</h1>
			</div>
			<Link href='/#oferta' className={styles.welcome__button}>
				<div className={`${styles.welcome__arrow} ${animations['arrow-bounce-animation']}`}>
					<SlArrowDown className={styles['welcome__arrow-icon']} />
				</div>
			</Link>
		</section>
	);
}
