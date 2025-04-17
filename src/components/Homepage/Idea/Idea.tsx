import { BsFlower1 } from 'react-icons/bs';

import styles from './styles/styles.module.scss';

export default function IdeaSection() {
	return (
		<section id='pomysl' className={styles.idea}>
			<div className={styles.idea__container}>
				<h2 className={styles.idea__title}>Idea</h2>
				<div className={styles['idea__content-container']}>
					<div className={styles['idea__content-box']}>
						<BsFlower1 fontSize={56} />
						<h3>I. Lorem, ipsum dolor</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab tempore numquam recusandae natus ut
							dignissimos modi eum voluptate repellendus. Ad animi quam corporis, delectus explicabo esse fugiat
							accusamus nisi, in quae voluptatibus. Incidunt asperiores possimus excepturi et vel odit soluta. Aliquid
							fugiat animi repellendus itaque quo. Vel quas quos pariatur?
						</p>
					</div>
					<div className={styles['idea__special-decoration']} />
					<div className={styles['idea__content-box']}>
						<BsFlower1 fontSize={56} />
						<h3>II. Lorem, ipsum dolor</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab tempore numquam recusandae natus ut
							dignissimos modi eum voluptate repellendus. Ad animi quam corporis, delectus explicabo esse fugiat
							accusamus nisi, in quae voluptatibus. Incidunt asperiores possimus excepturi et vel odit soluta. Aliquid
							fugiat animi repellendus itaque quo. Vel quas quos pariatur?
						</p>
					</div>
					<div className={styles['idea__special-decoration']} />
					<div className={styles['idea__content-box']}>
						<BsFlower1 fontSize={56} />
						<h3>III. Lorem, ipsum dolor</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab tempore numquam recusandae natus ut
							dignissimos modi eum voluptate repellendus. Ad animi quam corporis, delectus explicabo esse fugiat
							accusamus nisi, in quae voluptatibus. Incidunt asperiores possimus excepturi et vel odit soluta. Aliquid
							fugiat animi repellendus itaque quo. Vel quas quos pariatur?
						</p>
					</div>
					<div className={styles['idea__special-decoration']} />
					<div className={styles['idea__content-box']}>
						<BsFlower1 fontSize={56} />
						<h3>IV. Lorem, ipsum dolor</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab tempore numquam recusandae natus ut
							dignissimos modi eum voluptate repellendus. Ad animi quam corporis, delectus explicabo esse fugiat
							accusamus nisi, in quae voluptatibus.{' '}
							<span>Incidunt asperiores possimus excepturi et vel odit soluta.</span> Aliquid fugiat animi repellendus
							itaque quo. Vel quas quos pariatur?
						</p>
					</div>
				</div>
			</div>
			<div className={`${styles['idea__special-block']} ${styles['idea__special-block--left']}`} />
			<div className={`${styles['idea__special-block']} ${styles['idea__special-block--right']}`} />
		</section>
	);
}
