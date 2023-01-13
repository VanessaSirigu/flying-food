import { TagDto } from '../../api/types'
import { Image } from '../Image'
import { SectionTitle } from '../SectionTitle'
import { Stack } from '../Stack'
import { StyledProdTag, StyledTag } from './styled'
import { StyledProduct } from './styled'

type Props = {
  src: string
  alt: string
  name: string
  rating: number
  price: string
  isNew?: boolean
  tags?: TagDto[]
}

export const SingleProduct = ({ src, alt, name, tags, isNew }: Props) => {
  return (
    <StyledProduct>
      {isNew && (
        <StyledTag title="NEW" bgColor="secondary" textColor="textInverse" size="sm" />
      )}
      <Image src={src} alt={alt} />
      <Stack direction="horizontal" between centered>
        <SectionTitle main={name} />
        {tags && (
          <Stack>
            {tags.map((t) => (
              <StyledProdTag
                title={t.name}
                bgColor="background"
                textColor="text"
                size="sm"
                key={t.id}
              />
            ))}
          </Stack>
        )}
      </Stack>
    </StyledProduct>
  )
}
