import styled from '@emotion/styled'
import { ThemeColor } from '../../style/theme'

export const StyledPaper = styled.div<{
  bgColor: ThemeColor
  className?: string
  background?: boolean
  rounded?: boolean
  shadow?: boolean
}>`
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  border-radius: ${({ theme, rounded }) => rounded && theme.radii.at(1) + 'em'};
  box-shadow: ${({ shadow }) => shadow && '0 8px 40px rgb(0, 0, 0, 0.1)'};
`
