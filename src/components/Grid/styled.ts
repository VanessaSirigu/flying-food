import styled from '@emotion/styled'

export const StyledGrid = styled.div<{
  column: number
  gap: number
  inline: number
  block: number
}>`
  display: grid;
  max-width: ${({ theme }) => theme.containers.content}px;
  grid-template-columns: repeat(${({ column }) => column}, 1fr);
  gap: ${({ gap }) => gap}px;
  /* grid-auto-rows: 340px; */
  margin-left: ${({ inline }) => inline / 2}px;
  padding-top: ${({ block }) => block / 2}px;
`
