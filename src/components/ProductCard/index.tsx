import { Link } from 'react-router-dom'
import { Size } from '../../style/theme'
import { IconButton } from '../Button'
import { ProductDescription } from './ProductDescription'
import { ProductThumb } from './ProductThumb'
import { StyledCard, StyledShopButton } from './styled'

type Props = {
  id: string
  imgSrc: string
  name: string
  isAvailable?: boolean
  rating: number
  price: string
  size?: Size
  linkUrl?: boolean
  onClick?: () => void
}

export const ProductCard = ({
  imgSrc,
  name,
  rating,
  price,
  id,
  linkUrl,
  size = 'md',
  onClick
}: Props) => {
  const buttonSize = size === 'md' ? 'lg' : 'md'
  return (
    <StyledCard size={size}>
      <Link to={linkUrl ? id : '#'}>
        <ProductThumb size={size} src={imgSrc} isNew alt={name} />
        <ProductDescription
          productName={name}
          stars={rating}
          price={price}
          isAvailable
          size={size}
        />
      </Link>

      <StyledShopButton>
        <IconButton
          icon="shopBag"
          size={buttonSize}
          color="textInverse"
          onClick={onClick ? () => onClick() : undefined}
        />
      </StyledShopButton>
    </StyledCard>
  )
}
