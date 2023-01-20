import { createSlice } from '@reduxjs/toolkit'
import { UserState } from './model'

const initialState: UserState = {
  id: 'user_01'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export const userActions = userSlice.actions

export const userReducer = userSlice.reducer
