import { ThemeColor } from '../../style/theme'
import { FooterWrapper } from './FooterWrapper'
import { FooterContent, StyledFooter } from './styled'

type Props = {
  bgColor?: ThemeColor
}

export const Footer = ({ bgColor = 'backgroundDark' }: Props) => {
  return (
    <StyledFooter bgColor={bgColor}>
      <FooterWrapper />
    </StyledFooter>
  )
}
