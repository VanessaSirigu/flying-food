import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { StyledMain, StyledSidebar } from './styled'

export const Layout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <StyledSidebar />
        <div className="content">
          <Outlet />
        </div>
      </StyledMain>
      <Footer />
    </>
  )
}
