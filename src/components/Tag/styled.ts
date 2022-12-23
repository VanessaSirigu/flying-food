import styled from '@emotion/styled'
import { ThemeColor } from '../../style/theme'

export const StyledTag = styled.div<{
  bgColor: ThemeColor
  className?: string
}>`
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  border-radius: ${({ theme }) => theme.radii.at(2)}px;
  padding: 10px;
`
