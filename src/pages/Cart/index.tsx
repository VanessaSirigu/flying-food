import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SectionTitle } from '../../components/SectionTitle'
import { Stack } from '../../components/Stack'
import { selectCartProducts } from '../../features/cart/selectors'
import { deliveriesAction } from '../../features/deliveries/reducer'
import { CartItem } from './CartItem'
import { CheckoutForm } from './CheckoutForm'
import { StyledContainer } from './styled'

export const Cart = () => {
  const cartProducts = useSelector(selectCartProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(deliveriesAction.fetchDeliveries())
  }, [dispatch])

  return (
    <StyledContainer rounded>
      <SectionTitle main="shopping" secondary="cart" />
      <Stack direction="vertical">
        {cartProducts.map((p) => (
          <CartItem key={p.prod.id} item={p.prod} quantity={p.quantity} />
        ))}
      </Stack>
      <CheckoutForm />
    </StyledContainer>
  )
}
