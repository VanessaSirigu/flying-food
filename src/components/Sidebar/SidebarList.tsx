import { ItemConfig } from '../../Utils/sideBarLinks'
import { IconName } from '../Icon'
import { MenuLink } from '../MenuLink'
import { Stack } from '../Stack'
import { Text } from '../Text'

export type SidebarListInfo = {
  id: number
  category: string
  links: [
    {
      icon: IconName
      tag: string
    }
  ]
}

type Props = {
  sidebarListData: ItemConfig[]
}

export const SidebarList = ({ sidebarListData }: Props) => {
  return (
    <Stack direction="vertical" gap={40}>
      {sidebarListData.map((el) => {
        return (
          <Stack direction="vertical" gap={20}>
            <Text uppercase bold variant="p" size="md" color="textInverse">
              {el.category}
            </Text>
            {el.links.map((link) => {
              return (
                <MenuLink
                  color="textInverse"
                  linkUrl="#"
                  icon={link.icon}
                  title={link.tag}
                />
              )
            })}
          </Stack>
        )
      })}
    </Stack>
  )
}
