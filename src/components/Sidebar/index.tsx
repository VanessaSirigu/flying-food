import { sideBarLinks } from '../../Utils/sideBarLinks'
import { Button } from '../Button'
import { SidebarList } from './SidebarList'
import { StyledSidebar } from './styled'

type Props = {
  className?: string
}

export const Sidebar = ({ className }: Props) => {
  return (
    <StyledSidebar className={className}>
      <SidebarList sidebarListData={sideBarLinks} />
      <Button bgColor="darkGrey" color="textInverse">
        SIGN OFF
      </Button>
    </StyledSidebar>
  )
}
