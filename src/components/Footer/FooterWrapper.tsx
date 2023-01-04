import Logo from '../Logo'
import { SocialIcon } from '../SocialIcon'
import { Stack } from '../Stack'
import { Text } from '../Text'
import { WorkingHours } from '../WorkingHours'
import { FooterMenuList } from './FooterMenuList'
import {
  FooterContent,
  StyledFooterLogo,
  StyledMenuList,
  StyledText,
  StyledWorkingHours
} from './styled'

export const FooterWrapper = () => {
  return (
    <FooterContent>
      <StyledFooterLogo>
        <Logo direction="horizontal" inverse />
      </StyledFooterLogo>
      <StyledMenuList>
        <FooterMenuList textColor="textInverse" tag="test" />
        <FooterMenuList textColor="textInverse" tag="test" />
        <FooterMenuList textColor="textInverse" tag="test" />
        <FooterMenuList textColor="textInverse" tag="test" />
        <FooterMenuList textColor="textInverse" tag="test" />
        <FooterMenuList textColor="textInverse" tag="test" />
        <FooterMenuList textColor="textInverse" tag="test" />
        <FooterMenuList textColor="textInverse" tag="test" />
      </StyledMenuList>
      <StyledWorkingHours>
        <WorkingHours opening="8:00" closing="23:00" variant="light" />
      </StyledWorkingHours>
      <SocialIcon color="textInverse" />
    </FooterContent>
  )
}
