interface IMenuItem {
	label: string
	route: string
	icon: string
}

export default function Sidebar() {
	const items = [
		{
			label: 'Control hub',
			route: 'control_hub',
			icon: 'icon_controlhub.svg',
		},
		{ label: 'Planner', route: 'planner', icon: 'icon_planner.svg' },
	]

	return (
		<div className='p-10 w-200'>
			<img src='/logo.svg' className='h-40 m-10 mb-20' />
			{items.map((item: IMenuItem) => (
				<div
					key={item.label}
					className='flex gap-8 items-center duration-200 p-10 border-black rounded-lg cursor-pointer hover:bg-primaryLightest border-[1px] border-opacity-0 hover:border-opacity-10'
				>
					<img src={`/${item.icon}`} />
					{item.label}
				</div>
			))}
			<div className='button'>Hello</div>
		</div>
	)
}
