'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Carousel } from 'react-responsive-carousel';
import { getOpinionsData } from '@/shared/utils/getDataHelper';
import { OpinionItem } from './components/OpinionItem';
import { OpinionsDataModel } from '@/shared/models/opinions.model';

import styles from './styles/styles.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/carousel.scss';

export default function OpinionsSection() {
	const [opinionsData, setOpinionsData] = useState<OpinionsDataModel[] | null>(null);

	const isDesktop = useMediaQuery({ query: '(min-width: 1536px)' });

	const groupOpinions = (opinions: OpinionsDataModel[], groupSize: number) => {
		const groups = [];

		for (let i = 0; i < opinions.length; i += groupSize) {
			groups.push(opinions.slice(i, i + groupSize));
		}

		return groups;
	};

	useEffect(() => {
		const fetchOpinions = async () => {
			const data = await getOpinionsData();
			setOpinionsData(data);
		};

		fetchOpinions();
	}, []);

	return (
		<section id='opinie' className={styles.opinions}>
			<div className={styles.opinions__container}>
				<h2 className={styles.opinions__title}>Opinie</h2>
				<div className={styles.opinions__wrapper}>
					{opinionsData && (
						<Carousel
							className='opinions-carousel'
							showThumbs={false}
							showStatus={false}
							showIndicators={false}
							interval={5000}
							autoPlay
							infiniteLoop>
							{groupOpinions(opinionsData, isDesktop ? 3 : 1).map((group, index) => (
								<div key={index} className={styles.opinions__group}>
									{group.map((data: OpinionsDataModel, id: number) => (
										<OpinionItem
											key={id}
											id={data.id}
											title={data.opinion.title}
											opinion={data.opinion.opinion}
											name={data.opinion.name}
											stars={data.opinion.stars}
										/>
									))}
								</div>
							))}
						</Carousel>
					)}
				</div>
			</div>
			<div className={`${styles['opinions__special-block']} ${styles['opinions__special-block--left']}`} />
			<div className={`${styles['opinions__special-block']} ${styles['opinions__special-block--right']}`} />
		</section>
	);
}
