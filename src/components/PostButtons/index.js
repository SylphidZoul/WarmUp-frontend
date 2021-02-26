import React from 'react'
import { ButtonsDiv, Button } from './styles'
import PropTypes from 'prop-types'

export const PostButtons = ({ onEdit, onDelete }) => {
  return (
    <ButtonsDiv>
      <Button
        type='button'
        onClick={onEdit}
      >
        Edit
      </Button>
      <Button
        type='button'
        onClick={onDelete}
        remove
      >
        Delete
      </Button>
    </ButtonsDiv>
  )
}

PostButtons.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
