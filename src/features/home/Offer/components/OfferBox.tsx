import { Fragment } from 'react';
import Link from 'next/link';
import { scrollToTop } from '@/shared/utils/scrollToTopUtils';
import { OfferBoxModel } from '../models/offer.model';

import styles from '../styles/styles.module.scss';

function HighlightWord({ text, word }: { text: string; word: string }) {
	if (!text.includes(word)) {
		return <>{text}</>;
	} else {
		const parts = text.split(word);

		return (
			<>
				{parts.map((part, i) => (
					<Fragment key={i}>
						{part}
						{i !== parts.length - 1 && <span className={styles.bold}>{word}</span>}
					</Fragment>
				))}
			</>
		);
	}
}

export default function OfferBox({ id, subpage, text, title, subtitle, keyValueArray }: OfferBoxModel) {
	return (
		<div className={`${styles.offer__box} ${styles[`offer__box--${id}`]}`}>
			<h3 className={styles['offer__box-title']}>{title}</h3>
			<p className={styles['offer__box-text']}>
				<HighlightWord text={text} word='waszego' />
			</p>
			<p className={styles['offer__box-special-text']}>{subtitle}:</p>
			<ul>
				{keyValueArray?.map((data, id) => (
					<li key={id}>{data.content}</li>
				))}
			</ul>
			<Link href={subpage} className={styles['offer__box-button']} onClick={scrollToTop}>
				<p>Poproszę!</p>
			</Link>
		</div>
	);
}
