import styled from '@emotion/styled'
import { Sidebar } from '../Sidebar'

const SIDEBAR_WIDTH = 200

export const StyledMain = styled.main`
  display: flex;
`

export const StyledContent = styled.div`
  max-width: ${({ theme }) => theme.containers.content}px;
  margin-left: 0;
  flex: 1;

  @media screen and (min-width: ${(p) => p.theme.containers.content + SIDEBAR_WIDTH}px) {
    margin-left: ${({ theme }) =>
      `max(calc((100vw - ${theme.containers.content}px) / 2 - ${SIDEBAR_WIDTH}px), 0px)`};
  }
`

export const StyledSidebar = styled(Sidebar)`
  width: ${SIDEBAR_WIDTH}px;
`
