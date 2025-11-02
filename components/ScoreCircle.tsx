import React, { useEffect, useRef, useState, useId, ReactNode } from 'react'

interface CircularProgressProps {
	children: ReactNode
	percentage: number
	size?: number
	strokeWidth?: number
	gradient?: { from: string; to: string }
}

const ScoreCircle: React.FC<CircularProgressProps> = ({
	children,
	percentage,
	size = 100,
	strokeWidth = 15,
	gradient = { from: '#00c6ff', to: '#0072ff' },
}) => {
	const [ready, setReady] = useState(false)
	const radius = (size - strokeWidth) / 2
	const circumference = 2 * Math.PI * radius
	const offset = circumference - (percentage / 100) * circumference
	const circleRef = useRef<SVGCircleElement | null>(null)
	const totalSize = size
	const gradientId = useId()

	useEffect(() => {
		setReady(true)
	}, [])

	useEffect(() => {
		if (circleRef.current && ready) {
			circleRef.current.style.transition =
				'stroke-dashoffset 0.7s ease-in-out'
			circleRef.current.style.strokeDashoffset = offset.toString()
		}
	}, [ready, offset])

	return (
		<div className='relative flex items-center justify-center'>
			{children && (
				<div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-center text-40'>
					<div className='-tracking-wide'>{children}</div>
				</div>
			)}
			<svg
				width={totalSize}
				height={totalSize}
				viewBox={`0 0 ${totalSize} ${totalSize}`}
				style={{ transform: 'rotate(-90deg)' }}
			>
				<defs>
					<linearGradient
						id={gradientId}
						x1='0%'
						y1='0%'
						x2='0%'
						y2='100%'
					>
						<stop offset='0%' stopColor={gradient.from} />
						<stop offset='100%' stopColor={gradient.to} />
					</linearGradient>
				</defs>

				<circle
					stroke='#ccc'
					fill='transparent'
					strokeWidth={strokeWidth}
					r={radius}
					cx={totalSize / 2}
					cy={totalSize / 2}
				/>

				<circle
					ref={circleRef}
					fill='transparent'
					strokeWidth={strokeWidth}
					strokeDasharray={circumference}
					strokeDashoffset={circumference}
					r={radius}
					cx={totalSize / 2}
					cy={totalSize / 2}
					stroke={`url(#${gradientId})`}
				/>
			</svg>
		</div>
	)
}

export default ScoreCircle
