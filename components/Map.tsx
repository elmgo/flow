'use client'

import 'mapbox-gl/dist/mapbox-gl.css'
import Map, { Source, Layer } from 'react-map-gl/mapbox'

const MAPBOX_TOKEN =
	'pk.eyJ1IjoiZ2FsY2FyIiwiYSI6ImNtNnA4anMzZzA1OTIycnNmN3E0ZnVlYnQifQ.bgHvv81a5yFxA3SyKmQmQQ'

const path = [
	[-8.4214, 40.2056],
	[-8.4152, 40.2065],
	[-8.4065, 40.2088],
	[-8.3961, 40.2103],
	[-8.386, 40.211],
	[-8.375, 40.2122],
]

export default function MapboxMap() {
	const geojson = {
		type: 'Feature',
		geometry: {
			type: 'LineString',
			coordinates: path,
		},
		properties: {},
	} as const

	return (
		<div className='w-full h-full overflow-hidden border-2 border-gray-200 rounded-xl'>
			<Map
				initialViewState={{
					longitude: -8.4,
					latitude: 40.21,
					zoom: 13,
				}}
				style={{ width: '100%', height: '100%' }}
				mapStyle='mapbox://styles/mapbox/light-v11'
				mapboxAccessToken={MAPBOX_TOKEN}
			>
				<Source id='route' type='geojson' data={geojson}>
					<Layer
						id='route-layer'
						type='line'
						paint={{
							'line-color': '#FFD700',
							'line-width': 4,
							'line-opacity': 1,
						}}
					/>
				</Source>
			</Map>
		</div>
	)
}
