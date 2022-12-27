import { Text } from '../Text'
import { StyledSectionTitle } from './styled'

type Props = {
  main: string
  secondary?: string
}

export const SectionTitle = ({ main, secondary }: Props) => {
  return (
    <StyledSectionTitle>
      <Text variant="h2" capitalize>
        <Text variant="span" bold>
          {main}
        </Text>
        <Text variant="span">{secondary}</Text>
      </Text>
    </StyledSectionTitle>
  )
}
