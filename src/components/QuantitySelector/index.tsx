import { IconButton } from '../Button'
import { Stack } from '../Stack'
import { Text } from '../Text'

type Props = {
  quantity: number
  onClick: (q: number) => void
}

export const QuantitySelector = ({ quantity, onClick }: Props) => {
  return (
    <Stack centered>
      <IconButton
        outlined
        bgColor="background"
        icon="minus"
        // onClick={() => (quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0))}
        onClick={() => onClick(-1)}
      />
      <Text>{quantity}</Text>
      <IconButton
        bgColor="backgroundDark"
        color="textInverse"
        icon="plus"
        // onClick={() => setQuantity(quantity + 1)}
        onClick={() => onClick(1)}
      />
    </Stack>
  )
}
