import { useDispatch } from 'react-redux'
import { IconButton } from '../../components/Button'
import { Image } from '../../components/Image'
import { QuantitySelector } from '../../components/QuantitySelector'
import { Stack } from '../../components/Stack'
import { Tag } from '../../components/Tag'
import { Text } from '../../components/Text'
import { cartAction } from '../../features/cart/reducer'
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
  onClick: () => void
}

export const CartItem = ({ item, quantity, onClick }: Props) => {
  const dispatch = useDispatch()

  const handleClick = (q: number) =>
    dispatch(cartAction.addOrUpdateCart({ prod: item, quantity: q }))

  return (
    <CartItemContainer centered between gap={64}>
      <LeftSection>
        <CartItemThumb>
          <Image src={item.imageUrl} alt={item.name} />
        </CartItemThumb>
        <Stack direction="vertical" gap={12}>
          <Tag title={item.delivery} size="sm" />

          <Text bold size="lg">
            {item.name}
          </Text>
          <Tag
            title={`${item.size.type} ${item.size.value}`}
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
        <Text bold size="lg">
          {`${item.price.type} ${item.price.value}`}
        </Text>
      </RightSection>

      <IconButton icon="x" size="lg" bgColor="background" color="danger" />
    </CartItemContainer>
  )
}
