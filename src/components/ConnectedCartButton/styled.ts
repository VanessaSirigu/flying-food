import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { center } from '../../style/utils'

export const StyledNtf = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.background};
  ${center}
  padding: 8px;
  position: absolute;
  top: -5px;
  left: 30px;
  z-index: 2;
`
export const StyledLink = styled(Link)`
  position: relative;
`
