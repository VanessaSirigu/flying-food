import { ReactNode } from 'react'
import { ThemeColor, FontSize } from '../../style/theme'
import { StyledText, TextVariant } from './styled'

type Props = {
  children: ReactNode
  color?: ThemeColor
  variant?: TextVariant
  size?: FontSize
  bold?: boolean
  uppercase?: boolean
}

export const Text = ({
  children,
  bold,
  size,
  uppercase,
  color = 'text',
  variant = 'p'
}: Props) => {
  return (
    <StyledText
      as={variant}
      variant={variant}
      textColor={color}
      textSize={size}
      bold={bold}
      uppercase={uppercase}
    >
      {children}
    </StyledText>
  )
}
