import { TagDto } from '../../api/types'
import { Image } from '../Image'
import { SectionTitle } from '../SectionTitle'
import { Stack } from '../Stack'
import { Tag } from '../Tag'
import { StyledTag } from './styled'
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

export const SingleProduct = ({ src, alt, name, price, tags, isNew }: Props) => {
  return (
    <StyledProduct>
      {isNew && (
        <StyledTag title="NEW" bgColor="secondary" textColor="textInverse" size="sm" />
      )}
      <Image src={src} alt={alt} />
      <Stack direction="horizontal" gap={160}>
        <SectionTitle main={name} />
        {tags && (
          <Stack>
            {tags.map((t) => (
              <Tag
                title={t.name}
                bgColor="background"
                textColor="text"
                size="md"
                key={t.id}
              />
            ))}
          </Stack>
        )}
      </Stack>
    </StyledProduct>
  )
}
