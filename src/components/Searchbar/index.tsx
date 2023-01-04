import { IconButton } from '../Button'
import { Input } from '../Input'
import { StyledSearchbar } from './styled'

type Props = {
  onChange?: (value: string) => void
  outlined?: boolean
  value?: string
  className?: string
}

export const Searchbar = ({ outlined, onChange, value, className }: Props) => {
  return (
    <StyledSearchbar outlined={outlined} className={className}>
      <Input onChange={onChange} placeholder="Search" value={value} />
      <IconButton icon="search" color="text" bgColor="primary" />
    </StyledSearchbar>
  )
}
