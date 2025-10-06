import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '@/store/authSlice'
import Dropdown from './Dropdown'
import { ChevronDown } from 'lucide-react'

export default function Header() {
	const dispatch = useDispatch()
	const user = JSON.parse(localStorage.getItem('user') as string)
	const [showUserMenu, setShowUserMenu] = useState(false)

	function doLogout() {
		dispatch(logout())
	}

	return (
		<div className='relative flex items-center py-20 h-80'>
			<span className='mr-20 font-bold'>Session:</span>
			<div className='flex w-full pr-20'>
				<Dropdown
					className='w-400'
					items={[
						{ label: 'Item one', onClick: () => {} },
						{ label: 'Another one', onClick: () => {} },
						{ label: 'Third', onClick: () => {} },
						{ label: 'And a fourth', onClick: () => {} },
					]}
				/>
				<div className='relative flex items-center justify-end flex-1'>
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
						<div className='absolute right-0 z-50 overflow-hidden bg-white border border-gray-200 rounded-md shadow-md w-200 mt-100'>
							<div
								className='p-10 rounded-sm cursor-pointer hover:bg-primaryLightest'
								onClick={doLogout}
							>
								Logout
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
