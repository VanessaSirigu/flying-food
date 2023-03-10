import { memo } from 'react'
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
  isAvailable: boolean
  rating: number
  price: string
  disabled: boolean
  size?: Size
  linkUrl?: string
  isNew?: boolean
  onClick?: () => void
}

const ProductCardCmp = ({
  imgSrc,
  name,
  rating,
  price,
  id,
  linkUrl,
  isNew,
  isAvailable,
  disabled,
  size = 'md',
  onClick
}: Props) => {
  const buttonSize = size === 'md' ? 'lg' : 'md'

  const cardContent = (
    <>
      <ProductThumb size={size} src={imgSrc} isNew={isNew} alt={name} />
      <ProductDescription
        productName={name}
        stars={rating}
        price={price}
        isAvailable={isAvailable}
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
          disabled={disabled}
          onClick={onClick}
        />
      </StyledShopButton>
    </StyledCard>
  )
}

export const ProductCard = memo(ProductCardCmp)
