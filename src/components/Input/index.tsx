import { Size, ThemeColor } from '../../style/theme'
import { StyledInput, StyledInputProps, StyledLabel } from './styled'

type Props = {
  textColor?: ThemeColor
  labelColor?: ThemeColor
  placeholder?: string
  size?: Size
  type?: 'search' | 'text'
  label?: string
  value?: string
  id?: string
  onChange?: (value: string) => void
} & Partial<StyledInputProps>

export const Input = ({
  label,
  bgColor,
  value,
  id,
  placeholder,
  onChange,
  size = 'md',
  type = 'text',
  placeholderColor = 'lightGrey',
  labelColor = 'text',
  textColor = 'text'
}: Props) => {
  return (
    <div>
      {label && (
        <StyledLabel color={labelColor} htmlFor={id}>
          {label}
        </StyledLabel>
      )}
      <StyledInput
        inputSize={size}
        type={type}
        placeholder={placeholder}
        bgColor={bgColor}
        textColor={textColor}
        placeholderColor={placeholderColor}
        value={value}
        id={id}
        onChange={onChange ? (event) => onChange(event.target.value) : undefined}
      />
    </div>
  )
}
