import { Button, IconButton } from '../../components/Button'
import { Text } from '../../components/Text'

export const CartRow = () => {
  return (
    <div>
      <Button icon="shopBag">Add to cart</Button>
      {/* <IconButton
        icon="minus"
        onClick={() => (quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0))}
      />
      <Text>{quantity}</Text>
      <IconButton icon="plus" onClick={() => setQuantity(quantity + 1)} /> */}
    </div>
  )
}
