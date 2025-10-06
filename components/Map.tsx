'use client'
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api'

const containerStyle = {
	width: '100%',
	height: '100%',
	borderRadius: '12px',
	border: '2px solid #eee',
}

const center = {
	lat: 40.21,
	lng: -8.4,
}

const mapStyles = [
	{
		elementType: 'geometry',
		stylers: [{ color: '#f5f5f5' }],
	},
	{
		elementType: 'labels.icon',
		stylers: [{ visibility: 'off' }],
	},
	{
		elementType: 'labels.text.fill',
		stylers: [{ color: '#616161' }],
	},
	{
		elementType: 'labels.text.stroke',
		stylers: [{ color: '#f5f5f5' }],
	},
	{
		featureType: 'administrative.land_parcel',
		elementType: 'labels.text.fill',
		stylers: [{ color: '#bdbdbd' }],
	},
	{
		featureType: 'poi',
		elementType: 'geometry',
		stylers: [{ color: '#eeeeee' }],
	},
	{
		featureType: 'poi',
		elementType: 'labels.text.fill',
		stylers: [{ color: '#757575' }],
	},
	{
		featureType: 'poi.park',
		elementType: 'geometry',
		stylers: [{ color: '#e5e5e5' }],
	},
	{
		featureType: 'poi.park',
		elementType: 'labels.text.fill',
		stylers: [{ color: '#9e9e9e' }],
	},
	{
		featureType: 'road',
		elementType: 'geometry',
		stylers: [{ color: '#ffffff' }],
	},
	{
		featureType: 'road.arterial',
		elementType: 'labels.text.fill',
		stylers: [{ color: '#757575' }],
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry',
		stylers: [{ color: '#dadada' }],
	},
	{
		featureType: 'road.highway',
		elementType: 'labels.text.fill',
		stylers: [{ color: '#616161' }],
	},
	{
		featureType: 'road.local',
		elementType: 'labels.text.fill',
		stylers: [{ color: '#9e9e9e' }],
	},
	{
		featureType: 'transit.line',
		elementType: 'geometry',
		stylers: [{ color: '#e5e5e5' }],
	},
	{
		featureType: 'transit.station',
		elementType: 'geometry',
		stylers: [{ color: '#eeeeee' }],
	},
	{
		featureType: 'water',
		elementType: 'geometry',
		stylers: [{ color: '#c9c9c9' }],
	},
	{
		featureType: 'water',
		elementType: 'labels.text.fill',
		stylers: [{ color: '#9e9e9e' }],
	},
]

const path = [
	{ lat: 40.2056, lng: -8.4214 },
	{ lat: 40.2065, lng: -8.4152 },
	{ lat: 40.2088, lng: -8.4065 },
	{ lat: 40.2103, lng: -8.3961 },
	{ lat: 40.211, lng: -8.386 },
	{ lat: 40.2122, lng: -8.375 },
]

export default function Map() {
	return (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={13}
			options={{
				disableDefaultUI: true,
				styles: mapStyles,
			}}
		>
			{/* Yellow driving route */}
			<Polyline
				path={path}
				options={{
					strokeColor: '#FFD700',
					strokeOpacity: 1,
					strokeWeight: 4,
				}}
			/>
		</GoogleMap>
	)
}
