import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../api'
import { ProductDto } from '../../api/types'
import { Button, IconButton } from '../../components/Button'
import { Loader } from '../../components/Loader'
import { QuantitySelector } from '../../components/QuantitySelector'
import { Rating } from '../../components/Rating'
import { SingleProduct } from '../../components/SingleProduct'
import { Stack } from '../../components/Stack'
import { Text } from '../../components/Text'
import { StyledPaper } from './styled'

export const ProductDetail = () => {
  const params = useParams()
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
        <StyledPaper>
          <SingleProduct
            src={product.imageUrl}
            alt={product.name}
            name={product.name}
            rating={product.rating}
            price={`${product.price.type} ${product.price.value}`}
          />
          <Rating value={product.rating} />
          <Text>{product.description}</Text>
          <Stack centered>
            <Button
              iconBgColor="primary"
              iconColor="backgroundDark"
              icon="shopBag"
              bgColor="backgroundDark"
              color="textInverse"
            >
              Add to cart
            </Button>
            <QuantitySelector />
          </Stack>
        </StyledPaper>
      )}
    </div>
  )
}
