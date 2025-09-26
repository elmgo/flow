'use client'
import { useEffect, useState } from 'react'
import { useLoginMutation } from '@/store/api'
import { useDispatch } from 'react-redux'
import { setCredentials } from '@/store/authSlice'
import LayoutSimple from './LayoutSimple'
import toast from 'react-hot-toast'

export default function RegisterPage() {
	const dispatch = useDispatch()
	const [login, { isLoading, error }] = useLoginMutation()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const result = await login({ username, password }).unwrap()
			dispatch(setCredentials(result))
			localStorage.setItem('token', result.token)
		} catch (err) {
			// console.error('Login failed', err)
		}
	}

	useEffect(() => {
		if (error) {
			toast.error((error as any).data.message)
		}
	}, [error])

	return (
		<LayoutSimple>
			<div className='w-[400px] flex items-center justify-center h-full bg-greyLightest panel panelShadow'>
				<form onSubmit={handleSubmit} className='p-6'>
					<div className='flex flex-col items-center justify-center mb-20'>
						{/* <img src='/login.svg' className='w-40' /> */}
						<h2 className='text-[30px] text-center text-primary'>
							Sign up
						</h2>
					</div>
					<input
						type='text'
						placeholder='Username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className='mb-10'
					/>
					<input
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='mb-30'
					/>
					<button
						type='submit'
						disabled={isLoading}
						className='w-full button'
					>
						{isLoading ? (
							<img className='w-[30px]' src='/loading_white.svg' />
						) : (
							'Login'
						)}
					</button>

					<div className='underline cursor-pointer text-[12px] text-primary text-center mt-20'>
						Forgot your password?
					</div>
				</form>
			</div>
		</LayoutSimple>
	)
}
