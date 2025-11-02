import ScoreCircle from './ScoreCircle'

export default function ScorePanel() {
	function renderScore(
		label: string,
		icon: string,
		gradient: { from: string; to: string },
		percentage: number,
	) {
		return (
			<div className='flex items-center gap-14 w-200'>
				<ScoreCircle
					percentage={percentage}
					size={50}
					strokeWidth={6}
					gradient={gradient}
				>
					<img src={`/${icon}`} />
				</ScoreCircle>
				<div className='flex flex-col'>
					<div>{label}</div>
					<div className='font-extrabold'>{percentage}%</div>
				</div>
			</div>
		)
	}

	return (
		<div className='flex flex-col !p-[40px] panel'>
			<ScoreCircle
				size={150}
				percentage={50}
				gradient={{ from: '#EDE422', to: '#ED9721' }}
			>
				Overall score:
				<div className='font-bold text-[20px]'>50%</div>
			</ScoreCircle>
			<div className='flex flex-col justify-end flex-1 gap-20'>
				{renderScore(
					'Trajectory',
					'icon_stat_trajectory.svg',
					{ from: '#B32121', to: '#E62222' },
					60,
				)}
				{renderScore(
					'Agression',
					'icon_stat_agression.svg',
					{ from: '#39C634', to: '#2AA426' },
					60,
				)}
				{renderScore(
					'Technical',
					'icon_stat_technical.svg',
					{ from: '#358198', to: '#42A3C0' },
					60,
				)}
				{renderScore(
					'Gas & breaks',
					'icon_stat_gas.svg',
					{ from: '#9D65FF', to: '#6A34C6' },
					60,
				)}
			</div>
		</div>
	)
}
