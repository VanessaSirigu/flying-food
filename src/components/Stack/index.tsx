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
  between,
  direction = 'horizontal',
  gap = 20
}: Props) => {
  return (
    <StyledStack
      className={className}
      style={style}
      direction={direction}
      gap={gap}
      centered={centered}
      between={between}
    >
      {children}
    </StyledStack>
  )
}
