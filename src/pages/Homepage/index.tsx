import { Avatar } from '../../components/Avatar'
import { Icon } from '../../components/Icon'
import { MenuLink } from '../../components/MenuLink'
import { MenuList } from '../../components/MenuList'
import { Paper } from '../../components/Paper'
import { Rating } from '../../components/Rating'
import { SectionTitle } from '../../components/SectionTitle'
import { SocialIcon } from '../../components/SocialIcon'
import { Tag } from '../../components/Tag'
import { Text } from '../../components/Text'
import { WorkingHours } from '../../components/WorkingHours'

export const Homepage = () => {
  return (
    <div>
      <Paper bgColor="secondary">
        <Rating color="primary" />
        <Avatar
          // imgSrc="https://www.lightningdesignsystem.com/assets/images/avatar2.jpg"
          // username="mario rossi"
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6Anq1E4_wElNp8YHogGrjUOjcyGy3kizbA&usqp=CAU"
        />
      </Paper>
      <br />
      <Tag title="new" />
      <br />
      <Paper bgColor="backgroundDark">
        <WorkingHours opening="08:00" closing="23:00" variant="light" />
      </Paper>
      <br />
      <Paper bgColor="backgroundDark">
        <SocialIcon color="lightGrey" />
      </Paper>
      <br />
      <Paper bgColor="textInverse">
        <SectionTitle main="our" secondary="production" />
      </Paper>
      <br />
      <MenuList />
      <br />
      <Paper bgColor="backgroundDark">
        <MenuLink title="item 1" icon="fullStar" color="textInverse" linkUrl="#" />
      </Paper>
    </div>
  )
}
