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

export const ButtonsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 24px;
`

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  color: ${Colors.mainWhite};
  font-size: 14px;
  font-weight: 500;
  background-color: ${props => props.remove ? Colors.mainRed : Colors.mainBlue};
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.mainWhite};
    color: ${Colors.mainBlack};
  }
`
