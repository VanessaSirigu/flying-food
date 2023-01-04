import styled from '@emotion/styled'
import { theme, ThemeColor } from '../../style/theme'
import { Text } from '../Text'

export const FooterContent = styled.div`
  width: ${theme.containers.content}px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: ${theme.spacings.md * 4}px;
`

export const StyledFooterLogo = styled.div`
  background-color: ${theme.colors.lightGrey};
  padding-right: ${theme.spacings.md}px;
  border-top-right-radius: ${theme.radii.at(4)}px;
  border-bottom-right-radius: ${theme.radii.at(4)}px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -246%;
    height: 100%;
    width: 600px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    z-index: 10;
  }
`

export const StyledWorkingHours = styled.div`
  border-left: 1px solid ${theme.colors.lightGrey};
  border-right: 1px solid ${theme.colors.lightGrey};
  padding-inline: ${theme.spacings.md * 2}px;
`

export const StyledMenuList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`

export const StyledText = styled(Text)`
  border-top: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};
  width: 100%;
  display: block;
  text-align: center;
  padding-block: ${({ theme }) => theme.spacings.md}px;
`

export const StyledFooter = styled.footer<{
  bgColor: ThemeColor
}>`
  width: 100%;
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  border-top-left-radius: ${({ theme }) => theme.radii[3]}px;
  border-top-right-radius: ${({ theme }) => theme.radii[3]}px;
`
