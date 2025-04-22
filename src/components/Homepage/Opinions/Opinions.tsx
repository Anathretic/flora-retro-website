'use client';

import { useState } from 'react';
import { opinionsData } from './data/opinionsData';
import { OpinionItem } from './components/OpinionItem';
import { OpinionsDataModel } from '@/models/opinions.model';

import styles from './styles/styles.module.scss';
import animations from './styles/animations.module.scss';

export default function Opinions() {
	const [stopAnimation, setStopAnimation] = useState(false);

	return (
		<section id='opinie' className={styles.opinions}>
			<div className={styles.opinions__container}>
				<h2 className={styles.opinions__title}>Opinie</h2>
				<div className={styles['opinions__title-decoration']} />

				<div className={styles.opinions__wrapper}>
					<div
						className={`${styles['opinions__carousel-container']} ${animations['carousel-animation']}`}
						style={{ animationPlayState: stopAnimation ? 'paused' : 'running' }}>
						{opinionsData.map(({ opinion }: OpinionsDataModel, id: number) => (
							<OpinionItem
								key={id}
								title={opinion.title}
								content={opinion.content}
								name={opinion.name}
								setStopAnimation={setStopAnimation}
							/>
						))}
					</div>
				</div>
			</div>
			<div className={`${styles['opinions__special-block']} ${styles['opinions__special-block--left']}`} />
			<div className={`${styles['opinions__special-block']} ${styles['opinions__special-block--right']}`} />
		</section>
	);
}
