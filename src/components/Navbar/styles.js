import styled from 'styled-components'
import { Colors } from '../../styles/colors'

export const Nav = styled.nav`
  position: relative;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid ${Colors.mainGray};
  background: ${Colors.mainBlack};

  & a {
    text-decoration: none;
    color: ${Colors.mainGray};
    transition: all 200ms ease-in-out;
    &:hover {
      color: ${Colors.mainWhite}
    }
  }
`

export const Ul = styled.ul`
  width: 100%;
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 480px) {
    justify-content: flex-end;
    padding: 0 24px;
  }
`

export const Li = styled.li`
  margin-left: 48px;
`

export const Button = styled.button`
  background: ${Colors.mainWhite};
  padding: 8px 24px;
  border: 1px solid ${Colors.mainWhite};
  border-radius: 4px;
  transition: all 200ms ease-in-out;
  color: ${Colors.mainBlack};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: none;
    color: ${Colors.mainWhite};
  }
`
