import styled from 'styled-components'
import { Colors } from '../../styles/colors'

export const ButtonsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 480px) {
    width: 70%;
    margin: 0 auto;
  }
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
