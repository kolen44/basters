'use client'
import { motion, useAnimation, useViewportScroll } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import AbilityCard from '../../widgets/AbilityCard.js/AbilityCard'

export function Course() {
	const controls = useAnimation()
	const { scrollY } = useViewportScroll()

	useEffect(() => {
		let width = window.innerWidth
		let count = 2500
		if (width < 1000) {
			count = 3500
		}
		const handleScroll = () => {
			controls.start({ scale: 0.1 + scrollY.current / count })
		}

		scrollY.onChange(() => handleScroll())

		return () => {
			scrollY.clearListeners()
		}
	}, [scrollY, controls])
	const [isUp, setIsUp] = useState(false)
	useEffect(() => {
		const interval = setInterval(() => {
			setIsUp(prevState => !prevState)
		}, 1000) // Изменение направления движения каждую секунду

		return () => clearInterval(interval)
	}, [])
	return (
		<div className='h-fit md:h-screen bg-[url(/pokemonbg/placefird.gif)] flex items-center justify-between bg-no-repeat bg-cover mt-20 md:mt-0'>
			<div className='w-full flex justify-center md:justify-between'>
				<div className='md:p-20 md:pr-40 mr-0 flex flex-col gap-20 text-center md:text-start w-fit'>
					<div className='text-4xl md:text-5xl text-[#FFF]'>
						<motion.div animate={controls}>
							<h2 className='xl:text-center'>
								<span className='text-[#D2FF1D] text-3xl md:text-7xl '>
									Guides
								</span>{' '}
								<br></br>
								on the platform
							</h2>
						</motion.div>
					</div>
					<div className='flex flex-col md:flex-row gap-28 w-screen md:w-fit items-center justify-center  2xl:pr-28'>
						<AbilityCard
							text={
								<Link href={'https://youtu.be/ioKLrNt8KYs?si=MrvoHXUEyWwVdZ7l'}>
									<span className='text-center'>
										How to connect crypto wallet<br></br>
										<br></br>
										<h3 className='text-sm 2xl:text-xl  text-[#D2FF1D]'>
											Start watching
										</h3>
									</span>
								</Link>
							}
							img={'/video.webp'}
						/>
						<AbilityCard
							text={
								<Link href={'https://youtu.be/t6WkXF7UxDc?si=72lwZU15B3cZWIth'}>
									<span className='text-center'>
										how does the earning process work?<br></br>
										<br></br>
										<h3 className='text-sm 2xl:text-xl text-[#D2FF1D]'>
											Start watching
										</h3>
									</span>
								</Link>
							}
							img={'/video.webp'}
						/>
					</div>
				</div>
				<div className='-z-1 hidden mt-20 xl:block brightness-130'>
					<motion.div
						animate={{ x: isUp ? 5 : -5, y: isUp ? -5 : 5 }}
						transition={{ duration: 2, loop: Infinity }}
					>
						<Image
							src='/animes/girl.png'
							width={700}
							height={700}
							alt='Student'
						/>
					</motion.div>
				</div>
			</div>
		</div>
	)
}
