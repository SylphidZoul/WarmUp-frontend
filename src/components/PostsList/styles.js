import styled from 'styled-components'

export const ListWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-gap: 32px;

  @media screen and (min-width: 480px) {
  grid-gap: 64px 32px;
  grid-template-columns: repeat(2, 1fr);
  }
`
