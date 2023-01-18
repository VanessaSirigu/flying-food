import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { TagDto } from '../../api/types'
import { Button } from '../../components/Button'
import { Loader } from '../../components/Loader'
import { QuantitySelector } from '../../components/QuantitySelector'
import { Rating } from '../../components/Rating'
import { SingleProduct } from '../../components/SingleProduct'
import { Stack } from '../../components/Stack'
import { Text } from '../../components/Text'
import { cartAction } from '../../features/cart/reducer'
import { productsAction } from '../../features/products/reducer'
import { selectProduct } from '../../features/products/selectors'
import { RandomProducts } from './RandomProducts'
import { StyledPaper, StyledVStack } from './styled'

type Props = {
  tags?: TagDto[]
}

export const ProductDetail = ({ tags }: Props) => {
  const dispatch = useDispatch()
  const { id = '' } = useParams()
  const [quantity, setQuantity] = useState(0)

  const product = useSelector(selectProduct)

  useEffect(() => {
    dispatch(productsAction.fetchProductById(id))
    //     return () => {
    //   doSomething();
    // };
  }, [dispatch, id])

  const handleClick = (q: number) => {
    dispatch(cartAction.addOrUpdateCart({ prod: product!, quantity: q }))
  }

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
  if (!product) return <Loader />

  return (
    <StyledPaper>
      <Stack gap={64}>
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
              onClick={() => handleClick(quantity)}
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

        <RandomProducts excludedId={id} />
      </Stack>
    </StyledPaper>
  )
}
