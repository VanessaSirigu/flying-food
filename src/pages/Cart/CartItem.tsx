import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton } from '../../components/Button'
import { Image } from '../../components/Image'
import { QuantitySelector } from '../../components/QuantitySelector'
import { Stack } from '../../components/Stack'
import { Tag } from '../../components/Tag'
import { Text } from '../../components/Text'
import { cartActions } from '../../features/cart/reducer'
import { makeSelectDeliveryById } from '../../features/deliveries/selector'
import { Product } from '../../features/products/model'

import {
  CartItemContainer,
  CartItemThumb,
  CentralSection,
  LeftSection,
  RightSection
} from './styled'

export type Props = {
  item: Product
  quantity: number
}

const CartItemCmp = ({ item, quantity }: Props) => {
  const dispatch = useDispatch()
  const delivery = useSelector(makeSelectDeliveryById(item.delivery))

  const totalPrice = (item.price.value * quantity).toFixed(2)

  const handleClick = (q: number) =>
    dispatch(cartActions.addOrUpdateCart({ prod: item, quantity: q }))

  const handleRemove = () => dispatch(cartActions.removeFromCart(item.id))

  return (
    <CartItemContainer centered between gap={64}>
      <LeftSection>
        <CartItemThumb>
          <Image src={item.imageUrl} alt={item.name} />
        </CartItemThumb>
        <Stack direction="vertical" gap={12}>
          <Tag title={delivery} size="sm" />
          <Text bold>{item.name}</Text>
          <Tag
            title={`${item.size.value}${item.size.type}`}
            size="sm"
            bgColor="lightGrey"
            textColor="darkGrey"
          />
        </Stack>
      </LeftSection>
      <CentralSection centered>
        <QuantitySelector
          quantity={quantity}
          onClick={handleClick}
          min={0}
          max={item.stock}
        />
      </CentralSection>
      <RightSection>
        <Text bold>{`${item.price.type} ${totalPrice}`}</Text>
      </RightSection>

      <IconButton
        icon="x"
        size="lg"
        bgColor="background"
        color="danger"
        onClick={handleRemove}
      />
    </CartItemContainer>
  )
}

export const CartItem = memo(CartItemCmp)
