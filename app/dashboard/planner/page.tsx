'use client'

import Dropdown from '@/components/Dropdown'
import LayersTree from '@/components/LayersTree'
import Map from '@/components/MapGoogle_unused'
import { useState } from 'react'

export default function PlannerPage() {
	const [selectedLayers, setSelectedLayers] = useState<string[]>([])

	function onLayerSelect(layerId: string) {
		if (selectedLayers.includes(layerId)) {
			setSelectedLayers(selectedLayers.filter((id) => id !== layerId))
		} else {
			setSelectedLayers([...selectedLayers, layerId])
		}
	}

	return (
		<div className='flex h-full gap-10 root'>
			<div className='panel w-250'>
				<LayersTree selected={selectedLayers} onToggle={onLayerSelect} />
			</div>
			<div className='flex flex-col flex-1 pb-20 panel'>
				<div className='flex-1'>
					<Map />
				</div>
			</div>
		</div>
	)
}
