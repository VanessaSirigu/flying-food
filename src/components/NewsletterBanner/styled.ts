import styled from '@emotion/styled'
import { Button } from '../Button'
import { Image } from '../Image'
import { Input } from '../Input'

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
  padding-inline: 24px;
`

export const StyledInput = styled(Input)`
  width: 100%;
`

export const NewsButton = styled(Button)`
  padding-inline: ${({ theme }) => theme.spacings.lg * 1.5}px;
  position: absolute;
  top: 0;
  right: 24px;
`

export const StyledImage = styled(Image)`
  transform: translateY(-16px);
`
