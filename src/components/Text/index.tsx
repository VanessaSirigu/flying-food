import { ReactNode } from 'react'
import { StyledText } from './styled'

type Props = {
  children: ReactNode
  fontColor?: string
}

export const Text = ({ children, fontColor = 'black' }: Props) => {
  return <StyledText fontColor={fontColor}>{children}</StyledText>
}
