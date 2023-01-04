import { footerLinks } from '../../Utils/footerLinks'
import { Logo } from '../Logo'
import { SocialIcon } from '../SocialIcon'
import { WorkingHours } from '../WorkingHours'
import { FooterMenuList } from './FooterMenuList'
import { FooterContent, StyledFooterLogo, StyledWorkingHours } from './styled'

export const FooterWrapper = () => {
  return (
    <FooterContent>
      <StyledFooterLogo>
        <Logo direction="horizontal" inverse />
      </StyledFooterLogo>
      <FooterMenuList footerListData={footerLinks} />
      <StyledWorkingHours>
        <WorkingHours opening="8:00" closing="23:00" variant="light" />
      </StyledWorkingHours>
      <SocialIcon color="textInverse" />
    </FooterContent>
  )
}
