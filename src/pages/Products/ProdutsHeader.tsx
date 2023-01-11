import { Filter, FilterItem } from '../../components/Filter'
import { SectionTitle } from '../../components/SectionTitle'
import { StyledDiv, StyledButton } from './styled'

type Props = {
  items: FilterItem[]
  onSelect?: () => void
}

export const ProdutsHeader = ({ items, onSelect }: Props) => {
  return (
    <StyledDiv>
      <SectionTitle main="our" secondary="products" />
      <Filter items={items} onSelect={onSelect} />
      <StyledButton>Go to catalog</StyledButton>
    </StyledDiv>
  )
}
