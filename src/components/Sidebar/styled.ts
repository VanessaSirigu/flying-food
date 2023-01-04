import styled from '@emotion/styled'

export const StyledSidebar = styled.div`
  border-top-right-radius: ${({ theme }) => theme.radii.at(3)}px;
  border-bottom-right-radius: ${({ theme }) => theme.radii.at(3)}px;
  padding-left: ${({ theme }) => theme.spacings.lg}px;
  padding-block: ${({ theme }) => theme.spacings.xl}px;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  width: 174px;
  height: max-content;
  margin-block: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 64px;
`
