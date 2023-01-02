import styled from '@emotion/styled'
import { Size, ThemeColor } from '../../style/theme'

export const StyledTag = styled.div<{
  bgColor: ThemeColor
  size: Size
  className?: string
}>`
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  border-radius: ${({ theme }) => theme.radii.at(2)}px;
  padding-inline: ${({ theme, size }) => theme.spacings[size]};
  padding-block: ${({ theme, size }) => theme.spacings[size]};
  /* width: fit-content; */
`
