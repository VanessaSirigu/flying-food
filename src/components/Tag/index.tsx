import { memo } from 'react'
import { ThemeColor, Size } from '../../style/theme'
import { Text } from '../Text'
import { StyledTag } from './styled'

type Props = {
  title: string
  className?: string
  bgColor?: ThemeColor
  textColor?: ThemeColor
  size?: Size
}

const TagCmp = ({
  title,
  className,
  size = 'md',
  bgColor = 'secondary',
  textColor = 'textInverse'
}: Props) => {
  return (
    <StyledTag bgColor={bgColor} size={size} className={className}>
      <Text color={textColor} uppercase size={size} bold>
        {title}
      </Text>
    </StyledTag>
  )
}

export const Tag = memo(TagCmp)
