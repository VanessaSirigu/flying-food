import { sideBarLinks } from '../../Utils/sideBarLinks'
import { Button } from '../Button'
import { Stack } from '../Stack'
import { SidebarList } from './SidebarList'
import { StyledSidebar } from './styled'

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <SidebarList sidebarListData={sideBarLinks} />
      <Button bgColor="darkGrey" color="textInverse">
        SIGN OFF
      </Button>
    </StyledSidebar>
  )
}
