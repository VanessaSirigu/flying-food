import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Tag, tagsState } from './model'

const initialState: tagsState = {
  tags: [],
  loading: false
}

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    loadingChanged(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    tagsLoaded(state, action: PayloadAction<Tag[]>) {
      state.tags = action.payload
    }
  }
})

export const tagsAction = tagsSlice.actions

export const tagsReducer = tagsSlice.reducer
