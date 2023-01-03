import { ThemeColor } from '../../style/theme'
import { IconName } from '../Icon'
import { MenuLink } from '../MenuLink'
import { Paper } from '../Paper'
import { StyledMenu } from './styled'

type Props = {
  textColor?: ThemeColor
  icon?: IconName
  tag: string
}

export const MenuList = ({ textColor = 'textInverse', icon, tag }: Props) => {
  return (
    <Paper bgColor="backgroundDark">
      <StyledMenu>
        <MenuLink title={tag} color={textColor} icon={icon} linkUrl="#" />
      </StyledMenu>
    </Paper>
  )
}
