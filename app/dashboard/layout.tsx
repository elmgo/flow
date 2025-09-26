'use client'
import { Provider, useSelector } from 'react-redux'
import { store, RootState } from '../../store/store'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import LoginPage from '@/components/LoginPage'
import { useHydrated } from '@/hooks/useHydrated'

function LayoutContent({ children }: { children: React.ReactNode }) {
	const hydrated = useHydrated()
	const token = useSelector((state: RootState) => state.auth.token)

	if (!hydrated) {
		return null
	}

	if (!token) {
		return <LoginPage />
	}

	return (
		<div className='flex text-[14px] h-screen font-primary bg-greyLightest text-greyDark'>
			<Sidebar />
			<div className='flex flex-col flex-1'>
				<Header />
				<div className='flex-1 pr-20'>{children}</div>
			</div>
		</div>
	)
}

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<Provider store={store}>
			<LayoutContent>{children}</LayoutContent>
		</Provider>
	)
}
