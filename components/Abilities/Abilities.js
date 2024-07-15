'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function AbilitiesPage() {
	const [isUp, setIsUp] = useState(false)
	useEffect(() => {
		const interval = setInterval(() => {
			setIsUp(prevState => !prevState)
		}, 1000) // Изменение направления движения каждую секунду

		return () => clearInterval(interval)
	}, [])
	return (
		<div className='bg-[#0A062A]'>
			<div className='bg-[url(/pokemonbg/placesecond.gif)] bg-no-repeat bg-cover h-fit opacity-90 min-h-screen'>
				<div className='absolute hidden md:block'>
					<motion.div
						animate={{ y: isUp ? -20 : 20 }}
						transition={{ duration: 1, loop: Infinity }}
					>
						<Image
							src='/pokemonbg/mini-poco.gif'
							width={300}
							height={300}
							alt='Student'
						/>
					</motion.div>
				</div>

				<div className='text-3xl md:text-5xl 2xl:text-7xl text-center text-[#FFF] pt-20'>
					<h2 className='text-end sm:text-center'>You can find here</h2>
					<h2>
						different anime on your choice
						<span className='text-[#D2FF1D]'>!</span>
					</h2>
				</div>
				<div className='flex items-center md:items-start flex-col md:flex-row md:justify-between md:px-24 pb-10  mt-24 md:mt-52 relative gap-5'>
					<Image src='/animes/Gon.png' width={300} height={300} alt='Gon' />
					<Image
						src='/animes/Kaneki.png'
						width={300}
						height={300}
						alt='Kaneki'
					/>
					<Image
						src='/animes/Kurosaki.png'
						width={300}
						height={300}
						alt='Kurosaki'
					/>
				</div>
				<div></div>
			</div>
		</div>
	)
}
