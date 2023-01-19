import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCartProducts } from '../../features/cart/selectors'
import { Avatar } from '../Avatar'
import { Button, IconButton } from '../Button'
import {
  StyledHeader,
  StyledRightSide,
  StyledSignIn,
  StyledLowHeaderContent,
  StyledLogo,
  StyledLowHeader,
  StyledSearch,
  StyledNtf
} from './styled'
import { UpperHeader } from './UpperHeader'

const languages = ['EN', 'IT']

type Props = {
  className?: string
}

export const Header = ({ className }: Props) => {
  const productsOnCart = useSelector(selectCartProducts)

  const quantityOnCart = productsOnCart.reduce((acc, curr) => acc + curr.quantity, 0)

  return (
    <StyledHeader className={className}>
      <UpperHeader opening="8:00" closing="20:00" options={languages} />
      <StyledLowHeader>
        <StyledLogo />
        <StyledLowHeaderContent justify="space-between">
          <StyledSearch outlined />
          <StyledRightSide>
            <Link to="/cart">
              {quantityOnCart > 0 && <StyledNtf>{quantityOnCart}</StyledNtf>}
              <IconButton
                size="lg"
                icon="cart"
                bgColor="backgroundDark"
                color="textInverse"
              />
            </Link>
            <Button size="lg">Web Site</Button>
            <StyledSignIn>
              <Avatar imgSrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
              <Button bgColor="darkGrey" color="textInverse">
                Sign Off
              </Button>
            </StyledSignIn>
          </StyledRightSide>
        </StyledLowHeaderContent>
      </StyledLowHeader>
    </StyledHeader>
  )
}
