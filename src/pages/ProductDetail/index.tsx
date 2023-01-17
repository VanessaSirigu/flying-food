import { useCallback, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../api'
import { TagDto } from '../../api/types'
import { Button } from '../../components/Button'
import { Loader } from '../../components/Loader'
import { QuantitySelector } from '../../components/QuantitySelector'
import { Rating } from '../../components/Rating'
import { SingleProduct } from '../../components/SingleProduct'
import { Stack } from '../../components/Stack'
import { Text } from '../../components/Text'
import { useFetch } from '../../hooks/useFetch'
import { RandomProducts } from './RandomProducts'
import { StyledPaper, StyledVStack } from './styled'
// import { useSelector } from

type Props = {
  tags?: TagDto[]
}

export const ProductDetail = ({ tags }: Props) => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(0)

  // const product = useSelector

  const getProduct = useCallback(() => {
    setQuantity(0)
    return getProductById(id!)
  }, [id])

  const { resource: product, loading } = useFetch(getProduct)

  const productTags = useMemo(
    () =>
      tags && product?.tags
        ? tags.filter(({ id }) => product.tags.includes(id))
        : undefined,
    [product?.tags, tags]
  )

  const handleQuantity = useCallback((q: number) => {
    setQuantity((currentQ) => currentQ + q)
  }, [])

  return (
    <StyledPaper>
      <Stack gap={64}>
        {loading && <Loader />}
        {product && (
          <StyledVStack direction="vertical" gap={32}>
            <SingleProduct
              src={product.imageUrl}
              alt={product.name}
              name={product.name}
              rating={product.rating}
              price={`${product.price.type} ${product.price.value}`}
              isNew={product.new}
              tags={productTags}
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
          </StyledVStack>
        )}
        <RandomProducts excludedId={id} />
      </Stack>
    </StyledPaper>
  )
}
