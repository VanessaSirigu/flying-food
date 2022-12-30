import { ReactNode } from 'react'
import { StyledStack, StyledStackProps } from './styled'

type Props = {
  children: ReactNode
} & Partial<StyledStackProps>

export const Stack = ({
  children,
  direction = 'horizontal',
  gap = 12,
  align = 'center'
}: Props) => {
  return (
    <StyledStack direction={direction} gap={gap} align={align}>
      {children}
    </StyledStack>
  )
}
