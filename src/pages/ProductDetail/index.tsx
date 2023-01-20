import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Loader } from '../../components/Loader'
import { QuantitySelector } from '../../components/QuantitySelector'
import { Rating } from '../../components/Rating'
import { SingleProduct } from '../../components/SingleProduct'
import { Stack } from '../../components/Stack'
import { Text } from '../../components/Text'
import { cartActions } from '../../features/cart/reducer'
import { makeSelectCartQuantity } from '../../features/cart/selectors'
import { productsActions } from '../../features/products/reducer'
import { selectProduct, selectProductTags } from '../../features/products/selectors'
import { RandomProducts } from './RandomProducts'
import { StyledPaper, StyledVStack } from './styled'

export const ProductDetail = () => {
  const dispatch = useDispatch()
  const { id = '' } = useParams()
  const [quantity, setQuantity] = useState(0)

  const tags = useSelector(selectProductTags)
  const product = useSelector(selectProduct)
  const cartQuantity = useSelector(makeSelectCartQuantity(id))

  useEffect(() => {
    dispatch(productsActions.fetchProductById(id))
    setQuantity(0)
    return () => {
      dispatch(productsActions.resetCurrentProduct())
    }
  }, [dispatch, id])

  const handleClick = (q: number) => {
    dispatch(cartActions.addOrUpdateCart({ prod: product!, quantity: q }))
    setQuantity(0)
  }

  const handleQuantity = useCallback((q: number) => {
    setQuantity((currentQ) => currentQ + q)
  }, [])

  if (!product) return <Loader />

  const remainingStock =
    typeof cartQuantity === 'undefined' ? product.stock : product.stock - cartQuantity
  console.log(remainingStock)
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
            tags={tags}
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
              disabled={remainingStock === 0}
              onClick={() => handleClick(quantity)}
            >
              Add to cart
            </Button>
            <QuantitySelector
              onClick={handleQuantity}
              quantity={quantity}
              min={0}
              max={remainingStock}
            />
            {remainingStock - quantity === 0 && (
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
