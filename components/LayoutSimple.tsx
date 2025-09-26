'use client'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

import LoginPage from '@/components/LoginPage'
import { useHydrated } from '@/hooks/useHydrated'
import { Transition } from '@headlessui/react'
import { useEffect, useState } from 'react'

export default function LayoutSimple({
	children,
}: {
	children: React.ReactNode
}) {
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		setLoaded(true)
	}, [])

	return (
		<div className='flex flex-col min-h-screen bg-gradient-to-b from-black/5 to-black/0'>
			<div className='p-20 bg-white shadow-header'>
				<img src='/logo.svg' className='h-40' />
			</div>
			<div className='flex items-center justify-center flex-1'>
				<Transition
					show={loaded}
					enter='transition ease-out duration-500'
					enterFrom='transform opacity-0 scale-95'
					enterTo='transform opacity-100 scale-100'
				>
					{children}
				</Transition>
			</div>
		</div>
	)
}
