import styled from '@emotion/styled'

export const StyledText = styled.p<{ fontColor: string }>`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.fontColor};
`
