import { useGetSessionsQuery } from '@/store/api'

export default function SelectSession() {
	const user = JSON.parse(localStorage.getItem('user') as string)

	const { data: sessions = [] } = useGetSessionsQuery({
		page: 1,
		limit: 100000000,
		users: [user.id],
	})

	return (
		<div className='fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/30'>
			<div className='bg-white rounded-lg w-500 p-50'>Select session</div>
		</div>
	)
}
