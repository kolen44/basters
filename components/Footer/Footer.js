'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Form from '../../widgets/Form/Form'

export default function Footer() {
	const [isUp, setIsUp] = useState(false)
	useEffect(() => {
		const interval = setInterval(() => {
			setIsUp(prevState => !prevState)
		}, 1000) // Изменение направления движения каждую секунду

		return () => clearInterval(interval)
	}, [])
	return (
		<div className='h-fit   md:min-h-[109vh] overflow-x-hidden  bg-[url(/pokemonbg/lastbg.jpg)] bg-no-repeat bg-cover text-[#FFF] overflow-hidden'>
			<div className=' pt-20 w-screen justify-center text-center flex-col absolute hidden sm:flex'>
				<div className='text-[#D2FF1D] text-4xl  md:text-5xl 2xl:text-7xl'>
					Do you want to join the team?
				</div>
				<div className='text-2xl hidden lg:block md:text-4xl 2xl:text-6xl'>
					You can DM us!
				</div>
			</div>
			<div className='absolute h-fit md:h-full flex items-end'>
				<Form />
			</div>
			<div className='relative lg:absolute hidden md:flex  -z-1 w-screen  items-start justify-end'>
				<motion.div
					animate={{ y: isUp ? -3 : 3 }}
					transition={{ duration: 1, loop: Infinity }}
				>
					<Image
						src='/animes/paper.png'
						width={500}
						height={500}
						alt='Planet'
					/>
				</motion.div>
			</div>
			<div className='absolute -z-1 w-screen  justify-start pt-20 hidden lg:flex'>
				<motion.div
					animate={{ y: isUp ? -20 : 20 }}
					transition={{ duration: 2, loop: Infinity }}
				>
					<Image
						src='/animes/cheese.png'
						width={600}
						height={600}
						alt='Planet'
					/>
				</motion.div>
			</div>
			<div className='absolute -z-1 h-screen  w-screen justify-end pr-32 items-end hidden lg:flex'>
				<motion.div
					animate={{ y: isUp ? -10 : 10 }}
					transition={{ duration: 1, loop: Infinity }}
				>
					<Image
						src='/animes/mouse.png'
						width={300}
						height={300}
						alt='Planet'
					/>
				</motion.div>
			</div>
		</div>
	)
}
