import styled from '@emotion/styled'
import { Tag } from '../Tag'

export const StyledProduct = styled.div`
  height: 300px;
  transform: skew(5deg);
  border-radius: ${({ theme }) => theme.radii.at(3)}px;
  background-color: #edeff3;
  padding: 0px 24px;
  max-width: 700px;
  position: relative;
  z-index: 3;

  &::before {
    content: '';
    height: calc(100% - 20px);
    width: 100%;
    position: absolute;
    bottom: 10px;
    left: -10px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radii.at(3)}px;
    z-index: -1;
  }

  &::after {
    content: '';
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    background-color: #edeff3;
    border-radius: ${({ theme }) => theme.radii.at(3)}px;
    z-index: -1;
  }

  & > img {
    height: 100%;
    max-height: 250px;
    object-fit: contain;
    transform: translateY(-20px);
    position: relative;
  }
  > * {
    transform: skew(-5deg);
  }
`

export const StyledTag = styled(Tag)`
  position: absolute;
  height: min-content;
  padding-inline: 16px;
  top: -10px;
  left: 60px;
  z-index: 10;
`
export const StyledProdTag = styled(Tag)`
  height: min-content;

  > * {
    text-transform: lowercase;
  }
`
