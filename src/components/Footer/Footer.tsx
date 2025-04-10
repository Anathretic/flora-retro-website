import Link from 'next/link';
import { footerHomeItems, footerMoreItems, footerOfferItems } from './footerItems/footerItems';
import { FaFacebookSquare, FaInstagram, FaRegCopyright } from 'react-icons/fa';

import styles from './styles/styles.module.scss';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={`${styles.footer__bar} ${styles['footer__bar--first']}`} />
			<div className={styles.footer__container}>
				<div className={styles.footer__box}>
					<h2>Miejsce na logo</h2>
					<p>Profesjonalne dekoracje na każdą okazję!</p>
					<div className={styles['footer__title-icons']}>
						<a href='https://www.facebook.com/DekoracjeIzabelaSzczygiel' target='_blank' rel='noreferrer'>
							<FaFacebookSquare />
						</a>
						<a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
							<FaInstagram />
						</a>
					</div>
				</div>
				<div className={styles.footer__box}>
					<h3>Home</h3>
					<ul>
						{footerHomeItems.map((item, id) => (
							<li key={id}>
								<Link href={item.href}>{item.content}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.footer__box}>
					<h3>Oferta</h3>
					<ul>
						{footerOfferItems.map((item, id) => (
							<li key={id}>
								<Link href={item.href}>{item.content}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.footer__box}>
					<h3>Więcej</h3>
					<ul>
						{footerMoreItems.map((item, id) => (
							<li key={id}>
								<Link href={item.href}>{item.content}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className={`${styles.footer__bar} ${styles['footer__bar--second']}`} />
			<div className={styles['footer__copyright-box']}>
				<FaRegCopyright className={styles['footer__copyright-icon']} />
				<p className={styles['footer__company-name']}> {currentYear} flora retro</p>
			</div>
		</footer>
	);
}
