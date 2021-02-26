import styled, { css } from 'styled-components'
import { Colors } from '../../styles/colors'

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 40px 24px;
  margin: 0 auto;
  border: 1px solid ${Colors.mainGray};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background: ${Colors.mainBlack};

  @media screen and (min-width: 480px) {
    padding: 40px 60px;
  }
`

export const H2 = styled.h2`
  margin: 0 auto 32px;
  font-weight: 500;
  font-size: 20px;
color: ${Colors.mainWhite};
`

export const Label = styled.label`
  font-weight: 400;
  margin-bottom: 16px;
  color: ${Colors.mainGray};
`

const InputStyles = css`
  padding: 8px;
  margin-bottom: 24px;
  border: 1px solid ${Colors.mainGray};
  border-radius: 4px;
  background: ${Colors.secBlack};
  color: ${Colors.mainWhite};
  font-size: 14px;
`

export const Input = styled.input`
  ${InputStyles}
`

export const TextArea = styled.textarea`
  ${InputStyles}
  resize: vertical;
  min-height: 100px;
  line-height: 20px;
  margin-bottom: 40px;
`

export const Button = styled.button`
  width: 100%;
  padding: 8px 24px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: ${Colors.mainBlue};
  color: ${Colors.mainWhite};
  font-size: 16px;
  font-weight: 600;
  transition: all 200ms ease-in-out;
  opacity: ${props => props.disabled ? '0.4' : '1'};
  cursor: pointer;

  &:hover {
    background-color: ${Colors.mainWhite};
    color: ${Colors.mainBlack};
  }
`
