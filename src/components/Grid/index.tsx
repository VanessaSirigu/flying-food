import { ReactNode } from 'react'
import { StyledGrid } from './styled'

type Props = {
  children: ReactNode
}

export const Grid = ({ children }: Props) => {
  return <StyledGrid>{children}</StyledGrid>
}
