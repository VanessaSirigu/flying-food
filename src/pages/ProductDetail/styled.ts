import styled from '@emotion/styled'
import { IconButton } from '../../components/Button'
import { Paper } from '../../components/Paper'

export const StyledPaper = styled(Paper)`
  padding: 32px;
  max-width: ${({ theme }) => theme.containers.content}px;
  width: 1260px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

export const OutlinedIcon = styled(IconButton)`
  border-radius: 1px solid black;
  background-color: white;
  outline: 1px solid black;
`
