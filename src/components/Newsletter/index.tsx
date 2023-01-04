import { Image } from '../Image'
import { Stack } from '../Stack'
import { Text } from '../Text'
import { NewsletterInput } from './NewsletterInput'
import { StyledImage, StyledNewsletter } from './styled'

type Props = {
  onChange?: (value: string) => void
  value?: string
}

export const Newsletter = ({ onChange, value }: Props) => {
  return (
    <StyledNewsletter>
      <StyledImage
        width={100}
        src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png"
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
      <NewsletterInput />
    </StyledNewsletter>
  )
}
