import { useSelector } from 'react-redux'
import { selectNumberOfProducts } from '../../features/cart/selectors'
import { IconButton } from '../Button'
import { StyledNtf, StyledLink } from './styled'

export const ConnectedCartButton = () => {
  const quantity = useSelector(selectNumberOfProducts)

  return (
    <StyledLink to="/cart">
      {quantity > 0 && <StyledNtf>{quantity}</StyledNtf>}
      <IconButton size="lg" icon="cart" bgColor="backgroundDark" color="textInverse" />
    </StyledLink>
  )
}
