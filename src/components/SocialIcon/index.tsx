import { ThemeColor } from '../../style/theme'
import { Icon } from '../Icon'
import { StyledSocial } from './styled'

const config = [
  { name: 'twitter', linkUrl: 'twitter.com' },
  { name: 'facebook', linkUrl: '#' },
  { name: 'googlePlus', linkUrl: '#' },
  { name: 'instagram', linkUrl: '#' },
  { name: 'linkedin', linkUrl: '#' }
] as const

type Props = {
  color?: ThemeColor
}

export const SocialIcon = ({ color }: Props) => {
  return (
    <StyledSocial color="lighGrey">
      {config.map(({ name }) => (
        <Icon key={name} name={name} color={color} />
      ))}
    </StyledSocial>
  )
}
