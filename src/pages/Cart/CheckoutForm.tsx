import { useDispatch } from 'react-redux'
import { Button } from '../../components/Button'
import { cartActions } from '../../features/cart/reducer'

export const CheckoutForm = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(cartActions.createOrder())
  }

  return (
    <Button bgColor="secondary" color="textInverse" onClick={handleClick}>
      Checkout
    </Button>
  )
}
