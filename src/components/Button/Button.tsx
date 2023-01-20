import { memo } from 'react'
import { Size, ThemeColor } from '../../style/theme'
import { Icon, IconName } from '../Icon'
import { BaseButton } from './BaseButton'
import { IconContainer, StyledText } from './styled'

type Props = {
  children: string
  disabled?: boolean
  icon?: IconName
  color?: ThemeColor
  iconColor?: ThemeColor
  iconBgColor?: ThemeColor
  bgColor?: ThemeColor
  outlined?: boolean
  size?: Size
  inverse?: boolean
  className?: string
  bold?: boolean
  onClick?: () => void
}

const ButtonCmp = ({
  icon,
  children,
  outlined,
  iconColor,
  iconBgColor,
  inverse,
  bold,
  disabled,
  onClick,
  className,
  bgColor = 'primary',
  color = 'text',
  size = 'md'
}: Props) => {
  const textSize = size === 'lg' ? 'md' : 'sm'
  const iconSize = size === 'lg' ? 'xl' : 'sm'
  const backgroundColor = inverse ? color : bgColor
  const textColor = inverse ? bgColor : color

  return (
    <BaseButton
      bold={bold}
      bgColor={backgroundColor}
      size={size}
      outlined={outlined}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      <StyledText
        variant="span"
        size={textSize}
        btnSize={size}
        color={textColor}
        uppercase
        hasIcon={!!icon}
      >
        {children}
      </StyledText>
      {icon && (
        <IconContainer bgColor={iconBgColor}>
          <Icon name={icon} color={iconColor} size={iconSize} />
        </IconContainer>
      )}
    </BaseButton>
  )
}

export const Button = memo(ButtonCmp)
