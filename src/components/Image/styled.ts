import styled from '@emotion/styled'

export type ObjectFit = 'cover' | 'contain' | 'fill' | 'none'

export const StyledImage = styled.img<{
  fit?: ObjectFit
}>`
  object-fit: ${({ fit }) => fit};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height};
`
