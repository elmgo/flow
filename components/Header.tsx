import { logout } from '@/store/authSlice'
import Dropdown from './Dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export default function Header() {
	const dispatch = useDispatch()
	const user = useSelector((state: RootState) => state.auth.user)

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
