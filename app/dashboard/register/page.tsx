'use client'
import RegisterPage from '@/components/RegisterPage'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export default function Register({ children }: { children: React.ReactNode }) {
	const token = useSelector((state: RootState) => state.auth.token)

	return <RegisterPage />
}
