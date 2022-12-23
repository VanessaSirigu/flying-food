import styled from '@emotion/styled'
import { FontSize, ThemeColor } from '../../style/theme'

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'

const sizesMap: Partial<Record<TextVariant, FontSize>> = {
  h1: 'xl',
  h2: 'lg'
}

export const StyledText = styled.p<{
  textColor: ThemeColor
  variant: TextVariant
  textSize?: FontSize
  bold?: boolean
  uppercase?: boolean
}>`
  color: ${({ theme, textColor }) => theme.colors[textColor]};
  font-size: ${({ theme, textSize, variant }) => {
    const size = textSize || sizesMap[variant] || 'md'
    return theme.fontSizes[size]
  }}rem;
  font-weight: ${({ bold }) => bold && 'bold'};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
`
