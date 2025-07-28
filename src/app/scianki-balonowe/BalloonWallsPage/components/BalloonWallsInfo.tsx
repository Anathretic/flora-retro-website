import { TbFeather } from 'react-icons/tb';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { LuTimer } from 'react-icons/lu';
import { FaRegSmileBeam } from 'react-icons/fa';

import styles from '../styles/styles.module.scss';

export default function BalloonWallsInfo() {
	return (
		<section className={styles['balloon-walls__info']} id='informacje'>
			<h2 className={styles['balloon-walls__title']}>Co kryje się za ścianką?</h2>
			<div className={styles['balloon-walls__info-text-content']}>
				<div className={styles['balloon-walls__info-text-content-box']}>
					<HiOutlineChatBubbleLeftRight fontSize={56} color='#6b4d45' />
					<h3>Najpierw słucham</h3>
					<p>
						Zanim pojawi się pierwszy balon, musi być rozmowa. Bez checklisty, bez ankiet. Czasem ktoś powie, że lubi
						ciepłe kolory albo że kocha las — i już wiadomo, jak ma wyglądać dekoracja.{' '}
						<span>
							Ścianka balonowa może mieć charakter, jeśli jest zakorzeniona w czyjejś historii, a nie katalogu.
						</span>{' '}
						Wolę zapytać o nastrój niż o dokładny odcień różu. Bo tło też potrafi mówić, jeśli się je dobrze ustawi.
					</p>
				</div>
				<div className={styles['balloon-walls__info-text-content-box']}>
					<LuTimer fontSize={56} color='#6b4d45' />
					<h3>Czas jest kluczowy</h3>
					<p>
						Każdy balon przechodzi przez moje ręce. Dosłownie. Kompozycja nie powstaje w programie — powstaje w realnym
						tempie, w ciszy, czasem przy radiu. Trzeba sprawdzić proporcje, ustawić rytm kolorów, odsunąć się dwa metry
						i spojrzeć jeszcze raz.{' '}
						<span>
							Nie ma dwóch takich samych ścianek, bo każda ma swoją historię, przestrzeń i błysk, który wychodzi gdzieś
							po drodze.
						</span>
					</p>
				</div>
				<div className={styles['balloon-walls__info-text-content-box']}>
					<TbFeather fontSize={56} color='#6b4d45' />
					<h3>Balony nie krzyczą</h3>
					<p>
						To nie musi być cukierkowa eksplozja. Czasem wystarczy kilka matowych balonów, lniana zasłona i fragment
						drewnianej ramy z odzysku. Nie chodzi o to, żeby było dużo — tylko żeby było z wyczuciem.
						<span> Lubię, gdy dekoracja nie zagłusza emocji, tylko je podkreśla</span>. Daję miejsce na oddech, na
						światło, na niedopowiedzenia. Stawiam na autentyczność.
					</p>
				</div>
				<div className={styles['balloon-walls__info-text-content-box']}>
					<FaRegSmileBeam fontSize={56} color='#6b4d45' />
					<h3>Nie tylko zdjęcia</h3>
					<p>
						Ścianka to nie tylko tło pod aparat. To miejsce, przy którym ktoś się przytuli, ktoś inny się wzruszy, a
						ktoś wybuchnie śmiechem. Czasem zostaje tam kwiatek z bukietu, szminka na balonie albo odpruty guzik z
						marynarki.
						<span> To te drobne ślady sprawiają, że dekoracja przestaje być tylko ładna — zaczyna być prawdziwa</span>.
						I właśnie o to chodzi.
					</p>
				</div>
			</div>
			<div
				className={`${styles['balloon-walls__info-special-block']} ${styles['balloon-walls__info-special-block--left']}`}
			/>
			<div
				className={`${styles['balloon-walls__info-special-block']} ${styles['balloon-walls__info-special-block--right']}`}
			/>
		</section>
	);
}
