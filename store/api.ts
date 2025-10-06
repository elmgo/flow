import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { RootState } from './store'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.flow.vin/api/',
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token
			if (token) {
				headers.set('authorization', `Bearer ${token}`)
			}
			return headers
		},
	}),
	endpoints: (builder) => ({
		login: builder.mutation<any, { username: string; password: string }>({
			query: (body) => ({
				url: 'auth/login',
				method: 'POST',
				body,
			}),
		}),

		getSessions: builder.query<
			any,
			{
				users?: string[]
				vehicle?: number
				track?: string
				page: number
				limit: number
			}
		>({
			query: ({ users, vehicle, track, page, limit }) => {
				const params = new URLSearchParams()

				if (users && users.length > 0) {
					users.forEach((u) => params.append('users', u)) // array format
				}
				if (vehicle) params.set('vehicle', vehicle.toString())
				if (track) params.set('track', track)
				params.set('page', page.toString())
				params.set('limit', limit.toString())

				return {
					url: `sessions?${params.toString()}`,
					method: 'GET',
				}
			},
		}),
	}),
})

export const { useLoginMutation } = api
