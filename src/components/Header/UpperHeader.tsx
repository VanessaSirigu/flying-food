import { Select } from '../Select'
import { StyledContainer, StyledUpperHeader, StyledWorkingHours } from './styled'

type Props = {
  opening: string
  closing: string
  options: string[]
}

export const UpperHeader = ({ opening, closing, options }: Props) => {
  return (
    <StyledUpperHeader>
      <StyledContainer justify="flex-end">
        <StyledWorkingHours variant="p" color="textInverse" size="sm" uppercase>
          working hours {opening} - {closing}
        </StyledWorkingHours>
        <Select options={options} name="languages" />
      </StyledContainer>
    </StyledUpperHeader>
  )
}
