'use client'
import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'

interface IDropdownItem {
	label: string
	onClick: () => any
}

export default function Dropdown({
	items,
	className,
}: {
	items: IDropdownItem[]
	className: string
}) {
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	function onItemClick(item: IDropdownItem) {
		setIsOpen(false)
		item.onClick()
	}

	return (
		<div className={`${className} relative inline-block text-left`} ref={ref}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='flex border-1 border-black/10 items-center justify-between w-full px-20 py-10 h-[44px] transition duration-200 bg-white rounded-lg shadow text-greyDark hover:bg-primaryLightest'
			>
				<div className='flex items-center w-full h-full mr-10 text-left border-r-1 border-greyLight'>
					Options
				</div>
				<svg
					className={`w-[12px] h-[12px] ml-2 transform transition-transform duration-200 ${
						isOpen ? 'rotate-180' : ''
					}`}
					fill='none'
					stroke='currentColor'
					strokeWidth={3} // thicker stroke
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M19 9l-7 7-7-7'
					/>
				</svg>
			</button>

			<Transition
				show={isOpen}
				enter='transition ease-out duration-200'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-150'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<div className='absolute z-50 w-full mt-4 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
					<ul>
						{items.map((item, index) => (
							<li
								key={item.label}
								onClick={() => onItemClick(item)}
								className='p-10 cursor-pointer hover:bg-primaryLightest'
							>
								{item.label}
							</li>
						))}
					</ul>
				</div>
			</Transition>
		</div>
	)
}
