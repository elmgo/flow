'use client'
import { Provider, useSelector } from 'react-redux'
import { store, RootState } from '../../store/store'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import LoginPage from '@/components/LoginPage'
import { useHydrated } from '@/hooks/useHydrated'
import { Toaster } from 'react-hot-toast'
import { redirect, usePathname } from 'next/navigation'

function LayoutContent({ children }: { children: React.ReactNode }) {
	const hydrated = useHydrated()
	const token = useSelector((state: RootState) => state.auth.token)
	const pathname = usePathname()
	const isRegister = pathname.includes('register')

	if (!hydrated) {
		return null
	}

	if (isRegister) {
		if (!token) {
			return children
		}
		redirect('/dashboard')
	}

	if (!token) {
		return <LoginPage />
	}

	return (
		<div className='flex text-[14px] h-screen font-primary bg-greyLightest text-greyDark'>
			<Sidebar />
			<div className='flex flex-col flex-1'>
				<Header />
				<div className='flex-1 pb-20 pr-20'>{children}</div>
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
			<Toaster position='bottom-right' reverseOrder={false} />
			<LayoutContent>{children}</LayoutContent>
		</Provider>
	)
}
