'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useFooterLinksContext } from '@/shared/hooks/useFooterLinksContext';
import { footerHomeItems, footerMoreItems, footerOfferItems } from './footerItems/footerItems';
import { FaFacebookSquare, FaInstagram, FaRegCopyright } from 'react-icons/fa';
import { GiFlowerPot } from 'react-icons/gi';

import WebsiteLogo from '../../assets/website-logo-dark.svg';
import styles from './styles/styles.module.scss';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const { showSpecialLinks } = useFooterLinksContext();

	return (
		<footer className={styles.footer}>
			<div className={`${styles.footer__bar} ${styles['footer__bar--first']}`} />
			<div className={styles.footer__container}>
				<div className={styles.footer__box}>
					<div className={styles['footer__box-icon']}>
						<Image src={WebsiteLogo} alt='Logo przekierowujące na górę strony' width={130} height={75} />
					</div>
					<p>Profesjonalne dekoracje na każdą okazję!</p>
					<div className={styles['footer__title-icons']}>
						<a href='https://www.facebook.com/DekoracjeIzabelaSzczygiel' target='_blank' rel='noreferrer'>
							<FaFacebookSquare />
						</a>
						<a href='https://www.instagram.com/izabela_szczygiel_dekoracje/' target='_blank' rel='noreferrer'>
							<FaInstagram />
						</a>
					</div>
				</div>
				<div className={styles.footer__box}>
					{showSpecialLinks && (
						<>
							<span>Home</span>
							<ul>
								<>
									{footerHomeItems.map((item, id) => (
										<li key={id}>
											<Link href={item.href}>{item.content}</Link>
										</li>
									))}
								</>
							</ul>
						</>
					)}
				</div>
				<div className={styles.footer__box}>
					<span>Oferta</span>
					<ul>
						{footerOfferItems.map((item, id) => (
							<li key={id}>
								<Link href={item.href}>{item.content}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.footer__box}>
					<span>Więcej</span>
					<ul>
						{footerMoreItems.map((item, id) => (
							<li key={id}>
								<Link href={item.href}>{item.content}</Link>
							</li>
						))}
					</ul>
				</div>
				{showSpecialLinks ? (
					<>
						<GiFlowerPot
							color='#553d37'
							className={`${styles['footer__flower-icon']} ${styles['footer__flower-icon--first']}`}
						/>
						<GiFlowerPot
							color='#553d37'
							className={`${styles['footer__flower-icon']} ${styles['footer__flower-icon--second']}`}
						/>
						<GiFlowerPot
							color='#553d37'
							className={`${styles['footer__flower-icon']} ${styles['footer__flower-icon--third']}`}
						/>
					</>
				) : (
					<>
						<GiFlowerPot
							color='#402e29'
							className={`${styles['footer__flower-icon']} ${styles['footer__flower-icon--fourth']}`}
						/>
						<GiFlowerPot
							color='#402e29'
							className={`${styles['footer__flower-icon']} ${styles['footer__flower-icon--fifth']}`}
						/>
					</>
				)}
			</div>
			<div className={`${styles.footer__bar} ${styles['footer__bar--second']}`} />
			<div className={styles['footer__copyright-box']}>
				<FaRegCopyright className={styles['footer__copyright-icon']} />
				<p className={styles['footer__company-name']}> {currentYear} flora retro</p>
			</div>
		</footer>
	);
}
