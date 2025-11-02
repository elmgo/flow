'use client'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '@/store/authSlice'
import Dropdown from './Dropdown'
import { ChevronDown } from 'lucide-react'
import { useGetGeneralStatsQuery, useGetSessionsQuery } from '@/store/api'

export default function Header() {
	const dispatch = useDispatch()
	const user = JSON.parse(localStorage.getItem('user') as string)
	const [showUserMenu, setShowUserMenu] = useState(false)

	const { data: userStats, isLoading } = useGetGeneralStatsQuery({
		userId: user.id,
	})

	function doLogout() {
		dispatch(logout())
	}

	function renderStatCell(label: string, value: string | number) {
		return (
			<div className='flex gap-10'>
				<div className='font-semibold'>{label}:</div>
				<div>{value}</div>
			</div>
		)
	}

	return (
		<>
			<div className='flex items-center mt-20'>
				<div className='flex flex-1 gap-20 mr-20 bg-white rounded-lg p-14'>
					<img src='/icon_stats.svg' />
					{renderStatCell(
						'KM driven',
						isLoading
							? '...'
							: `${Math.round(userStats?.totalKmDriven)} km`,
					)}
					{renderStatCell(
						'Number of sessions',
						isLoading ? '...' : userStats?.totalSessions,
					)}
					{renderStatCell(
						'Driving level',
						isLoading ? '...' : userStats?.lifetimePerformanceImprovement,
					)}
				</div>

				<div
					className='flex items-center cursor-pointer gap-14'
					onClick={() => setShowUserMenu(!showUserMenu)}
				>
					<img src='/icon_user.svg' />
					<div className='leading-tight'>
						<div>{user.fullName}</div>
						<div className='text-primary'>{user.email}</div>
					</div>
					<ChevronDown color='#aaa' size={18} />
				</div>

				{showUserMenu && (
					<div className='absolute right-0 z-50 overflow-hidden bg-white border border-gray-200 rounded-md shadow-md w-200 mt-70'>
						<div
							className='p-10 rounded-sm cursor-pointer hover:bg-primaryLightest'
							onClick={doLogout}
						>
							Logout
						</div>
					</div>
				)}
			</div>

			<div className='my-20 mr-20 !shadow-sm panel !overflow-visible !py-10 !px-20 flex'>
				<div className='flex items-center gap-20'>
					<span className='font-bold'>Session:</span>
					<div className='flex items-center w-full pr-20'>
						<Dropdown
							className='w-400'
							items={[
								{ label: 'Item one', onClick: () => {} },
								{ label: 'Another one', onClick: () => {} },
								{ label: 'Third', onClick: () => {} },
								{ label: 'And a fourth', onClick: () => {} },
							]}
						/>
					</div>
				</div>
				<div className='flex items-center flex-1 gap-20'>
					<div className='font-bold'>Compare session to</div>
					<Dropdown
						className='w-200'
						items={[
							{
								label: 'Driver',
								onClick: () => {},
							},
							{
								label: 'Previous sessions',
								onClick: () => {},
							},
						]}
					/>
				</div>
			</div>
		</>
	)
}
