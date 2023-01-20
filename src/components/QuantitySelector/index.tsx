import { useCallback } from 'react'
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
  const canIncrement = typeof max !== 'number' || quantity + 1 <= max
  const canDecrement = typeof min !== 'number' || quantity - 1 >= min

  const onIncrement = useCallback(() => {
    if (canIncrement) onClick(1)
  }, [canIncrement, onClick])

  const onDecrement = useCallback(() => {
    if (canDecrement) onClick(-1)
  }, [canDecrement, onClick])

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
