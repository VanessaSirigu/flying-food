import { Stack } from '../Stack'
import { Text } from '../Text'
import {
  NewsButton,
  StyledImage,
  StyledInput,
  StyledInputWrapper,
  StyledNewsletter
} from './styled'

type Props = {
  onChange?: (value: string) => void
  value?: string
  onClick?: () => void
}

export const Newsletter = ({ onChange, value, onClick }: Props) => {
  return (
    <StyledNewsletter>
      <StyledImage
        width={'100'}
        height={'100%'}
        src="https://cdn-icons-png.flaticon.com/512/1995/1995555.png"
        alt="Immagine pubblicitaria"
      />
      <Stack direction="vertical" gap={0}>
        <Text size="lg" color="textInverse" variant="p" uppercase>
          subscribe
        </Text>
        <Text size="lg" color="darkBlue" variant="h3" uppercase bold>
          to news
        </Text>
      </Stack>
      <StyledInputWrapper>
        <StyledInput
          value={value}
          onChange={onChange}
          placeholder="Enter your email"
          placeholderColor="textInverse"
          bgColor="secondaryLight"
        />
        <NewsButton onClick={onClick} bgColor="secondaryDark" color="textInverse">
          SUBSCRIBE
        </NewsButton>
      </StyledInputWrapper>
    </StyledNewsletter>
  )
}
