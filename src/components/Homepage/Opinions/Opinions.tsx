'use client';

import { useEffect, useState } from 'react';
import { OpinionItem } from './components/OpinionItem';
import { OpinionsDataModel } from '@/models/opinions.model';

import styles from './styles/styles.module.scss';
import animations from './styles/animations.module.scss';

export default function OpinionsSection() {
	const [opinionsData, setOpinionsData] = useState<OpinionsDataModel[] | null>(null);
	const [stopAnimation, setStopAnimation] = useState(false);

	const fetchOpinionsData = async () => {
		const res = await fetch('/api/opinions');
		const data = await res.json();
		setOpinionsData(data);
	};

	useEffect(() => {
		fetchOpinionsData();
	}, []);

	return (
		<section id='opinie' className={styles.opinions}>
			<div className={styles.opinions__container}>
				<h2 className={styles.opinions__title}>Opinie</h2>
				<div className={styles['opinions__title-decoration']} />

				<div className={styles.opinions__wrapper}>
					<div
						className={`${styles['opinions__carousel-container']} ${animations['carousel-animation']}`}
						style={{ animationPlayState: stopAnimation ? 'paused' : 'running' }}>
						{opinionsData &&
							opinionsData.map(({ opinion }, id: number) => (
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
