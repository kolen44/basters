'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import GreenButton from '../../widgets/GreenButton/GreenButton'
import ParallaxScroller from '../../widgets/ParallaxScroller/ParallaxScroller'

export function Recommendations() {
	const [isHover, setIsHover] = useState(false)
	const [isUp, setIsUp] = useState(false)
	useEffect(() => {
		const interval = setInterval(() => {
			setIsUp(prevState => !prevState)
		}, 1000) // Изменение направления движения каждую секунду

		return () => clearInterval(interval)
	}, [])
	return (
		<div className='h-fit overflow-hidden min-h-screen bg-[url(/pokemonbg/castle.jpg)] bg-no-repeat bg-cover opacity-90 text-[#FFF] '>
			<div className='flex absolute w-screen  flex-col justify-center text-center pt-20'>
				<div className='text-2xl md:text-4xl 2xl:text-7xl'>
					Do you want to
					<span className='text-[#D2FF1D] '> become a part </span> <br></br>of a
					big team?
				</div>
				<div className='flex justify-center pt-20'>
					<Link href={'https://t.me/onlygreatmindset'}>
						<GreenButton text={'OF COURSE!'} />
					</Link>
				</div>
				<div className='mt-28 2xl:mt-64 md:mt-36'>
					<ParallaxScroller />
				</div>
			</div>
			<div className='absolute w-screen flex justify-end mt-96 -z-1'>
				<motion.div
					animate={{ y: isUp ? -10 : 10 }}
					transition={{ duration: 1, loop: Infinity }}
				>
					<Image
						src='/animes/zont.png'
						width={500}
						height={500}
						alt='Student'
					/>
				</motion.div>
			</div>
		</div>
	)
}
