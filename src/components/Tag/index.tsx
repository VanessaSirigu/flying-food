import { ThemeColor } from '../../style/theme'
import { Text } from '../Text'
import { StyledTag } from './styled'

type Props = {
  title: string
  className?: string
  bgColor?: ThemeColor
  textColor?: ThemeColor
}

export const Tag = ({
  title,
  className,
  bgColor = 'secondary',
  textColor = 'textInverse'
}: Props) => {
  return (
    <StyledTag bgColor={bgColor} className={className}>
      <Text color={textColor} uppercase>
        {title}
      </Text>
    </StyledTag>
  )
}
