import { ReactNode } from 'react'
import { StyledGrid } from './styled'

type Props = {
  children: ReactNode
  cols: number
  gap?: number
}
export const Grid = ({ children, cols, gap = 12 }: Props) => {
  return (
    <StyledGrid gap={gap} cols={cols}>
      {children}
    </StyledGrid>
  )
}
