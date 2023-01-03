import { ObjectFit, StyledImage } from './styled'

type Props = {
  src: string
  alt: string
  fit?: ObjectFit
  width?: number | string
  height?: number | string
  className?: string
}
export const Image = (props: Props) => {
  return <StyledImage {...props} />
}
