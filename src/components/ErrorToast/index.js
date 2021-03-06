import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Toast, Message, CloseButton } from './styles'
import PropTypes from 'prop-types'

export const ErrorToast = ({ errorMessage }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!show && !errorMessage) return
    setShow(prevState => !prevState)
  }, [errorMessage])

  return (
    show &&
      createPortal(
        <Toast>
          <Message>
            {errorMessage}
          </Message>
          <CloseButton onClick={() => setShow(false)}>x</CloseButton>
        </Toast>,
        document.getElementById('toast')
      )
  )
}

ErrorToast.propTypes = {
  errorMessage: PropTypes.string.isRequired
}
