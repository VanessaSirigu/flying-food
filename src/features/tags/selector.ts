import type { RootState } from '../store'

export const selectTags = (state: RootState) => state.tags.tags

export const selectSelectedTag = (state: RootState) => state.tags.selectedTag

export const selectVisibleTags = (state: RootState) =>
  state.tags.tags.filter((t) => !t.hidden)
