'use client'
import styles from '../../styles/widgets/style.module.css'

export default function GreenButton({ text, hover = false, isHeader = false }) {
	return (
		<div
			className={`bg-[#D2FF1D] h-fit w-fit ${
				isHeader ? 'px-2 md:[px-10]' : 'px-10'
			} py-3  duration-300 `}
		>
			<h3
				className={`${
					isHeader ? 'text-lg' : 'text-xl'
				} md:text-3xl 2xl:text-5xl text-black font-medium`}
				id={styles.button}
			>
				{text}
				<span id={styles.refl}>{!hover && text}</span>
			</h3>
		</div>
	)
}
