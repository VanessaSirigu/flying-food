import { ReactNode } from 'react'
import { StyledBaseButton, StyledBaseButtonProps } from './styled'

type Props = {
  children: ReactNode
  onClick?: () => void
  className?: string
  squared?: boolean
} & Partial<StyledBaseButtonProps>

export const BaseButton = ({
  children,
  className,
  outlined,
  squared,
  onClick,
  bgColor = 'primary',
  radius = 4,
  size = 'md'
}: Props) => {
  return (
    <StyledBaseButton
      bgColor={bgColor}
      radius={radius}
      size={size}
      outlined={outlined}
      className={className}
      squared={squared}
      onClick={onClick}
    >
      {children}
    </StyledBaseButton>
  )
}
