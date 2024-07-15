import { wrap } from '@motionone/utils'
import {
	motion,
	useAnimationFrame,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
	useVelocity,
} from 'framer-motion'
import { useRef } from 'react'
import styles from './ParallaxScroller.module.scss'

function ParallaxText({ children, baseVelocity = 100 }) {
	const baseX = useMotionValue(0)
	const { scrollY } = useScroll()
	const scrollVelocity = useVelocity(scrollY)
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	})
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	})

	/**
	 * This is a magic wrapping for the length of the text - you
	 * have to replace for wrapping that works for you or dynamically
	 * calculate
	 */
	const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`)

	const directionFactor = useRef(1)
	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

		/**
		 * This is what changes the direction of the scroll once we
		 * switch scrolling directions.
		 */
		if (velocityFactor.get() < 0) {
			directionFactor.current = -1
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get()

		baseX.set(baseX.get() + moveBy)
	})

	/**
	 * The number of times to repeat the child text should be dynamically calculated
	 * based on the size of the text and viewport. Likewise, the x motion value is
	 * currently wrapped between -20 and -45% - this 25% is derived from the fact
	 * we have four children (100% / 4). This would also want deriving from the
	 * dynamically generated number of children.
	 */
	return (
		<div className={styles.parallax}>
			<motion.div className={styles.scroller} style={{ x }}>
				<span className='text-[#fff]'> {children} </span>
				<span className='text-[#D2FF1D]'> {children} </span>
				<span className='text-[#fff]'> {children} </span>
				<span className='text-[#D2FF1D]'> {children} </span>
			</motion.div>
		</div>
	)
}

export default function ParallaxScroller() {
	return (
		<section>
			<ParallaxText baseVelocity={-2}>
				BLEACH HUNTERxHUNTER POKEMONS YAKUSOKU no NEVERLAND
			</ParallaxText>
			<ParallaxText baseVelocity={2}>NARUTO TOKYO GHOUL ONE PIECE</ParallaxText>
		</section>
	)
}