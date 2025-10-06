import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

interface IMenuItem {
	label: string
	route: string
	icon: string
}

export default function Sidebar() {
	const pathname = usePathname()

	const items = [
		{
			label: 'Control hub',
			route: 'control_hub',
			icon: 'icon_controlhub.svg',
		},
		{ label: 'Planner', route: 'planner', icon: 'icon_planner.svg' },
	]

	return (
		<div className='p-10 pr-14 w-200'>
			<img src='/logo.svg' className='h-40 m-10 mb-20' />
			{items.map((item: IMenuItem) => (
				<div
					key={item.label}
					className={`${
						pathname.includes(item.route) &&
						'bg-primaryLightest border-opacity-10'
					} flex gap-8 items-center duration-200 p-10 border-black rounded-lg cursor-pointer hover:bg-primaryLightest border-[1px] border-opacity-0 hover:border-opacity-10`}
				>
					<img src={`/${item.icon}`} />
					{item.label}
				</div>
			))}
		</div>
	)
}
