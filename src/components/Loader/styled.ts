import styled from '@emotion/styled'
import { center } from '../../style/utils'

export const StyledContainer = styled.div`
  ${center}
  height: 300px;
`

export const StyledLoader = styled.div`
  width: 100px;
  height: 100px;
  :after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: ${({ theme }) =>
      `${theme.colors.backgroundDark} transparent ${theme.colors.backgroundDark} transparent`};
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
