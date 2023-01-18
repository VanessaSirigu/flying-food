import { useDispatch } from 'react-redux'
import { IconButton } from '../../../components/Button'
import { QuantitySelector } from '../../../components/QuantitySelector'
import { Stack } from '../../../components/Stack'
import { Text } from '../../../components/Text'
import { cartAction } from '../../../features/cart/reducer'
import { Product as ProductType } from '../../../features/products/model'
import { Product } from './Product'

import { StyledPaper } from './styled'

type Props = {
  item: ProductType
  quantity: number
}

export const CartItem = ({ item, quantity }: Props) => {
  const dispatch = useDispatch()

  const handleClick = (q: number) => {
    dispatch(cartAction.addOrUpdateCart({ prod: item, quantity: q }))
  }

  return (
    <StyledPaper bgColor="cardGrey">
      <Stack centered>
        <Product imageUrl={item.imageUrl} name={item.name} size={item.size} />
        <QuantitySelector
          quantity={quantity}
          onClick={handleClick}
          min={1}
          max={item.stock}
        />
        <Text bold>
          {item.price.type} {item.price.value}
        </Text>
        <IconButton icon="x" color="danger" bgColor="textInverse" />
      </Stack>
    </StyledPaper>
  )
}
