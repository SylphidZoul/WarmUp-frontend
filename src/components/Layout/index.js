import React from 'react'
import { Div, Header, H2 } from './styles'
import PropTypes from 'prop-types'

export const Layout = ({ title, children }) => {
  return (
    <Div>
      <Header>
        <H2>{title}</H2>
      </Header>
      {children}
    </Div>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}
