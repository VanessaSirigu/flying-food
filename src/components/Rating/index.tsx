import { memo } from 'react'
import { ThemeColor } from '../../style/theme'
import { Icon } from '../Icon'
import { StyledRating } from './styled'

type Props = {
  value: number
  color?: ThemeColor
  stars?: number
}

const RatingCmp = ({ value, color = 'primary', stars = 5 }: Props) => {
  const getIcon = (index: number) => {
    if (index + 1 <= value) return 'fullStar'
    if (index + 0.5 <= value) return 'halfStar'
    return 'emptyStar'
  }

  return (
    <StyledRating>
      {Array.from({ length: stars }).map((_, i) => (
        <Icon name={getIcon(i)} color={color} key={i} />
      ))}
    </StyledRating>
  )
}

export const Rating = memo(RatingCmp)
