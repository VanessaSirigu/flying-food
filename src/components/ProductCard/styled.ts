import styled from '@emotion/styled'
import { Size } from '../../style/theme'
import { abs, pseudo } from '../../style/utils'
import { Tag } from '../Tag'

export const StyledCard = styled.div<{ size: Size }>`
  padding: ${({ size }) => (size === 'sm' ? '20px 8px' : '42px 16px')};
  position: relative;
  max-width: ${({ size }) => (size === 'sm' ? '180px' : '240px')};

  &::after {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    transform: skew(5deg);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
    ${pseudo}
  }

  &::before {
    height: 50%;
    position: absolute;
    bottom: 0;
    left: -6px;
    background-color: #729ce4;
    transform: skew(-4deg);
    ${pseudo}
  }
`

export const StyledTextWrapper = styled.div<{ size: Size }>`
  padding-top: ${({ size }) => (size === 'sm' ? '10px' : '15px')};
  position: relative;
  z-index: 2;
`

export const StyledShopButton = styled.div`
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  ${abs}
`

export const StyledProductThumb = styled.div<{ size: Size }>`
  position: relative;
  border-radius: 8px;
  padding: ${({ size }) => (size === 'sm' ? '20px 8px' : '0px 24px')};
  & > img {
    position: relative;
    z-index: 3;
    transform: ${({ size }) => (size === 'sm' ? 'translateY(-0%)' : 'translateY(-16%)')};
  }

  &::after {
    height: 100%;
    top: 0;
    left: 0;
    background-color: #edeff3;
    transform: skew(5deg);
    transform-origin: bottom;
    ${pseudo}
    ${abs}
  }
`

export const StyledTag = styled(Tag)`
  position: absolute;
  height: min-content;
  top: -10px;
  left: 10px;
  z-index: 100;
`
