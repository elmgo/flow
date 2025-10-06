'use client'
import { useState } from 'react'
import { ChevronRight, ChevronDown, Check } from 'lucide-react'
import clsx from 'clsx'

type LayerItem = {
	id: string
	name: string
}

type LayerCategory = {
	id: string
	name: string
	items: LayerItem[]
}

const LAYERS: LayerCategory[] = [
	{
		id: 'telemetry',
		name: 'Telemetry',
		items: [
			{ id: 'speed', name: 'Speed' },
			{ id: 'rpm', name: 'RPM' },
			{ id: 'gps', name: 'GPS Data' },
		],
	},
	{
		id: 'events',
		name: 'Events',
		items: [
			{ id: 'braking', name: 'Braking Events' },
			{ id: 'gas', name: 'Gas Events' },
			{ id: 'alerts', name: 'Braking Alerts' },
		],
	},
	{
		id: 'road',
		name: 'Road Data',
		items: [
			{ id: 'perfectTrack', name: 'Perfect Track' },
			{ id: 'roadStory', name: 'Road Story' },
		],
	},
]

interface LayersTreeProps {
	selected: string[]
	onToggle: (layerId: string) => void
}

export default function LayersTree({ selected, onToggle }: LayersTreeProps) {
	const [expanded, setExpanded] = useState<Record<string, boolean>>({
		telemetry: true,
		events: true,
		road: true,
	})

	const toggleExpand = (id: string) => {
		setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
	}

	return (
		<div>
			<div className='flex items-center gap-10 pb-20 mt-10 mb-20 font-bold border-b-1 border-r-greyLight'>
				<img className='w-[25px]' src='/icon_layers.svg' />
				Layers
			</div>

			<div className='space-y-3'>
				{LAYERS.map((cat) => (
					<div key={cat.id} className='pb-2 '>
						<button
							onClick={() => toggleExpand(cat.id)}
							className='flex items-center justify-between w-full font-medium text-left text-gray-800 hover:text-gray-900'
						>
							<span>{cat.name}</span>
							{expanded[cat.id] ? (
								<ChevronDown color='#298aa8' size={18} />
							) : (
								<ChevronRight size={16} />
							)}
						</button>

						{expanded[cat.id] && (
							<div className='mt-4 mb-10 ml-1 space-y-1'>
								{cat.items.map((item) => {
									const isChecked = selected.includes(item.id)
									return (
										<button
											key={item.id}
											onClick={() => onToggle(item.id)}
											className={clsx(
												'flex items-center gap-2 w-full text-left px-2 py-1 rounded-md hover:bg-gray-50 transition-colors',
												isChecked
													? 'text-primary'
													: 'text-gray-600',
											)}
										>
											<span
												className={clsx(
													'ml-6 w-14 h-14 rounded-sm border flex items-center justify-center',
													isChecked
														? 'bg-primaryLight border-primary'
														: 'border-gray-400',
												)}
											>
												{isChecked && (
													<Check size={22} color='white' />
												)}
											</span>
											<span className='ml-10 text-sm'>
												{item.name}
											</span>
										</button>
									)
								})}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
