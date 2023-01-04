import { Select } from '../Select'
import { StyledContainer, StyledHighRow, StyledWorkingHours } from './styled'

type Props = {
  opening: string
  closing: string
  options: string[]
}

export const UpperHeader = ({ opening, closing, options }: Props) => {
  return (
    <StyledHighRow>
      <StyledContainer justify="flex-end" gap={20}>
        <StyledWorkingHours variant="p" color="textInverse" size="sm" uppercase>
          working hours {opening} - {closing}
        </StyledWorkingHours>
        <Select options={options} name="languages" />
      </StyledContainer>
    </StyledHighRow>
  )
}
