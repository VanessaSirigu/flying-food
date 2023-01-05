import styled from '@emotion/styled'
import { Sidebar } from '../Sidebar'

// TODO: fix positioning
export const StyledMain = styled.main`
  display: flex;
  position: relative;

  .content {
    max-width: ${({ theme }) => theme.containers.content}px;
    margin: 0 auto;
    flex: 1;
    min-height: 100vh;
    //padding: ${({ theme }) => theme.spacings.md}px;
  }
`

export const StyledSidebar = styled(Sidebar)`
  position: absolute;
  top: 0;
  left: 0;
`
