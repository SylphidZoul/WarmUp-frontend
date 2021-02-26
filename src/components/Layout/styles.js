import styled, { keyframes } from 'styled-components'
import { Colors } from '../../styles/colors'

const FadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`

export const Div = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 0 24px 48px;
  margin: 0 auto;
  animation: ${FadeIn} 500ms ease-in forwards;
`

export const Header = styled.header`
  padding: 36px 0;
`

export const H2 = styled.h2`
  font-size: 24px;
  color: ${Colors.mainWhite};
  font-weight: 500;
  letter-spacing: 2px;
`
