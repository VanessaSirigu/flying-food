import { NavLink } from 'react-router-dom'
import { ThemeColor } from '../../style/theme'
import { Icon } from '../Icon'
import { IconName } from '../Icon/config'
import { Text } from '../Text'
import { StyledItem } from './styled'

type Props = {
  title: string
  icon?: IconName
  color?: ThemeColor
  linkUrl: string
}

export const MenuLink = ({ title, icon, color, linkUrl }: Props) => {
  return (
    <NavLink to={linkUrl}>
      <StyledItem>
        {icon && <Icon name={icon} color={color} />}
        <Text color={color} uppercase size="sm">
          {title}
        </Text>
      </StyledItem>
    </NavLink>
  )
}
