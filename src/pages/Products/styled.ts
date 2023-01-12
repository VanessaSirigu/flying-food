import styled from '@emotion/styled'
import { Button } from '../../components/Button'

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.containers.content}px;
`

export const StyledButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.text};
`
