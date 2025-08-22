import styles from '../styles/styles.module.scss';
import animations from '../styles/animations.module.scss';

export function FormLoader() {
	return <div className={`${styles.form__loader} ${animations['form-loader-animation']}`}></div>;
}
