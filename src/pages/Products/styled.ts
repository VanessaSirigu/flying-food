import styled from '@emotion/styled'
import { Button } from '../../components/Button'

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 32px;
  margin-bottom: 32px;
`

export const StyledButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.text};

  span {
    font-weight: bold;
  }
`
