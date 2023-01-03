import { css } from '@emotion/react'
import { theme } from './theme'

export const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const container = css`
  max-width: ${theme.containers.content}px;
  margin: 0 auto;
`
