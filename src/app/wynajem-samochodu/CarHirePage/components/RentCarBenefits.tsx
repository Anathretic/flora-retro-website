import { FaCar } from 'react-icons/fa';

import styles from '../styles/styles.module.scss';

export default function RentCarBenefits() {
	return (
		<section className={styles['rent-car__benefits']}>
			<h2 className={styles['rent-car__title']}>Dlaczego gwiazda?</h2>
			<div className={styles['rent-car__benefits-text-content']}>
				<div className={styles['rent-car__benefits-text-content-box']}>
					<FaCar fontSize={56} color='#24485c' />
					<h3>Lorem ipsum dolor sit</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt recusandae in deleniti animi nesciunt
						quasi molestiae eum sunt ut a, vel quidem dicta voluptates repellat laborum exercitationem eius, nulla
						saepe, iste ex.{' '}
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae omnis modi, laudantium
							necessitatibus aperiam mollitia!
						</span>
					</p>
				</div>
				<div className={styles['rent-car__benefits-text-content-box']}>
					<FaCar fontSize={56} color='#24485c' />
					<h3>Lorem ipsum dolor sit</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt recusandae in deleniti animi nesciunt
						quasi molestiae eum sunt ut a, vel quidem dicta voluptates repellat laborum exercitationem eius, nulla
						saepe, iste ex.{' '}
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae omnis modi, laudantium
							necessitatibus aperiam mollitia!
						</span>
					</p>
				</div>
				<div className={styles['rent-car__benefits-text-content-box']}>
					<FaCar fontSize={56} color='#24485c' />
					<h3>Lorem ipsum dolor sit</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt recusandae in deleniti animi nesciunt
						quasi molestiae eum sunt ut a, vel quidem dicta voluptates repellat laborum exercitationem eius, nulla
						saepe, iste ex.{' '}
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae omnis modi, laudantium
							necessitatibus aperiam mollitia!
						</span>
					</p>
				</div>
				<div className={styles['rent-car__benefits-text-content-box']}>
					<FaCar fontSize={56} color='#24485c' />
					<h3>Lorem ipsum dolor sit</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt recusandae in deleniti animi nesciunt
						quasi molestiae eum sunt ut a, vel quidem dicta voluptates repellat laborum exercitationem eius, nulla
						saepe, iste ex.{' '}
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae omnis modi, laudantium
							necessitatibus aperiam mollitia!
						</span>
					</p>
				</div>
			</div>
			<div
				className={`${styles['rent-car__benefits-special-block']} ${styles['rent-car__benefits-special-block--left']}`}
			/>
			<div
				className={`${styles['rent-car__benefits-special-block']} ${styles['rent-car__benefits-special-block--right']}`}
			/>
		</section>
	);
}
