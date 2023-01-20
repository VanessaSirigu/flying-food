import { createAction, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { first } from '../../Utils'
import { Tag, TagsState } from './model'

const initialState: TagsState = {
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
      state.selectedTag = first(action.payload.filter((t) => !t.hidden))?.id
    },
    tagSelected(state, action: PayloadAction<string>) {
      state.selectedTag = action.payload
    }
  }
})

export const tagsActions = {
  ...tagsSlice.actions,
  fetchTags: createAction('tags/fetchTags')
}

export const tagsReducer = tagsSlice.reducer
