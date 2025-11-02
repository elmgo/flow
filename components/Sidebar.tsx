'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
		<div className='p-10 pt-8 mr-20 w-200 border-r-1'>
			<img src='/logo.svg' className='h-40 m-10 mb-20' />
			{items.map((item: IMenuItem) => {
				const selected = pathname.includes(item.route)

				return (
					<Link
						href={`/dashboard/${item.route}`}
						key={item.label}
						className={`${
							selected
								? 'bg-primaryLightest border-opacity-10'
								: 'hover:bg-white hover:border-opacity-0'
						} select-none mb-8 flex gap-8 items-center duration-200 px-10 py-8 border-black rounded-lg cursor-pointer  border-[1px] border-opacity-0 `}
					>
						<img src={`/${item.icon}`} />
						{item.label}
					</Link>
				)
			})}
		</div>
	)
}
