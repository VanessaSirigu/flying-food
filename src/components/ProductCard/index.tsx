import { Size } from '../../style/theme'
import { IconButton } from '../Button'
import { ProductDescription } from './ProductDescription'
import { ProductThumb } from './ProductThumb'
import { StyledCard, StyledShopButton } from './styled'

type Props = {
  id?: string
  imgSrc: string
  name: string
  isAvailable?: boolean
  rating: number
  price: string
  size?: Size
  onClick?: (id: string) => void
}

export const ProductCard = ({
  imgSrc,
  name,
  rating,
  price,
  size = 'md',
  onClick
}: Props) => {
  const buttonSize = size === 'md' ? 'lg' : 'md'
  return (
    <StyledCard size={size}>
      <ProductThumb size={size} src={imgSrc} isNew alt={name} />
      <ProductDescription
        productName={name}
        stars={rating}
        price={price}
        isAvailable
        size={size}
      />
      <StyledShopButton>
        <IconButton icon="shopBag" size={buttonSize} color="textInverse" />
      </StyledShopButton>
    </StyledCard>
  )
}
