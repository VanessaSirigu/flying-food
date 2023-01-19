import { useSelector } from 'react-redux'
import { SectionTitle } from '../../components/SectionTitle'
import { Stack } from '../../components/Stack'
import { selectCartProducts } from '../../features/cart/selectors'
import { CartItem } from './CartItem'
import { StyledContainer } from './styled'

export const Cart = () => {
  const cartProducts = useSelector(selectCartProducts)

  return (
    <StyledContainer rounded>
      <SectionTitle main="shopping" secondary="cart" />
      <Stack direction="vertical">
        {cartProducts.map((p) => (
          <CartItem item={p.prod} quantity={p.quantity} onClick={() => {}} />
        ))}
      </Stack>
    </StyledContainer>
  )
}
