import { IconButton } from '../Button'
import { Stack } from '../Stack'
import { Text } from '../Text'

type Props = {
  quantity: number
  min?: number
  max?: number
  onClick: (q: number) => void
}

export const QuantitySelector = ({ quantity, onClick, min, max }: Props) => {
  const onDecrement = () => {
    if (typeof min !== 'number' || quantity - 1 >= min) {
      onClick(-1)
    }
  }

  const onIncrement = () => {
    if (typeof max !== 'number' || quantity + 1 <= max) {
      onClick(+1)
    }
  }

  return (
    <Stack centered>
      <IconButton outlined bgColor="background" icon="minus" onClick={onDecrement} />
      <Text>{quantity}</Text>
      <IconButton
        bgColor="backgroundDark"
        color="textInverse"
        icon="plus"
        onClick={onIncrement}
      />
    </Stack>
  )
}
