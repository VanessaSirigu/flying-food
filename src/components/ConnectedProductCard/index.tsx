import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../features/cart/reducer'
import { Product } from '../../features/products/model'
import { ProductCard } from '../ProductCard'

type Props = {
  product: Product
}

export const ConnectProductCardCmp = ({ product }: Props) => {
  const dispatch = useDispatch()
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
      onClick={() =>
        dispatch(cartActions.addOrUpdateCart({ prod: product, quantity: 1 }))
      }
    />
  )
}

export const ConnectedProductCard = memo(ConnectProductCardCmp)
