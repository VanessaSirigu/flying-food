import styled from '@emotion/styled'

export type StyledStackProps = {
  direction: 'vertical' | 'horizontal'
  centered?: boolean
  gap: number
  between?: boolean
}

export const StyledStack = styled.div<StyledStackProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'vertical' ? 'column' : 'row')};
  gap: ${({ gap }) => gap}px;
  align-items: ${({ centered }) => centered && 'center'};
  justify-content: ${({ between }) => between && 'space-between'};
`
