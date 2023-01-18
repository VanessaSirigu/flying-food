import styled from '@emotion/styled'
import { Image } from '../../../components/Image'
import { Paper } from '../../../components/Paper'
import { Stack } from '../../../components/Stack'

export const StyledProduct = styled.div``

export const StyledImg = styled(Image)`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 4px;
  border-radius: 4px;
`
export const StyledStack = styled(Stack)`
  padding: 20px;
  border-right: solid 1px ${({ theme }) => theme.colors.textInverse};
`
export const StyledPaper = styled(Paper)`
  width: max-content;
  align-items: center;
`

export const StyledProductDescription = styled.div``
