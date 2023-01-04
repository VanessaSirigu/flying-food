import { ThemeColor } from '../../style/theme'
import { Newsletter } from '../NewsletterBanner'
import { FooterWrapper } from './FooterWrapper'
import { StyledFooter, StyledText } from './styled'

type Props = {
  bgColor?: ThemeColor
}

export const Footer = ({ bgColor = 'backgroundDark' }: Props) => {
  return (
    <div>
      <Newsletter />
      <StyledFooter bgColor={bgColor}>
        <FooterWrapper />
        <StyledText color="lightGrey" size="sm">
          &copy; 2021 all rights reserved
        </StyledText>
      </StyledFooter>
    </div>
  )
}
