import styled from '@emotion/styled'
import { ThemeColor } from '../../style/theme'
import { container } from '../../style/utils'
import { FooterWrapper } from './FooterWrapper'

export const FooterContent = styled(FooterWrapper)`
  ${container}
`

export const StyledFooterLogo = styled.div``

export const StyledFooter = styled.footer<{
  bgColor: ThemeColor
}>`
  height: 224px;
  width: 100%;
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  border-top-left-radius: ${({ theme }) => theme.radii[3]}px;
  border-top-right-radius: ${({ theme }) => theme.radii[3]}px;
`
