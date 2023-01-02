import styled from '@emotion/styled'
import { ReactComponent as LogoSvg } from '../../assets/logo.svg'
import { ThemeColor } from '../../style/theme'

export const StyledLogo = styled(LogoSvg)<{
  fill: ThemeColor
}>`
  width: 60px;
  height: auto;
  fill: ${({ theme, fill }) => theme.colors[fill]};
`
