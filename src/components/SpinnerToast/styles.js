import styled, { keyframes } from 'styled-components'
import { Colors } from '../../styles/colors'

const spin = keyframes`
  from { 
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const fallFromAbove = keyframes`
  from {
    transform: translateY(-90%);
  }
  to {
    transform: translateY(0%);
  }
`

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 5%;
  left: calc(50% - 20px);
  padding: 10px;
  border-radius: 50%;
  background: ${Colors.mainGray};
  animation: ${fallFromAbove} 0.3s ease-out;
`

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border: 5px solid ${Colors.secBlack};
  border-top: 5px solid ${Colors.mainWhite};
  border-radius: 50%;
  animation: ${spin} 0.75s linear infinite;
`
