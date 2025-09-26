'use client'
import { useState } from 'react'
import { useLoginMutation } from '@/store/api'
import { useDispatch } from 'react-redux'
import { setCredentials } from '@/store/authSlice'

export default function LoginPage() {
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
			console.error('Login failed', err)
		}
	}

	return (
		<div className='flex items-center justify-center h-screen bg-greyLightest'>
			<form
				onSubmit={handleSubmit}
				className='p-6 bg-white rounded-lg shadow-md w-80'
			>
				<h1 className='mb-4 text-lg font-bold'>Login</h1>
				<input
					type='text'
					placeholder='Username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className='w-full p-2 mb-3 border rounded'
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='w-full p-2 mb-3 border rounded'
				/>
				<button type='submit' disabled={isLoading} className='button'>
					{isLoading ? 'Logging in...' : 'Login'}
				</button>
				{error && <p className='mt-2 text-red-500'>Invalid credentials</p>}
			</form>
		</div>
	)
}
