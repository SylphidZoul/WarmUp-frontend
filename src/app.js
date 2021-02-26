import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PostsContextProvider } from './context/PostsContext'
import { Navbar } from './components/Navbar'
import { Routes } from './routes'
import GlobalStyle from './styles'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <PostsContextProvider>
        <Routes />
      </PostsContextProvider>
    </BrowserRouter>
  )
}

export default App
