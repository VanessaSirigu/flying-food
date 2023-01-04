import { Avatar } from '../Avatar'
import { Button, IconButton } from '../Button'
import { Searchbar } from '../Searchbar'
import {
  StyledHeader,
  StyledRightSide,
  StyledSignIn,
  StyledLowRow,
  StyledLogo,
  StyledLowHeader
} from './styled'
import { UpperHeader } from './UpperHeader'

const languages = ['EN', 'IT']

type Props = {
  opening: string
  closing: string
}

export const Header = ({ opening, closing }: Props) => {
  return (
    <StyledHeader>
      <UpperHeader opening={opening} closing={closing} options={languages} />
      <StyledLowRow>
        <StyledLogo />
        <StyledLowHeader justify="space-between">
          <Searchbar outlined />
          <StyledRightSide>
            <IconButton
              size="lg"
              icon="heart"
              bgColor="backgroundDark"
              color="textInverse"
            />
            <Button size="lg">Web Site</Button>
            <StyledSignIn>
              <Avatar imgSrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
              <Button bgColor="backgroundMedium" color="textInverse">
                Sign Off
              </Button>
            </StyledSignIn>
          </StyledRightSide>
        </StyledLowHeader>
      </StyledLowRow>
    </StyledHeader>
  )
}
