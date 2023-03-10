import styled from '@emotion/styled'
import { Size, ThemeColor } from '../../style/theme'
import { center } from '../../style/utils'
import { Text } from '../Text'

export type StyledBaseButtonProps = {
  bgColor: ThemeColor
  radius: number | string
  size: Size
  disabled?: boolean
  bold?: boolean
  outlined?: boolean
  squared?: boolean
}

export const StyledBaseButton = styled.button<StyledBaseButtonProps>`
  height: ${({ theme, size }) => theme.sizes[size]}px;
  width: ${({ theme, size, squared }) => squared && `${theme.sizes[size]}px`};
  background-color: ${({ theme, bgColor, outlined }) =>
    outlined ? 'transparent' : theme.colors[bgColor]};
  border-radius: ${({ theme, radius }) =>
    typeof radius === 'number' ? `${theme.radii.at(radius)}px` : radius};
  border: ${({ theme, outlined }) =>
    outlined ? `1px solid ${theme.colors['text']}` : 'none'};
  padding: ${({ size }) => (size === 'sm' ? 2 : 4)}px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => disabled && 0.3};
  ${center}
  text-transform: uppercase;
  transition: transform 0.05s ease-in;
  font-family: inherit;
  span {
    font-weight: ${({ bold }) => bold && 'bold'};
  }

  :hover {
    transform: translateY(-1px);
    /* transform: scale(1.015); */
  }
`
export const StyledText = styled(Text)<{ hasIcon: boolean; btnSize: Size }>`
  padding-right: ${({ theme, btnSize, hasIcon }) =>
    theme.spacings[btnSize] * (hasIcon ? 0.5 : 1)}px;
  padding-left: ${({ theme, btnSize }) => theme.spacings[btnSize]}px;
`
export const IconContainer = styled.div<{ bgColor?: ThemeColor }>`
  background-color: ${({ theme, bgColor }) => bgColor && theme.colors[bgColor]};
  border-radius: 50%;
  aspect-ratio: 1;
  height: 100%;
  ${center}
`
