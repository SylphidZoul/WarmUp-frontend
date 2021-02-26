import styled from 'styled-components'
import { Colors } from '../../styles/colors'

export const Card = styled.div`
  width: 100%;
  padding: 24px 0;
  border-radius: 8px;
  border: 1px solid ${Colors.mainGray};
  background: ${Colors.mainBlack};
  margin: 0 auto;
`

export const TitleDiv = styled.div`
  width: 100%;
  min-height: 62px;
  padding: 0 24px 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${Colors.mainGray};
`

export const H3 = styled.h3`
  font-size: 16px;
  font-weight: 400;

  & a {
  color: ${Colors.mainWhite};
  text-decoration: none;
  }
`
