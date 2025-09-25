'use client'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

export default function Login({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='font-primary'>
			<Provider store={store}>{children}</Provider>
		</div>
	)
}
