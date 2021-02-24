import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div>
        Hello world
      </div>
    </BrowserRouter>
  )
}

export default App
