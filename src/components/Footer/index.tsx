import { ThemeColor } from '../../style/theme'
import Logo from '../Logo'
import { Newsletter } from '../Newsletter'
import { Stack } from '../Stack'
import { Text } from '../Text'
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
