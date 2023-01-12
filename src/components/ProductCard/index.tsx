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
  linkUrl?: string
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

  const cardContent = (
    <>
      <ProductThumb size={size} src={imgSrc} isNew alt={name} />
      <ProductDescription
        productName={name}
        stars={rating}
        price={price}
        isAvailable
        size={size}
      />
    </>
  )

  return (
    <StyledCard size={size}>
      {linkUrl ? <Link to={linkUrl}>{cardContent}</Link> : cardContent}
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
