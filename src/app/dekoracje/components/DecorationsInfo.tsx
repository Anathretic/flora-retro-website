import { TbPackages } from 'react-icons/tb';

import styles from '../styles/styles.module.scss';

export default function DecorationsInfo() {
	return (
		<section className={styles.decorations__info}>
			<h2 className={styles.decorations__title}>Co mnie wyróżnia?</h2>
			<div className={styles['decorations__info-text-content']}>
				<div className={styles['decorations__info-text-content-box']}>
					<TbPackages fontSize={56} color='#24485c' />
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
				<div className={styles['decorations__info-text-content-box']}>
					<TbPackages fontSize={56} color='#24485c' />
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
				<div className={styles['decorations__info-text-content-box']}>
					<TbPackages fontSize={56} color='#24485c' />
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
				<div className={styles['decorations__info-text-content-box']}>
					<TbPackages fontSize={56} color='#24485c' />
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
				className={`${styles['decorations__info-special-block']} ${styles['decorations__info-special-block--left']}`}
			/>
			<div
				className={`${styles['decorations__info-special-block']} ${styles['decorations__info-special-block--right']}`}
			/>
		</section>
	);
}
