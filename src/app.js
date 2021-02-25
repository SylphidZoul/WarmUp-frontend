import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Routes } from './routes'
import GlobalStyle from './styles'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes />
    </BrowserRouter>
  )
}

export default App
