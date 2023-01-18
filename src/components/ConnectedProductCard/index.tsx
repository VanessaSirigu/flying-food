import { useDispatch } from 'react-redux'
import { cartAction } from '../../features/cart/reducer'
import { Product } from '../../features/products/model'
import { ProductCard } from '../ProductCard'

type Props = {
  product: Product
}

export const ConnectedProductCard = ({ product }: Props) => {
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
      onClick={() => dispatch(cartAction.addOrUpdateCart({ prod: product, quantity: 1 }))}
    />
  )
}
