import { ReactNode } from 'react'
import { StyledText, StyledTextProps } from './styled'

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
  className,
  centered,
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
      className={className}
      centered={centered}
    >
      {children}
    </StyledText>
  )
}
