'use client'
import { useEffect, useState } from 'react'
import { useLoginMutation } from '@/store/api'
import { useDispatch } from 'react-redux'
import { setCredentials } from '@/store/authSlice'
import LayoutSimple from './LayoutSimple'
import toast from 'react-hot-toast'
import { Transition } from '@headlessui/react'

const TOTAL_STEPS = 3

export default function RegisterPage() {
	const dispatch = useDispatch()
	const [login, { isLoading, error }] = useLoginMutation()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [fullname, setFullName] = useState('')
	const [email, setEmail] = useState('')
	const [step, setStep] = useState(0)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setStep((step) => step + 1)
	}

	useEffect(() => {
		if (error) {
			toast.error((error as any).data.message)
		}
	}, [error])

	function renderProgress() {
		return (
			<div className='flex justify-center gap-10 mt-20'>
				{[...new Array(TOTAL_STEPS)].map((_, i) => (
					<div
						key={i}
						className={`duration-300 w-8 h-8 rounded-full ${
							step === i ? 'bg-white' : 'bg-white/20'
						}`}
					/>
				))}
			</div>
		)
	}

	function renderStep1() {
		return (
			<div className='animate-fadeUp'>
				<input
					type='text'
					placeholder='Username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className='mb-10'
				/>
				<input
					type='email'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='mb-10'
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='mb-10'
				/>
				<input
					type='text'
					placeholder='Full name'
					value={fullname}
					onChange={(e) => setFullName(e.target.value)}
					className='mb-10'
				/>
			</div>
		)
	}

	function renderStep2() {
		return (
			<div className='w-full animate-fadeUp'>
				Out app is available for all android mobile devices for the full
				mobile experience
			</div>
		)
	}

	return (
		<LayoutSimple>
			<div className='!p-[0px] w-[700px] text-[14px] flex items-center justify-center h-full bg-greyLightest panel panelShadow'>
				<div className='flex'>
					<div className='flex flex-col text-center gap-30 w-250 bg-gradient-to-b from-primaryLight to-primaryDark p-50'>
						<div className='flex-1 '>
							<img
								src='/register_register.svg'
								className='w-full mb-10 h-60'
							/>
							<div className='font-secondary font-light text-[24px] leading-7 my-20 w-full text-white'>
								Sign up for a new account
							</div>
							<div className='w-full text-white/70'>
								Sign up for new account and some more text and some more
							</div>
						</div>
						{renderProgress()}
					</div>
					<div className='flex flex-col flex-1 p-50'>
						<div className='flex-1'>
							{step === 0 && renderStep1()}
							{step === 1 && renderStep2()}
						</div>
						<button
							onClick={(e) => handleSubmit(e)}
							type='submit'
							disabled={isLoading}
							className='w-full mt-30 button'
						>
							{isLoading ? (
								<img className='w-[30px]' src='/loading_white.svg' />
							) : (
								'Next'
							)}
						</button>
					</div>
				</div>
			</div>
		</LayoutSimple>
	)
}
