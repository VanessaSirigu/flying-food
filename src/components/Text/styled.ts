import styled from '@emotion/styled'
import { ThemeColor } from '../../style/theme'

export const StyledText = styled.p<{ textColor: ThemeColor }>`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme, textColor }) => theme.colors[textColor]};
`
