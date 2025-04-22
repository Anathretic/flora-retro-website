import BlogCarousel from './components/BlogCarousel';
import { blogData } from './data/blogData';

import styles from './styles/styles.module.scss';

export default function BlogSection() {
	return (
		<section id='blog' className={styles.blog}>
			<div className={styles.blog__container}>
				<div className={styles.blog__wrapper}>
					<h2 className={styles.blog__title}>Blog</h2>
					<BlogCarousel slides={blogData} />
				</div>
			</div>
			<div className={`${styles['blog__special-block']} ${styles['blog__special-block--left']}`} />
			<div className={`${styles['blog__special-block']} ${styles['blog__special-block--right']}`} />
		</section>
	);
}
