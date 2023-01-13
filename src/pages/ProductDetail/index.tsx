import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById, getTags } from '../../api'
import { ProductDto, TagDto } from '../../api/types'
import { Button } from '../../components/Button'
import { Loader } from '../../components/Loader'
import { QuantitySelector } from '../../components/QuantitySelector'
import { Rating } from '../../components/Rating'
import { SingleProduct } from '../../components/SingleProduct'
import { Stack } from '../../components/Stack'
import { Text } from '../../components/Text'
import { RandomProducts } from './RandomProducts'
import { StyledPaper } from './styled'

export const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<ProductDto>()
  const [quantity, setQuantity] = useState(0)
  const [tags, setTags] = useState<TagDto[]>()
  // const { rating, name, imageUrl, price, id, new } = product
  const param = id ? id : ''

  useEffect(() => {
    Promise.all([getProductById(param), getTags()])
      .then(([product, tags]) => {
        setProduct(product)
        setTags(tags)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleQuantity = (q: number) => {
    console.log(quantity)
    setQuantity(quantity + q)
  }

  return (
    <div>
      {!product && <Loader />}
      {product && tags && (
        <StyledPaper>
          <SingleProduct
            src={product.imageUrl}
            alt={product.name}
            name={product.name}
            rating={product.rating}
            price={`${product.price.type} ${product.price.value}`}
            isNew={product.new}
            tags={tags.filter(({ id }) => product.tags.includes(id))}
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
            <QuantitySelector
              onClick={handleQuantity}
              quantity={quantity}
              min={0}
              max={product.stock}
            />
            {quantity >= product.stock && (
              <Text uppercase color="danger">
                max quantity
              </Text>
            )}
          </Stack>
          <RandomProducts />
        </StyledPaper>
      )}
    </div>
  )
}
