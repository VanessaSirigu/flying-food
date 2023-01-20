import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export const selectUserState = (state: RootState) => state.user

export const selectUserId = createSelector(selectUserState, (user) => user.id)
