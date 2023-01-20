import styled from '@emotion/styled'
import { Paper } from '../../components/Paper'
import { Stack } from '../../components/Stack'

export const StyledContainer = styled(Paper)`
  max-width: ${({ theme }) => theme.containers.content}px;
  border-radius: ${({ theme }) => theme.radii.at(3)}px;
  padding: 32px;
  width: 100%;
  height: 100%;
`

export const CartItemContainer = styled(Stack)`
  background-color: ${({ theme }) => theme.colors.cardGrey};
  padding: ${({ theme }) =>
    `${theme.spacings.md}px ${theme.spacings.xl}px ${theme.spacings.md}px ${theme.spacings.md}px`};
  border-radius: ${({ theme }) => theme.radii.at(3)}px;
  width: 70%;
`
export const CartItemThumb = styled.div`
  max-width: 120px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacings.sm}px;
  border-radius: ${({ theme }) => theme.radii.at(3)}px;
`
export const LeftSection = styled(Stack)`
  margin-right: auto;
`
export const CentralSection = styled(Stack)`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -32px;
    bottom: -10px;
    width: 3px;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.radii.at(1)}px;
    z-index: 1;
  }
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    right: -32px;
    bottom: -10px;
    width: 3px;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.radii.at(1)}px;
    z-index: 1;
  }
`

export const RightSection = styled(Stack)`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: -18px;
    right: -32px;
    bottom: -18px;
    width: 3px;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.radii.at(1)}px;
    z-index: 1;
  }
`
