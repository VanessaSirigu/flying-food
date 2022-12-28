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
        <Text variant="span" bold inline>
          {main}
        </Text>
        <Text variant="span" inline>
          {secondary}
        </Text>
      </Text>
    </StyledSectionTitle>
  )
}
