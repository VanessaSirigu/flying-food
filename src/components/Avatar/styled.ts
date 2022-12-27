import styled from '@emotion/styled'
import { center } from '../../style/utils'

export const StyledAvatar = styled.div<{
  imgSrc?: string
  username?: string
  size: number
  classname?: string
}>`
  border-radius: 50%;
  overflow: hidden;
  overflow: clip;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  ${center}
`
