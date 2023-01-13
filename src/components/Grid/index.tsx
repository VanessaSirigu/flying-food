import { ReactNode } from 'react'
import { StyledGrid } from './styled'

type Props = {
  children: ReactNode
  column: number
  gap?: number
  inline?: number
  block?: number
}

export const Grid = ({ children, column, gap = 20, inline = 24, block = 24 }: Props) => {
  return (
    <StyledGrid column={column} gap={gap} inline={inline} block={block}>
      {children}
    </StyledGrid>
  )
}
