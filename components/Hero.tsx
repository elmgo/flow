'use client'

import { useEffect, useState } from 'react'
import css from './Hero.module.scss'
import cn from 'classnames'

export default function Hero() {
	const [fadedIn, setFadedIn] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			const scrollTop = window.scrollY

			if (scrollTop < 200 && !fadedIn) {
				setFadedIn(true)
			}
			if (scrollTop > 200) {
				setFadedIn(false)
				console.log('fade out')
			}
		}

		setFadedIn(true)
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<div className={css.root}>
			<div className={cn(css.inner, fadedIn && css.visible)}>
				<img src='/logo_circle.svg' />
				<h1 className={css.thinTitle}>
					We Build Better
					<br />
				</h1>
				<h1 className={css.boldTitle}>
					<b>Drivers & Riders</b>
				</h1>
				<p>
					Organizations & Pro Drivers are trapped — spending millions on
					accidents, inefficient training, and mission rehearsals caused by
					fragmented systems.
				</p>
			</div>
		</div>
	)
}
