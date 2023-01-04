import styled from '@emotion/styled'

export const StyledSidebar = styled.div`
  border-top-right-radius: ${({ theme }) => theme.radii.at(3)}px;
  border-bottom-right-radius: ${({ theme }) => theme.radii.at(3)}px;
  padding-inline: ${({ theme }) => theme.spacings.lg}px;
  padding-block: ${({ theme }) => theme.spacings.xl}px;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  > div > div {
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};
    padding-bottom: ${({ theme }) => theme.spacings.lg}px;
  }
`
