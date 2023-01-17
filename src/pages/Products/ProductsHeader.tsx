import { useDispatch, useSelector } from 'react-redux'
import { Filter, FilterItem } from '../../components/Filter'
import { SectionTitle } from '../../components/SectionTitle'
import { tagsAction } from '../../features/tags/reducer'
import { selectSelectedTag, selectVisibleTags } from '../../features/tags/selector'
import { StyledDiv, StyledButton } from './styled'

export const ProductsHeader = () => {
  const dispatch = useDispatch()
  const selectedTag = useSelector(selectSelectedTag) // id del tag selezionato
  const visibleTags = useSelector(selectVisibleTags) // tags non hidden

  const handleFilter = (tag: FilterItem) => {
    dispatch(tagsAction.tagSelected(tag.id))
  }

  return (
    <StyledDiv>
      <SectionTitle main="our" secondary="products" />
      <Filter
        items={visibleTags.map(({ name, id }) => ({ name, id }))}
        onSelect={handleFilter}
        selected={selectedTag}
      />
      <StyledButton bold>Go to catalog</StyledButton>
    </StyledDiv>
  )
}
