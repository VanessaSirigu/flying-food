import type { ValueType } from '../../../api/types'
import { Tag } from '../../../components/Tag'
import { Text } from '../../../components/Text'
import { Product as ProductType } from '../../../features/products/model'
import { StyledImg, StyledStack } from './styled'

type Props = {
  imageUrl: string
  name: string
  size: ValueType
}

export const Product = ({ imageUrl, name, size }: Props) => {
  return (
    <StyledStack>
      <StyledImg src={imageUrl} alt={name} width={50} />
      <div>
        <Tag title="free delivery" size="sm" />
        <Text bold>{name} </Text>
        <Tag
          bgColor="background"
          title={`${size.value} ${size.type}`}
          size="sm"
          textColor="darkGrey"
        />
      </div>
    </StyledStack>
  )
}
