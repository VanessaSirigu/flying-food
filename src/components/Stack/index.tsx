import { CSSProperties, ReactNode } from 'react'
import { StyledStack, StyledStackProps } from './styled'

type Props = {
  children: ReactNode
  style?: CSSProperties
} & Partial<StyledStackProps>

export const Stack = ({
  children,
  centered,
  style,
  direction = 'horizontal',
  gap = 20
}: Props) => {
  return (
    <StyledStack style={style} direction={direction} gap={gap} centered={centered}>
      {children}
    </StyledStack>
  )
}
