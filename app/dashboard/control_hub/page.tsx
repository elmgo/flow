'use client'

import ScoreCircle from '@/components/ScoreCircle'
import ScorePanel from '@/components/ScorePanel'

export default function ControlHubPage() {
	return (
		<div className='flex w-full h-full gap-10 root'>
			<ScorePanel />
			<div className='w-full panel' />
		</div>
	)
}
