import { ThemeColor } from '../../style/theme'
import { IconName } from '../Icon'
import { MenuLink } from '../MenuLink'

type Props = {
  textColor?: ThemeColor
  icon?: IconName
  tag: string
}

export const FooterMenuList = ({ textColor }: Props) => {
  return (
    <div>
      <MenuLink title="test" color={textColor} linkUrl="#" />
    </div>
  )
}
