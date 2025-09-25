'use client'
import { useLoginMutation } from '@/store/api'

export default function Login() {
	const [login] = useLoginMutation()

	async function doLogin() {
		await login({ username: 'roeioren', password: '12345678' })
	}

	return (
		<div onClick={doLogin} className='text-primary'>
			Login
		</div>
	)
}
