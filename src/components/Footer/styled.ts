import styled from '@emotion/styled'
import { ThemeColor } from '../../style/theme'

export const StyledFooter = styled.div<{
  bgColor: ThemeColor
}>`
  height: 224px;
  width: 100%;
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  border-top-left-radius: ${({ theme }) => theme.radii[3]}px;
  border-top-right-radius: ${({ theme }) => theme.radii[3]}px;
  margin-top: 100px;
`
