import { Image } from '../Image'
import { Text } from '../Text'
import { StyledAvatar } from './styled'

function getInitial(username: string) {
  const splitName = username.split(' ')
  const firstInitial = splitName.at(0)?.at(0) || ''
  return splitName.length === 1
    ? `${firstInitial}`
    : `${firstInitial}${splitName.at(splitName.length - 1)?.at(0)}`
}
type Props = {
  username?: string
  imgSrc?: string
  size?: number
  classname?: string
}

export const Avatar = ({ imgSrc, username, size = 42 }: Props) => {
  const renderContent = () => {
    if (imgSrc)
      return <Image src={imgSrc} alt="user" width="100%" height="100%" fit="cover" />
    if (username)
      return (
        <Text size="lg" uppercase>
          {getInitial(username)}
        </Text>
      )
  }
  return <StyledAvatar size={size}>{renderContent()}</StyledAvatar>
}
