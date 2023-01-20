import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export const selectTagsState = (state: RootState) => state.tags

export const selectTags = createSelector(selectTagsState, (t) => t.tags)

export const selectSelectedTag = createSelector(selectTagsState, (t) => t.selectedTag)

export const selectVisibleTags = createSelector(selectTags, (tags) =>
  tags.filter((t) => !t.hidden)
)
