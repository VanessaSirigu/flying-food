import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../api'
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

type Props = {
  tags?: TagDto[]
}

export const ProductDetail = ({ tags }: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<ProductDto>()
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    getProductById(id!)
      .then(setProduct)
      .catch((err) => console.log(err))
  }, [])

  const handleQuantity = (q: number) => {
    console.log(quantity)
    setQuantity(quantity + q)
  }

  return (
    <StyledPaper>
      <Stack>
        {!product && <Loader />}
        {product && tags && (
          <Stack direction="vertical">
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
          </Stack>
        )}
        <RandomProducts excludedId={id} />
      </Stack>
    </StyledPaper>
  )
}
