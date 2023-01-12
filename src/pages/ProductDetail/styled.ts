import styled from '@emotion/styled'
import { IconButton } from '../../components/Button'
import { Paper } from '../../components/Paper'

export const StyledPaper = styled(Paper)`
  height: 80vh;
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: flex-start;

  > p {
    max-width: 700px;
  }
`

export const StyledRandomProduct = styled.div``

export const OutlinedIcon = styled(IconButton)`
  border-radius: 1px solid black;
  background-color: white;
  outline: 1px solid black;
`
