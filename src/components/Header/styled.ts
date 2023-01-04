import styled from '@emotion/styled'
import { Logo } from '../Logo'
import { Text } from '../Text'

export const StyledHeader = styled.header``

export const StyledContainer = styled.div<{
  justify?: string
  gap?: number
  after?: boolean
  className?: string
}>`
  display: flex;
  width: 100%;
  max-width: ${({ theme }) => theme.containers.content}px;
  justify-content: ${({ justify }) => justify};
  margin: 0 auto;
`

export const StyledSignIn = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  display: flex;
  padding-block: 4px;
  align-items: center;
  border-radius: 50px 0 0 50px;
  gap: 4px;
`

export const StyledRightSide = styled.div`
  display: flex;
  gap: 10px;
`

export const StyledHighRow = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding-block: 6px;
  width: 100%;
  margin: 0 auto;
`

export const StyledLowRow = styled.div`
  margin-top: 10px;
  position: relative;
`

export const StyledWorkingHours = styled(Text)`
  border-right: 1px solid ${({ theme }) => theme.colors.textInverse};
  padding-right: 14px;
`

export const StyledLogo = styled(Logo)`
  position: absolute;
  left: 10px;
  bottom: -20px;
`
export const StyledLowHeader = styled(StyledContainer)`
  ::after {
    content: '';
    position: absolute;
    width: 200px;
    right: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    z-index: -1;
  }
`
