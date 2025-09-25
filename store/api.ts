import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.flow.vin/api/' }),
	endpoints: (builder) => ({
		login: builder.mutation<any, { username: string; password: string }>({
			query: (body) => ({
				url: 'auth/login',
				method: 'POST',
				body,
			}),
		}),
	}),
})

export const { useLoginMutation } = api
