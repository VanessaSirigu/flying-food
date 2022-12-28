import { ReactNode } from 'react'
import { ThemeColor, FontSize } from '../../style/theme'
import { StyledText, StyledTextProps, TextVariant } from './styled'

type Props = {
  children: ReactNode
  className?: string
} & Partial<StyledTextProps>

export const Text = ({
  children,
  bold,
  size,
  uppercase,
  capitalize,
  inline,
  color = 'text',
  variant = 'p'
}: Props) => {
  return (
    <StyledText
      as={variant}
      variant={variant}
      color={color}
      size={size}
      bold={bold}
      uppercase={uppercase}
      capitalize={capitalize}
      inline={inline}
    >
      {children}
    </StyledText>
  )
}
