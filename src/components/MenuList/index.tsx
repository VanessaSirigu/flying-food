import { ThemeColor } from '../../style/theme'
import { MenuLink } from '../MenuLink'
import { Paper } from '../Paper'
import { StyledMenu } from './styled'

type Props = {
  textColor?: ThemeColor
}

export const MenuList = ({ textColor = 'textInverse' }: Props) => {
  return (
    <Paper bgColor="backgroundDark">
      <StyledMenu>
        <MenuLink title="burger" color={textColor} icon="burger" linkUrl="a" />
        <MenuLink title="pizza" color={textColor} icon="fullStar" linkUrl="b" />
        <MenuLink title="sushi" color={textColor} icon="burger" linkUrl="c" />
      </StyledMenu>
    </Paper>
  )
}
