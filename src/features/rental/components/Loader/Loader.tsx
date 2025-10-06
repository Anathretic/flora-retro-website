import styles from './styles/styles.module.scss';
import animations from './styles/animations.module.scss';

export default function Loader() {
	return (
		<div className={styles['loader']}>
			<div className={`${styles['loader__spinner']} ${animations['loader-animation']}`} />
		</div>
	);
}
