import { Button } from '../Button'
import { Image } from '../Image'
import { SectionTitle } from '../SectionTitle'
import { Stack } from '../Stack'
import { StyledTag } from './styled'
import { StyledProduct } from './styled'

type Props = {
  src: string
  alt: string
  name: string
  rating: number
  price: string
}

export const SingleProduct = ({ src, alt, name, price }: Props) => {
  return (
    <StyledProduct>
      <StyledTag title="NEW" bgColor="secondary" textColor="textInverse" size="sm" />
      <Image src={src} alt={alt} />
      <Stack direction="horizontal" gap={160}>
        <SectionTitle main={name} />
        <Stack>
          <Button bgColor="background" color="text">
            burger
          </Button>
          <Button bgColor="background" color="text">
            food
          </Button>
          <Button bgColor="background" color="text">
            however
          </Button>
        </Stack>
      </Stack>
    </StyledProduct>
  )
}
