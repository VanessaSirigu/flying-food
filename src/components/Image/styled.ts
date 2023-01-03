import styled from '@emotion/styled'

export type objFit = 'cover' | 'contain' | 'fill' | 'none'

export const StyledImage = styled.img<{
  src: string
  width?: string | number
  alt?: string
  fit?: objFit
}>`
  width: ${({ width }) => `${width}px` || '100%'};
  object-fit: ${({ fit }) => fit};
`
