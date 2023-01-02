import { CSSProperties } from 'react'
import { Stack } from '../Stack'
import { Text } from '../Text'
import { StyledLogo } from './styled'

type Props = {
  inverse?: boolean
  direction?: 'vertical' | 'horizontal'
}

const textStyle: CSSProperties = { transform: 'translateY(4px)' }

const Logo = ({ inverse, direction = 'vertical' }: Props) => {
  const color = inverse ? 'textInverse' : 'text'
  const textProps = {
    uppercase: true,
    color,
    variant: 'span',
    size: direction === 'horizontal' ? 'lg' : 'md'
  } as const
  return (
    <Stack centered direction={direction} gap={8}>
      <StyledLogo fill={color} />
      <Stack direction="horizontal" gap={4} style={textStyle}>
        <Text {...textProps} bold>
          Flying
        </Text>
        <Text {...textProps}>Food</Text>
      </Stack>
    </Stack>
  )
}

export default Logo
