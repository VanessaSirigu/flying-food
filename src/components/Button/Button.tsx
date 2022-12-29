import { Size, ThemeColor } from '../../style/theme'
import { Icon, IconName } from '../Icon'
import { Text } from '../Text'
import { BaseButton } from './BaseButton'
import { IconContainer, TextContainer } from './styled'

type Props = {
  children: string
  icon?: IconName
  color?: ThemeColor
  iconColor?: ThemeColor
  iconBgColor?: ThemeColor
  bgColor?: ThemeColor
  outlined?: boolean
  size?: Size
  inverse?: boolean
}

export const Button = ({
  icon,
  children,
  outlined,
  iconColor,
  iconBgColor,
  inverse,
  bgColor = 'primary',
  color = 'text',
  size = 'md'
}: Props) => {
  const textSize = size === 'lg' ? 'md' : 'sm'
  const iconSize = size === 'lg' ? 'xl' : 'sm'
  const backgroundColor = inverse ? color : bgColor
  const textColor = inverse ? bgColor : color

  return (
    <BaseButton bgColor={backgroundColor} size={size} outlined={outlined}>
      <TextContainer size={size} hasIcon={!!icon}>
        <Text variant="span" size={textSize} color={textColor} uppercase>
          {children}
        </Text>
      </TextContainer>
      {icon && (
        <IconContainer bgColor={iconBgColor}>
          <Icon name={icon} color={iconColor} size={iconSize} />
        </IconContainer>
      )}
    </BaseButton>
  )
}
