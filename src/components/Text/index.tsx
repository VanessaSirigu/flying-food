import { ReactNode } from 'react'
import { ThemeColor } from '../../style/theme'
import { StyledText } from './styled'

type Props = {
  children: ReactNode
  color?: ThemeColor
}

export const Text = ({ children, color = 'text' }: Props) => {
  return <StyledText textColor={color}>{children}</StyledText>
}
