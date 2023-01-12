import { Filter, FilterItem } from '../../components/Filter'
import { SectionTitle } from '../../components/SectionTitle'
import { StyledDiv, StyledButton } from './styled'

type Props = {
  items: FilterItem[]
  selected?: string
  onFilterSelect: (selected: FilterItem) => void
}

export const ProductsHeader = ({ items, selected, onFilterSelect }: Props) => {
  return (
    <StyledDiv>
      <SectionTitle main="our" secondary="products" />
      <Filter items={items} onSelect={onFilterSelect} selected={selected} />
      <StyledButton bold>Go to catalog</StyledButton>
    </StyledDiv>
  )
}
