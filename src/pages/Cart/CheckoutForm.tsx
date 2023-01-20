import { useDispatch } from 'react-redux'
import { Button } from '../../components/Button'
import { cartActions } from '../../features/cart/reducer'
import { Order } from '../../features/orders/model'
import { ordersAction } from '../../features/orders/reducer'

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
