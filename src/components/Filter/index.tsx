import { Button } from '../Button'
import { Stack } from '../Stack'

export type FilterItem = {
  name: string
  id: string
}

type Props = {
  items: FilterItem[]
  selected?: string
  onSelect: (selected: FilterItem) => void
}

export const Filter = ({ items, selected, onSelect }: Props) => {
  return (
    <Stack>
      {items.map((item) => (
        <Button
          bold
          key={item.id}
          bgColor={item.id === selected ? 'backgroundDark' : 'textInverse'}
          color={item.id === selected ? 'textInverse' : 'text'}
          onClick={() => onSelect(item)}
        >
          {item.name}
        </Button>
      ))}
    </Stack>
  )
}
