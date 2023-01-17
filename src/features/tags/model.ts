import { TagDto } from '../../api/types'

export type Tag = TagDto

export type TagsState = {
  tags: Tag[]
  loading: boolean
  selectedTag?: string
  error?: string
}
