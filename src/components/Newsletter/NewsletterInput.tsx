import { NewsButton, StyledInput, StyledInputWrapper } from './styled'

type Props = {
  onChange?: (value: string) => void
  onClick?: () => void
}

export const NewsletterInput = ({ onChange, onClick }: Props) => {
  return (
    <StyledInputWrapper>
      <StyledInput
        onChange={onChange ? (event) => onChange(event.target.value) : undefined}
        placeholder="Enter your email"
      />
      <NewsButton onClick={onClick} bgColor="secondaryDark">
        SUBSCRIBE
      </NewsButton>
    </StyledInputWrapper>
  )
}
