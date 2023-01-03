import styled from '@emotion/styled'
import { Size } from '../../style/theme'
import { Stack } from '../Stack'
import { Tag } from '../Tag'

const SKEW = 4

export const StyledCard = styled.div<{ size: Size }>`
  position: relative;
  padding: ${({ size }) => (size === 'sm' ? '20px 8px' : '42px 16px')};
  max-width: ${({ size }) => (size === 'sm' ? 180 : 240)}px;
  transform: skewX(${SKEW}deg);
  height: max-content;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.radii.at(1)}px;
    z-index: -1;
  }

  &::after {
    content: '';
    height: 100%;
    width: 60%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: skew(-${SKEW * 2}deg);
    border-radius: ${({ theme }) => theme.radii.at(1)}px;
    z-index: -2;
  }
`

export const StyledShopButton = styled.div`
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%) skew(-${SKEW}deg);
  position: absolute;
`

export const StyledProductThumb = styled.div<{ size: Size }>`
  position: relative;
  border-radius: 8px;
  padding: 0px 24px;
  background-color: #edeff3;

  & > img {
    transform: translateY(-16%) skew(-${SKEW}deg);
  }
`

export const StyledProductDescription = styled(Stack)`
  padding-top: 10px;
  transform: skew(-${SKEW}deg);
`

export const StyledTag = styled(Tag)`
  position: absolute;
  height: min-content;
  top: -10px;
  left: 10px;
  z-index: 10;
  transform: skew(-${SKEW}deg);
`
