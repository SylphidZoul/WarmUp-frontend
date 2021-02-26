import styled from 'styled-components'
import { Colors } from '../../styles/colors'

export const Article = styled.article`
  width: 100%;
  padding: 24px 24px 36px;
  border: 1px solid ${Colors.mainGray};
  border-radius: 4px;
  background-color: ${Colors.mainBlack};
`

export const H1 = styled.h1`
  margin-bottom: 8px;
  color: ${Colors.mainWhite};
  font-weight: 500;
  font-size: 24px;
`

export const Span = styled.span`
  color: ${Colors.mainGray};
  font-size: 18px;
`

export const Hr = styled.hr`
  border-color: rgba(255, 255, 255, 0.2);
  margin: 32px 0;
`

export const P = styled.p`
  color: ${Colors.mainWhite};
  font-weight: 300;
  letter-spacing: 1px;
`
