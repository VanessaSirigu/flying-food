import { IconButton } from '../Button'
import { Input } from '../Input'
import { StyledSearchbar } from './styled'

type Props = {
  onChange?: (value: string) => void
  outlined?: boolean
  value?: string
}

export const Searchbar = ({ outlined, onChange, value }: Props) => {
  return (
    <StyledSearchbar outlined={outlined}>
      <Input onChange={onChange} placeholder="Search" value={value} />
      <IconButton icon="search" color="text" bgColor="primary" />
    </StyledSearchbar>
  )
}
