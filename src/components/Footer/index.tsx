import { ThemeColor } from '../../style/theme'
import Logo from '../Logo'
import { Stack } from '../Stack'
import { Text } from '../Text'
import { FooterWrapper } from './FooterWrapper'
import { StyledFooter, StyledFooterLogo, StyledText } from './styled'

type Props = {
  bgColor?: ThemeColor
}

export const Footer = ({ bgColor = 'backgroundDark' }: Props) => {
  return (
    <StyledFooter bgColor={bgColor}>
      <FooterWrapper />
      <StyledText color="lightGrey" size="sm">
        &copy; 2021 all rights reserved
      </StyledText>
    </StyledFooter>
  )
}
