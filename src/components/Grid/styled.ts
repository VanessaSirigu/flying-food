import styled from '@emotion/styled'

export const StyledGrid = styled.div<{
  cols: number
  gap: number
}>`
  display: grid;
  max-width: ${({ theme }) => theme.containers.content}px;
  gap: ${({ gap }) => gap && gap}px;
  grid-template-columns: ${({ cols }) => cols && `repeat(${cols}, 1fr)}`};
`
