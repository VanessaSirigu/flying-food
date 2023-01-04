import styled from '@emotion/styled'

export const StyledSearchbar = styled.div<{
  outlined?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  border: ${({ theme, outlined }) =>
    outlined ? `2px solid ${theme.colors.textInverse}` : 'none'};
  border-radius: ${({ theme }) => theme.radii.at(3)}px;
`
