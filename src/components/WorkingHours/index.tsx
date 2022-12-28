import { Icon } from '../Icon'
import { Stack } from '../Stack'
import { Text } from '../Text'

type Props = {
  opening: string
  closing: string
  variant: 'light' | 'dark'
}

const variantColors = {
  light: { text: 'textInverse', icon: 'lightGrey' },
  dark: { text: 'textInverse', icon: 'textInverse' }
} as const

export const WorkingHours = ({ opening, closing, variant }: Props) => {
  const { text, icon } = variantColors[variant]
  return (
    <Stack direction="horizontal" gap={20}>
      <Icon name="clock" color={icon} size="2x" />
      <div>
        <Text variant="p" color={text} size="sm" uppercase>
          working hours
        </Text>
        <Text variant="p" color={text} size="sm">
          {opening} {closing}
        </Text>
      </div>
    </Stack>
  )
}
