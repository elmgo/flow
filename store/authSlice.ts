import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAuthState {
	token: string | null
	user: any | null
}

const initialState: IAuthState = {
	token: null,
	user: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (
			state,
			action: PayloadAction<{ accessToken: string; user?: any }>,
		) => {
			state.token = action.payload.accessToken
			state.user = action.payload.user ?? null
		},
		logout: (state) => {
			state.token = null
			state.user = null
			localStorage.removeItem('token')
		},
	},
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
