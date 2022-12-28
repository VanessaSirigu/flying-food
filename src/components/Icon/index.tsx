import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { theme, ThemeColor } from '../../style/theme'
import { iconMap } from './config'

export type IconName = keyof typeof iconMap

type Props = {
  name: IconName
  size?: SizeProp
  color?: ThemeColor
  bgColor?: ThemeColor
  className?: string
}

export const Icon = ({ name, size, className, color = 'text' }: Props) => {
  return (
    <FontAwesomeIcon
      icon={iconMap[name]}
      color={theme.colors[color]}
      size={size}
      className={className}
    />
  )
}
