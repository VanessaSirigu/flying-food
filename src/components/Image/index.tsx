import { objFit, StyledImage } from './styled'

type Props = {
  src: string
  width?: string | number
  height?: string | number
  alt?: string
  fit?: objFit
}

export const Image = (props: Props) => {
  return <StyledImage {...props} />
}
