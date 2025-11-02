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
			query: (params) => ({
				url: 'sessionSummary',
				method: 'GET',
				params,
			}),
		}),
	}),
})

export const { useLoginMutation, useGetSessionsQuery } = api
