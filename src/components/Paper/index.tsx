import { ReactNode } from 'react'
import { ThemeColor } from '../../style/theme'
import { StyledPaper } from './styled'

type Props = {
  children: ReactNode
  className?: string
  bgColor?: ThemeColor
  rounded?: boolean
  shadow?: boolean
}

export const Paper = ({
  children,
  className,
  rounded = true,
  shadow = true,
  bgColor = 'background'
}: Props) => {
  return (
    <StyledPaper
      bgColor={bgColor}
      rounded={rounded}
      shadow={shadow}
      className={className}
    >
      {children}
    </StyledPaper>
  )
}
