import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../api'
import { ProductDto } from '../../api/types'
import { Button, IconButton } from '../../components/Button'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { Rating } from '../../components/Rating'
import { Text } from '../../components/Text'
import { StyledCartRow } from './styled'

export const ProductDetail = () => {
  const params = useParams()
  const [quantity, setQuantity] = useState(0)
  const [product, setProduct] = useState<ProductDto>()

  // const { rating, name, imageUrl, price, id, new } = product

  console.log(params)

  useEffect(() => {
    getProductById('3c8a9a55-08b1-4e91-89b9-840f76b27df6')
      .then((p) => setProduct(p))
      .catch((err) => console.log(err))
    // .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      {!product && <Loader />}
      {product && (
        <div>
          <ProductCard
            imgSrc={product.imageUrl}
            name={product.name}
            rating={product.rating}
            price={`${product.price.type} ${product.price.value}`}
          />
          <Rating value={product.rating} />
          <Text>{product.description}</Text>
          <StyledCartRow>
            <Button icon="shopBag">Add to cart</Button>
            <IconButton
              icon="minus"
              onClick={() => (quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0))}
            />
            <Text>{quantity}</Text>
            <IconButton icon="plus" onClick={() => setQuantity(quantity + 1)} />
          </StyledCartRow>
        </div>
      )}
    </div>
  )
}
