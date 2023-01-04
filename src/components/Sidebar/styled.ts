import styled from '@emotion/styled'

export const StyledSidebar = styled.div`
  width: 174px;
  height: 300px;
  border-top-right-radius: ${({ theme }) => theme.radii.at(3)}px;
  border-bottom-right-radius: ${({ theme }) => theme.radii.at(3)}px;
  background-color: red;
  margin-block: 50px;
`
