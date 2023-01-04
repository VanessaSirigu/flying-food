import { ThemeColor } from '../../style/theme'
import { MenuLink } from '../MenuLink'
import { StyledMenuList } from './styled'

export type FooterLinksInfo = {
  id: number
  tag: string
  url: string
}

type Props = {
  footerListData: FooterLinksInfo[]
  textColor?: ThemeColor
}

export const FooterMenuList = ({ footerListData, textColor = 'lightGrey' }: Props) => {
  return (
    <StyledMenuList>
      {footerListData.map((el) => {
        return <MenuLink key={el.id} title={el.tag} linkUrl={el.url} color={textColor} />
      })}
    </StyledMenuList>
  )
}
