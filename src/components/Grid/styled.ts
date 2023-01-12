import styled from '@emotion/styled'

export const StyledGrid = styled.div`
  display: grid;
  max-width: ${({ theme }) => theme.containers.content}px;
  grid-template-columns: repeat(4, 1fr);
  gap: 36px;
  grid-auto-rows: 340px;
  margin-left: 32px;
  padding-top: 32px;
`
