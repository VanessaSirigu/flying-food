import styled from '@emotion/styled'
import { BaseButton } from '../Button'
import { Image } from '../Image'

export const StyledNewsletter = styled.div`
  max-width: ${({ theme }) => theme.containers.content}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radii.at(3)}px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  top: 42px;
`

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  position: relative;
`

export const StyledInput = styled.input`
  width: 700px;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  border-radius: ${({ theme }) => theme.radii.at(4)}px;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textInverse};
    padding-left: 8px;
  }
`

export const NewsButton = styled(BaseButton)`
  padding-inline: ${({ theme }) => theme.spacings.lg * 2}px;
  color: ${({ theme }) => theme.colors.textInverse};
  position: relative;
  left: -30px;
`

export const StyledImage = styled(Image)`
  transform: translateY(-16px);
`
