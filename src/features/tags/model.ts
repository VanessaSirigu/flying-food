import { TagDto } from '../../api/types'

export type Tag = TagDto

export type tagsState = {
  tags: Tag[]
  loading: boolean
  error?: string
}
