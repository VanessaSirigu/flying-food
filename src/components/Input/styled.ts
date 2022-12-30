import styled from '@emotion/styled'
import { Size, ThemeColor } from '../../style/theme'

export type StyledInputProps = {
  bgColor?: ThemeColor
  placeholderColor: ThemeColor
  textColor: ThemeColor
  inputSize: Size
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  border: none;
  color: ${({ theme, textColor }) => theme.colors[textColor]};
  border-radius: ${({ theme }) => theme.radii.at(3)}px;
  background-color: ${({ theme, bgColor }) => bgColor && theme.colors[bgColor]};
  height: ${({ theme, inputSize }) => theme.sizes[inputSize]}px;
  padding-inline: 16px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${({ theme, placeholderColor }) => theme.colors[placeholderColor]};
    text-transform: capitalize;
  }
`

export const StyledLabel = styled.label<{ color: ThemeColor }>`
  font-size: 0.8rem;
  color: ${({ theme, color }) => theme.colors[color]};
  margin-bottom: 8px;
  display: inline-block;
`
