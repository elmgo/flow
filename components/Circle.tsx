'use client'
import { useEffect, useRef, useState } from 'react'
import css from './Circle.module.scss'
import cn from 'classnames'

interface ISquare {
	titleThin: string
	titleBold: string
	text: string
}

const SECTION_HEIGHT = 700
const SQUARES: ISquare[] = [
	{
		titleThin: 'THE FIRST LINE',
		titleBold: 'AND THE SECOND',
		text: 'Organizations & Pro Drivers are trapped — spending millions on accidents, inefficient training, ',
	},
	{
		titleThin: 'THE FIRST LINE',
		titleBold: 'AND THE SECOND',
		text: 'Organizations & Pro Drivers are trapped — spending millions on accidents, inefficient training, ',
	},
	{
		titleThin: 'THE FIRST LINE',
		titleBold: 'AND THE SECOND',
		text: 'Organizations & Pro Drivers are trapped — spending millions on accidents, inefficient training, ',
	},
	{
		titleThin: 'THE FIRST LINE',
		titleBold: 'AND THE SECOND',
		text: 'Organizations & Pro Drivers are trapped — spending millions on accidents, inefficient training, ',
	},
]

export default function Circle() {
	const [fadedIn, setFadedIn] = useState(false)
	const [quarter, setQuarter] = useState(-1)
	const [rotation, setRotation] = useState(0)
	const contentRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const onScroll = () => {
			const scrollTop = window.scrollY
			const scroll = contentRef.current?.getBoundingClientRect().top ?? 0

			if (scroll < 10 && !fadedIn) setFadedIn(true)
			if (scroll > 10 && fadedIn) {
				setQuarter(-1)
				setFadedIn(false)
			}

			const screenProgress = scrollTop / SECTION_HEIGHT
			setRotation(screenProgress * 90)

			if (scroll < 10) {
				const screensScrolled = Math.floor(screenProgress) - 1
				setQuarter(Math.max(screensScrolled, 0))
			}
		}

		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [fadedIn])

	function getQuarter(quarter: number) {
		if (quarter === 2) return 3
		if (quarter === 3) return 2
		return quarter
	}

	function renderSquare(square: ISquare, index: number) {
		return (
			<div
				key={index}
				className={css.quarter}
				style={{
					alignItems: index === 1 || index === 3 ? 'end' : '',
					textAlign: index === 1 || index === 3 ? 'right' : 'left',
					justifyContent: index === 2 || index === 3 ? 'end' : '',
				}}
			>
				<div
					className={cn(
						css.text,
						(index === 1 || index === 3) &&
							quarter !== getQuarter(index) &&
							css.opposite,
						quarter === getQuarter(index) && css.visible,
					)}
				>
					<h2 className={css.titleThin}>{square.titleThin}</h2>
					<h2 className={css.titleBold}>
						<b>{square.titleBold}</b>
					</h2>
					<p className={css.body}>{square.text}</p>
				</div>
			</div>
		)
	}

	return (
		<div
			className={css.wrapper}
			style={{ height: `${SECTION_HEIGHT * (SQUARES.length + 1)}px` }}
		>
			<div
				ref={contentRef}
				className={cn(css.root, fadedIn && css.rootFadedIn)}
			>
				<div className={css.quarters}>
					{SQUARES.map((square, index) => renderSquare(square, index))}
				</div>
				<div className={cn(css.circle)}>
					<div className={css.circleBG} />
					<img
						style={{ transform: `rotate(${rotation - 135}deg)` }}
						className={css.quarterCircle}
						src='./circle_quarter.svg'
					/>
					<img src='./circle.svg' />
				</div>
			</div>
		</div>
	)
}
