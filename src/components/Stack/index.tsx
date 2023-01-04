import { CSSProperties, ReactNode } from 'react'
import { StyledStack, StyledStackProps } from './styled'

type Props = {
  children: ReactNode
  style?: CSSProperties
  className?: string
} & Partial<StyledStackProps>

export const Stack = ({
  children,
  centered,
  style,
  className,
  direction = 'horizontal',
  gap = 20
}: Props) => {
  return (
    <StyledStack
      style={style}
      direction={direction}
      gap={gap}
      centered={centered}
      className={className}
    >
      {children}
    </StyledStack>
  )
}
