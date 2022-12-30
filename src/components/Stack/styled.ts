import styled from '@emotion/styled'

export type StyledStackProps = {
  direction: 'vertical' | 'horizontal'
  align: 'center' | 'baseline'
  gap: number
}

export const StyledStack = styled.div<StyledStackProps>`
  display: flex;
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap}px;
  flex-direction: ${({ direction }) => (direction === 'vertical' ? 'column' : 'row')};
`
