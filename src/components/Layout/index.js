import React from 'react'
import { SpinnerToast } from '../SpinnerToast'
import { ErrorToast } from '../ErrorToast'
import { Div, Header, H2 } from './styles'
import PropTypes from 'prop-types'

export const Layout = ({ title, children, isFetching = false, error = '' }) => {
  return (
    <Div>
      <Header>
        <H2>{title}</H2>
      </Header>
      <SpinnerToast isFetching={isFetching} />
      <ErrorToast errorMessage={error} />
      {children}
    </Div>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isFetching: PropTypes.bool,
  error: PropTypes.string
}
