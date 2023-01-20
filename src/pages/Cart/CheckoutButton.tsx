import { useDispatch } from 'react-redux'
import { Button } from '../../components/Button'
import { Order } from '../../features/order/model'
import { ordersAction } from '../../features/order/reducer'

type Props = {
  order: Order
}

export const CheckoutButton = ({ order }: Props) => {
  const dispatch = useDispatch

  const handleClick = () => {
    dispatch(ordersAction.orderConfirmed(order))
  }

  return (
    <Button bgColor="secondary" color="textInverse" onClick={handleClick}>
      Checkout
    </Button>
  )
}
