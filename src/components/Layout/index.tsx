import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { StyledContent, StyledMain, StyledSidebar } from './styled'

export const Layout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <StyledSidebar />
        <StyledContent>
          <Outlet />
        </StyledContent>
      </StyledMain>
      <Footer />
    </>
  )
}
