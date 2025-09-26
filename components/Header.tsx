import { logout } from '@/store/authSlice'
import Dropdown from './Dropdown'
import { useDispatch } from 'react-redux'

export default function Header() {
	const dispatch = useDispatch()

	function doLogout() {
		dispatch(logout())
	}

	return (
		<div className='flex items-center py-20 h-80'>
			<span className='mr-10 font-bold'>Session:</span>
			<div className='flex'>
				<Dropdown
					width={400}
					items={[
						{ label: 'Item one', onClick: () => {} },
						{ label: 'Another one', onClick: () => {} },
						{ label: 'Third', onClick: () => {} },
						{ label: 'And a fourth', onClick: () => {} },
					]}
				/>
				<div>
					<span onClick={doLogout}>Logout</span>
				</div>
			</div>

			{/* <SelectSession /> */}
		</div>
	)
}
