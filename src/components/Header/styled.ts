import styled from '@emotion/styled'
import { center } from '../../style/utils'
import { Logo } from '../Logo'
import { Searchbar } from '../Searchbar'
import { Text } from '../Text'

export const StyledHeader = styled.header`
  margin-bottom: 32px;
`

export const StyledContainer = styled.div<{
  justify?: string
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
  padding-inline: 4px;
  align-items: center;
  border-radius: 50px 0 0 50px;
  gap: 10px;
`

export const StyledRightSide = styled.div`
  display: flex;
  gap: 10px;
  :nth-child(2) {
    position: relative;
  }
`

export const StyledUpperHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding-block: 6px;
  width: 100%;
  margin: 0 auto;
  & > div > select {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.textInverse};
  }
`

export const StyledLowHeader = styled.div`
  position: relative;
  margin-top: 10px;
`

export const StyledWorkingHours = styled(Text)`
  border-right: 1px solid ${({ theme }) => theme.colors.textInverse};
  padding-right: 14px;
  margin-right: 8px;
`

export const StyledLogo = styled(Logo)`
  position: absolute;
  left: 10px;
  bottom: -20px;

  @media screen and (max-width: ${(p) => p.theme.containers.content + 220}px) {
    display: none;
  }
`

export const StyledLowHeaderContent = styled(StyledContainer)`
  position: relative;
  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: ${({ theme }) => `calc((100vw - ${theme.containers.content}px) / -2)`};
    height: 100%;
    width: ${({ theme }) => `calc((100vw - ${theme.containers.content}px) / 2)`};
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    z-index: 10;
  }
`

export const StyledSearch = styled(Searchbar)`
  /* margin-left: 120px; */
`
export const StyledNtf = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.background};
  ${center}
  padding: 8px;
  position: absolute;
  top: -5px;
  left: 30px;
`
// export const StyledIconButton
