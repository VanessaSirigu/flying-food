import { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../features/cart/reducer'
import { makeSelectCartQuantity } from '../../features/cart/selectors'
import { Product } from '../../features/products/model'
import { ProductCard } from '../ProductCard'

type Props = {
  product: Product
}

export const ConnectProductCardCmp = ({ product }: Props) => {
  const dispatch = useDispatch()
  const cartQuantity = useSelector(makeSelectCartQuantity(product.id))
  const [disabled, setDisabled] = useState(false)

  const remainingStock =
    typeof cartQuantity === 'undefined' ? product.stock : product.stock - cartQuantity

  const handleClick = () =>
    remainingStock > 0
      ? dispatch(cartActions.addOrUpdateCart({ prod: product, quantity: 1 }))
      : setDisabled(true)

  return (
    <ProductCard
      linkUrl={`/products/${product.id}`}
      id={product.id}
      imgSrc={product.imageUrl}
      name={product.name}
      rating={product.rating}
      price={`${product.price.type} ${product.price.value}`}
      isNew={product.new}
      isAvailable={product.available}
      disabled={disabled}
      onClick={handleClick}
    />
  )
}

export const ConnectedProductCard = memo(ConnectProductCardCmp)
