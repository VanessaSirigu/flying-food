import { StyledFilter, StyledButton } from './styled'

export type FilterItem = {
  name: string
  id: string
  hidden?: boolean
}

type Props = {
  items: FilterItem[]
  selected?: string
  onSelect?: (item: FilterItem) => void
}

export const Filter = ({ items, selected, onSelect }: Props) => {
  const bgColor = selected ? 'backgroundDark' : 'textInverse'
  const textColor = selected ? 'textInverse' : 'text'
  return (
    <StyledFilter>
      {items
        .filter((item) => !item.hidden)
        .map((item) => (
          <StyledButton bgColor={bgColor} color={textColor} onClick={() => onSelect}>
            {item.name}
          </StyledButton>
        ))}
    </StyledFilter>
  )
}
